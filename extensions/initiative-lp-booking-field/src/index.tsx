import * as React from 'react';
import { render } from 'react-dom';
import { TextField, TextInput } from '@contentful/forma-36-react-components';
import { init, FieldExtensionSDK } from 'contentful-ui-extensions-sdk';
import '@contentful/forma-36-react-components/dist/styles.css';
import './index.css';
import { FieldGroup, CheckboxField } from '@contentful/forma-36-react-components';

interface AppProps {
  sdk: FieldExtensionSDK;
}

interface FieldValue {
  enabled: boolean;
  fastBooking: boolean;
  url: string;
  directLink: boolean;
  courseId: string;
  sessionId: string;
}

interface AppState {
  value: FieldValue;
}

const defaultData: FieldValue = {
  enabled: false,
  fastBooking: false,
  url: '',
  directLink: false,
  courseId: '',
  sessionId: ''
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      value: typeof props.sdk.field.getValue() !== 'undefined' ? props.sdk.field.getValue() : defaultData
    };
  }

  detachExternalChangeHandler: Function | null = null;

  componentDidMount() {
    this.props.sdk.window.startAutoResizer();

    this.props.sdk.field.onSchemaErrorsChanged(this.validateField);

    // Handler for external field value changes (e.g. when multiple authors are working on the same entry).
    // this.detachExternalChangeHandler = this.props.sdk.field.onValueChanged(this.onExternalChange);
  }

  componentWillUnmount() {
    if (this.detachExternalChangeHandler) {
      this.detachExternalChangeHandler();
    }
  }

  onExternalChange = (value: FieldValue) => {
    this.setState({ value });
  };

  bookingEnabledOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (this.state.value.enabled) {
      this.saveField({
        ...this.state.value,
        enabled: false
      });
    } else {
      this.saveField({
        ...this.state.value,
        enabled: true
      });
    }
  };

  fastBookingEnabledOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (this.state.value.fastBooking) {
      this.saveField({
        ...this.state.value,
        fastBooking: false,
      });
    } else {
      this.saveField({
        ...this.state.value,
        fastBooking: true,
      });
    }
  };

  bookingUrlOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.saveField({
      ...this.state.value,
      url: e.target.value,
    });
  };

  bookingLinkTypeOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (this.state.value.directLink) {
      this.saveField({
        ...this.state.value,
        directLink: false,
      });
    } else {
      this.saveField({
        ...this.state.value,
        directLink: true,
      });
    }
  };

  bookingCourseIdOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.saveField({
      ...this.state.value,
      courseId: e.target.value,
    });
  };

  bookingSessionIdOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.saveField({
      ...this.state.value,
      sessionId: e.target.value,
    });
  };

  saveField = async (value: FieldValue) => {
    this.setState({ value });
    await this.props.sdk.field.setValue(value);
  };

  validateField = () => {
    if (this.state.value.enabled) {
      this.props.sdk.field.setInvalid(true);
      this.props.sdk.notifier.error(
        'Tutti i campi attivi devono essere compilati.'
      );
      return;
    }
    
    this.props.sdk.field.setInvalid(false);
  };

  render() {
    return (
      <div>
        <FieldGroup>
          <CheckboxField
            name="bookingEnabled"
            id="bookingEnabled"
            labelText="Abilita tasto iscrizione per l’evento"
            checked={this.state.value.enabled}
            onChange={this.bookingEnabledOnChangeHandler}
          />
        </FieldGroup>
        {this.state.value.enabled ? (
          <div>
            <FieldGroup>
              <CheckboxField
                name="fastBookingEnabled"
                id="fastBookingEnabled"
                labelText="Iscrizione con form interno senza registrazione e login"
                checked={this.state.value.fastBooking}
                onChange={this.fastBookingEnabledOnChangeHandler}
              />
            </FieldGroup>
            <FieldGroup>
              <TextField
                name="bookingUrl"
                id="bookingUrl"
                labelText="URL di destinazione dell’evento"
                helpText="Inserire l’URL dell’evento della piattaforma Elearning oppure, abilitando l’apposita funzione, e’ possibile utilizzare un URL custom per eventi con prenotazione esterna a 24Ore BS"
                textInputProps={
                  {
                    disabled: this.state.value.fastBooking,
                    required: !this.state.value.fastBooking
                  }
                }
                value={this.state.value.url}
                onChange={this.bookingUrlOnChangeHandler}
              />
            </FieldGroup>
            <FieldGroup>
              <CheckboxField
                name="bookingLinkType"
                id="bookingLinkType"
                labelText="Evento con iscrizione esterna alla piattaforma Elearning"
                helpText="Se abilitato gli utenti vengono redirezionati direttamente alla destinazione senza il passaggio tramite il form predefinito d’iscrizione 24Ore BS"
                disabled={this.state.value.fastBooking}
                checked={this.state.value.directLink}
                onChange={this.bookingLinkTypeOnChangeHandler}
              />
            </FieldGroup>
          </div>
        ) : null}
      </div>
    );
  };
}

init(sdk => {
  render(<App sdk={sdk as FieldExtensionSDK} />, document.getElementById('root'));
});

/**
 * By default, iframe of the extension is fully reloaded on every save of a source file.
 * If you want to use HMR (hot module reload) instead of full reload, uncomment the following lines
 */
// if (module.hot) {
//   module.hot.accept();
// }
