/* eslint-disable no-unused-vars */
import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import {
  Segment,
  Message,
  Grid,
  Form,
  Progress,
  Button,
} from 'semantic-ui-react';
import { getFieldName } from 'volto-form-block/components/utils';
import Field from 'volto-form-block/components/Field';
import config from '@plone/volto/registry';
import { useSelector } from 'react-redux';

/* Style */
import 'volto-form-block/components/FormView.css';

// eslint-disable-next-line no-unused-vars
const messages = defineMessages({
  default_submit_label: {
    id: 'form_default_submit_label',
    defaultMessage: 'Submit',
  },
  error: {
    id: 'Error',
    defaultMessage: 'Error',
  },
  success: {
    id: 'form_submit_success',
    defaultMessage: 'Sent!',
  },
  empty_values: {
    id: 'form_empty_values_validation',
    defaultMessage: 'Fill in the required fields',
  },
  reset: {
    id: 'form_reset',
    defaultMessage: 'Clear',
  },
});

const tempTranslations = {
  submitLabel: {
    en: 'Submit',
    nl: 'Verzenden',
    de: 'Schicken',
  },
  stateNormal: {
    en: 'Normal',
    nl: 'Normaal',
    de: 'Normal',
  },
  stateLoading: {
    en: 'Loading',
    nl: 'Bezig met laden',
    de: 'Wird geladen',
  },
  stateError: {
    en: 'Error',
    nl: 'Fout',
    de: 'Falsch',
  },
  stateSuccess: {
    en: 'Sent!',
    nl: 'Verzonden!',
    de: 'Gesendet!',
  },
  reset: {
    en: 'Clear',
    nl: 'Resetten',
    de: 'Zurücksetzen',
  },
  empty_values: {
    en: 'Fill in the required fields',
    nl: 'Vul de vereiste velden in',
    de: 'Füllen Sie die erforderlichen Felder aus',
  },
};

const FormView = ({
  formState,
  formErrors,
  formData,
  onChangeFormData,
  data,
  onSubmit,
  resetFormState,
  resetFormOnError,
  captcha,
  id,
}) => {
  const intl = useIntl();
  const FieldSchema = config.blocks.blocksConfig.form.fieldSchema;

  const isValidField = (field) => {
    return formErrors?.indexOf(field) < 0;
  };
  const currentLang = useSelector((state) => state.intl.locale);

  return (
    <div className="block form">
      <div className="public-ui">
        <Segment style={{ margin: '2rem 0' }} padded>
          {data.title && <h2>{data.title}</h2>}
          {data.description && (
            <p className="description">{data.description}</p>
          )}
          {formState.error ? (
            <Message error role="alert">
              <Message.Header as="h4">
                {/* {intl.formatMessage(messages.error)} */}
                {tempTranslations['stateError'][currentLang]}
              </Message.Header>
              <p>{formState.error}</p>
              <Button secondary type="clear" onClick={resetFormOnError}>
                {/* {intl.formatMessage(messages.reset)} */}
                {tempTranslations['reset'][currentLang]}
              </Button>
            </Message>
          ) : formState.result ? (
            <Message positive role="alert">
              <Message.Header as="h4">
                {/* {intl.formatMessage(messages.success)} */}
                {tempTranslations['stateSuccess'][currentLang]}
              </Message.Header>
              <p>{formState.result}</p>
              <Button secondary type="clear" onClick={resetFormState}>
                {tempTranslations['reset'][currentLang]}
              </Button>
            </Message>
          ) : (
            <Form
              id={id}
              loading={formState.loading}
              onSubmit={onSubmit}
              autoComplete="off"
              method="post"
            >
              <Grid columns={1} padded="vertically">
                {data.static_fields?.map((field) => (
                  <Grid.Row key={field.field_id} className="static-field">
                    <Grid.Column>
                      <Field
                        {...field}
                        field_type={field.field_type || 'text'}
                        name={
                          'static_field_' +
                          (field.field_id ??
                            field.name?.toLowerCase()?.replace(' ', ''))
                        }
                        value={field.value}
                        onChange={() => {}}
                        disabled
                        valid
                        formHasErrors={formErrors?.length > 0}
                      />
                    </Grid.Column>
                  </Grid.Row>
                ))}
                {data.subblocks?.map((subblock, index) => {
                  let name = getFieldName(subblock.label, subblock.id);

                  var fields_to_send = [];
                  var fieldSchemaProperties = FieldSchema(subblock)?.properties;
                  for (var key in fieldSchemaProperties) {
                    if (fieldSchemaProperties[key].send_to_backend) {
                      fields_to_send.push(key);
                    }
                  }

                  var fields_to_send_with_value = Object.assign(
                    {},
                    ...fields_to_send.map((field) => {
                      return {
                        [field]: subblock[field],
                      };
                    }),
                  );

                  return (
                    <Grid.Row
                      key={'row' + index}
                      id={`subblock-${subblock.field_type}`}
                    >
                      <Grid.Column>
                        <Field
                          {...subblock}
                          name={name}
                          onChange={(field, value) =>
                            onChangeFormData(
                              subblock.id,
                              field,
                              value,
                              fields_to_send_with_value,
                            )
                          }
                          value={
                            subblock.field_type === 'static_text'
                              ? subblock.value
                              : formData[name]?.value
                          }
                          defaultValue={subblock?.default_values}
                          valid={isValidField(name)}
                          formHasErrors={formErrors?.length > 0}
                        />
                      </Grid.Column>
                    </Grid.Row>
                  );
                })}
                {captcha.render()}
                {formErrors.length > 0 && (
                  <Message error role="alert">
                    <Message.Header as="h4">
                      {tempTranslations['reset'][currentLang]}
                    </Message.Header>
                    {/* <p>{intl.formatMessage(messages.empty_values)}</p> */}
                    <p>{tempTranslations['empty_values'][currentLang]}</p>
                  </Message>
                )}
                <Grid.Row centered className="row-padded-top">
                  <Grid.Column textAlign="center">
                    <Button primary type="submit" disabled={formState.loading}>
                      {/* {data.submit_label ||
                        // intl.formatMessage(messages.default_submit_label)} */}
                      {data.submit_label ||
                        tempTranslations['submitLabel'][currentLang]}
                      {formState.loading && (
                        <Progress
                          role="progressbar"
                          percent={100}
                          active
                          success={false}
                          color="grey"
                        />
                      )}
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Form>
          )}
        </Segment>
      </div>
    </div>
  );
};

export default FormView;
