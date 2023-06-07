import React from 'react';
import { Button, Grid, HelpText, ValidationMessage } from '@contentful/f36-components';
import { FieldExtensionSDK } from '@contentful/app-sdk';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';
import { DeleteIcon } from '@contentful/f36-icons';

const CHOOSE_FILE_TEXT = 'Scegli un file';

const Field = () => {
  const {entry, parameters, dialogs, window} = useSDK<FieldExtensionSDK>();
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/
  const fieldWrapper = React.useRef<HTMLInputElement>(null);
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const [validationError, setValidationError] = React.useState<string>('');
  const [buttonText, setButtonText] = React.useState(CHOOSE_FILE_TEXT);
  const [fileUploaded, setFileUploaded] = React.useState<File | null>(null);
  const [tags, setTags] = React.useState<string[]>([]);
  const [showDeleteButton, setShowDeleteButton] = React.useState<boolean>(entry.fields[parameters.instance.destinationFieldId].getValue() ? true : false);

  const allowedExtensions = /(\.txt)$/i; // /(\.txt|\.csv)$/i;

  const handleChooseFileClick = () => {
    if (!hiddenFileInput.current) {
      return;
    }
    hiddenFileInput.current.click();
  };

  const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.currentTarget.value = '';
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || !allowedExtensions.exec(event.target.value)) {
      setValidationError('File non valido, deve essere un file di testo .txt');
      setButtonText(CHOOSE_FILE_TEXT);
      setFileUploaded(null);
      return;
    }
    setValidationError('');
    const tmpFileUploaded = event.target.files[0];
    setFileUploaded(tmpFileUploaded);
    setButtonText(tmpFileUploaded.name);
    const fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(tmpFileUploaded);
  }

  const removeDuplicates = (arr: string[]) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  const removeEmpty = (arr: string[]) => {
    return arr.filter((item) => item.trim() !== '');
  }

  const handleFileRead = (e: ProgressEvent<FileReader>) => {
    if (!e.target) {
      return;
    }
    let tempTags = e.target.result?.toString().split(/[\r\n]+/) || [];
    if (tempTags?.length < 0) {
      return;
    }
    tempTags = removeDuplicates(tempTags);
    tempTags = removeEmpty(tempTags);

    // check if tags aren't more than 1000
    if (tempTags?.length < 1 || tempTags?.length > 1000) {

      tempTags?.length < 1 && setValidationError('File vuoto.');
      tempTags?.length > 1000 && setValidationError('Massimo 1000 keywords.');

      setButtonText(CHOOSE_FILE_TEXT);
      setFileUploaded(null);
      return;
    }


    const regex = /^[^&|?=\\/.,:;<>()[\]{}!]*$/;
    const invalidTags = tempTags.filter((tag) => !regex.test(tag));
    if (invalidTags?.length > 0) {
      setValidationError(`Le seguenti keywords non sono valide:\n${invalidTags.join(',\n')}\nLe keywords devono contenere solo lettere, numeri, spazi e trattini.`);
      setButtonText(CHOOSE_FILE_TEXT);
      setFileUploaded(null);
      return;
    }


    setTags(tempTags);
  }

  const handleImportClick = () => {
    dialogs.openConfirm({
      title: 'Importa keywords',
      message: `Sei sicuro di voler importare ${tags ? tags.length : 0} keywords? Questa azione cancellerà eventuali keywords già presenti nel campo.`,
      intent: 'positive',
      confirmLabel: 'Importa',
      cancelLabel: 'Annulla',
      shouldCloseOnEscapePress: true,
      shouldCloseOnOverlayClick: true
    }).then((result) => {
      if (result) {
        entry.fields[parameters.instance.destinationFieldId].setValue(tags);
      }
    });
  }

  const handleDeleteClick = () => {
    dialogs.openConfirm({
      title: 'Cancella keywords',
      message: 'Sei sicuro di voler cancellare tutte le keywords?',
      intent: 'negative',
      confirmLabel: 'Cancella',
      cancelLabel: 'Annulla',
      shouldCloseOnEscapePress: true,
      shouldCloseOnOverlayClick: true
    }).then((result) => {
      if (result) {
        setTags([])
        entry.fields[parameters.instance.destinationFieldId].setValue([]);
      }
    });
  }

  React.useEffect(() => {
    if (!fieldWrapper.current) {
      return;
    }
    const resizeObserver = new ResizeObserver(() => {
      window.updateHeight();
    });
    resizeObserver.observe(fieldWrapper.current);
    return () => {
      resizeObserver.disconnect();
    }
  }, [fieldWrapper, window]);

  React.useEffect(() => {
    entry.fields[parameters.instance.destinationFieldId].onValueChanged((value) => {
      setShowDeleteButton(value?.length > 0 ? true : false);
    });
  }, [entry, parameters.instance.destinationFieldId]);

  return (
    <Grid ref={fieldWrapper} rowGap="spacingXs" rows="repeat(4, auto)" justifyContent="start">
      <Button onClick={handleChooseFileClick}>
        {buttonText}
      </Button>
      <input
        ref={hiddenFileInput}
        type="file"
        style={{ display: 'none' }}
        onChange={handleChange}
        onClick={handleInputClick}
      />
      {fileUploaded && <Button variant="primary" onClick={handleImportClick}>Importa keywords</Button>}
      <HelpText>Carica un file .txt, ogni riga deve contenere un tag. Massimo 1000 keywords.</HelpText>
      {validationError && validationError !== '' && <ValidationMessage style={{whiteSpace: "pre-wrap"}}>{validationError}</ValidationMessage>}

      {showDeleteButton && <Button variant="negative" startIcon={<DeleteIcon />} onClick={handleDeleteClick}>Cancella keywords</Button>}
    </Grid>
  );
};

export default Field;
