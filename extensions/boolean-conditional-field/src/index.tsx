import * as React from 'react';
import { render } from 'react-dom';
import { RadioButtonField } from '@contentful/forma-36-react-components';
import { init, FieldExtensionSDK } from 'contentful-ui-extensions-sdk';
import '@contentful/forma-36-react-components/dist/styles.css';
import './index.css';

interface AppProps {
  sdk: FieldExtensionSDK;
}

interface AppState {
  value?: boolean;
  disabled?: boolean;
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      value: props.sdk.field.getValue() || false,
      disabled: false
    };
  }

  detachExternalChangeHandler: Function | null = null;

  componentDidMount() {
    this.props.sdk.window.startAutoResizer();

    const { field } = this.props.sdk.parameters.instance;

    console.log("field", field);

    this.props.sdk.entry.fields[field].onValueChanged(this.onCourseCategoryChange);

    // Handler for external field value changes (e.g. when multiple authors are working on the same entry).
    this.detachExternalChangeHandler = this.props.sdk.field.onValueChanged(this.onExternalChange);
  }

  componentWillUnmount() {
    if (this.detachExternalChangeHandler) {
      this.detachExternalChangeHandler();
    }
  }

  onCourseCategoryChange = (raw: string) => {
    const { field, operator, value } = this.props.sdk.parameters.instance

    if (operator === "==" || operator === "!=") {
      if (raw.toLowerCase() == value.toLowerCase()) {
        this.props.sdk.field.setValue(false);
        this.setState({
          ...this.state,
          disabled: true
        });
      } else {
        this.props.sdk.field.removeValue();
        this.setState({
          ...this.state,
          disabled: false
        });
      }
    }
  }

  onExternalChange = (value: boolean) => {
    this.setState({ value });
  };

  onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value === 'true' ? true : false;
    this.setState({ value });
    await this.props.sdk.field.setValue(value);
  };

  render() {
    return (
      <div>
        <RadioButtonField
          name="booleanConditionalField"
          id="booleanTrueField"
          value="true"
          disabled={this.state.disabled}
          checked={this.state.value === true}
          onChange={this.onChange}
          labelText="Si, utilizza per il Primo Box la fascia Best Seller Area Tematica"
          helpText=""
        />
        <RadioButtonField
          name="booleanConditionalField"
          id="booleanFalseField"
          value="false"
          disabled={this.state.disabled}
          checked={this.state.value === false}
          onChange={this.onChange}
          labelText="No, voglio personalizzare i contenuti del Primo Box"
          helpText=""
        />
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
