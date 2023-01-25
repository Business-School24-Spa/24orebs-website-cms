import React from 'react';
import { Button, Grid, HelpText, ValidationMessage } from '@contentful/f36-components';
import { FieldExtensionSDK } from '@contentful/app-sdk';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

const CHOOSE_FILE_TEXT = 'Scegli un file';

const Field = () => {
  const sdk = useSDK<FieldExtensionSDK>();
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/

  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const [validationError, setValidationError] = React.useState<string>('');
  const [buttonText, setButtonText] = React.useState(CHOOSE_FILE_TEXT);
  const [fileUploaded, setFileUploaded] = React.useState<File | null>(null);
  const [tags, setTags] = React.useState<string[]>([]);

  const allowedExtensions = /(\.txt)$/i; // /(\.txt|\.csv)$/i;

  const handleClick = () => {
    if (!hiddenFileInput.current) {
      return;
    }
    hiddenFileInput.current.click();
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
  }

  const handleFileRead = (e: ProgressEvent<FileReader>) => {
    if (!e.target) {
      return;
    }
    setTags(e.target.result?.toString().split('\n') || []);
  }

  const handleClickOk = () => {
    if (!fileUploaded) {
      setValidationError('Nessun file caricato');
      return;
    }
    setValidationError('');
    const fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(fileUploaded);
    
    sdk.entry.fields[sdk.parameters.instance.destinationFieldId].setValue(tags.filter(tag => tag !== ''));
  }

  return (
    <Grid rowGap="spacingXs" rows="repeat(4, auto)" justifyContent="start">
      <Button onClick={handleClick}>
        {buttonText}
      </Button>
      <input
        ref={hiddenFileInput}
        type="file"
        style={{ display: 'none' }}
        onChange={handleChange}
      />
      {fileUploaded && <Button variant="primary" onClick={handleClickOk}>Importa keywords</Button>}
      <HelpText>Carica un file .txt, ogni riga deve contenere un tag.</HelpText>
      {validationError && validationError !== '' && <ValidationMessage>{validationError}</ValidationMessage>}
    </Grid>
  );
};

export default Field;
