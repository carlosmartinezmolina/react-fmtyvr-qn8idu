import * as React from 'react';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { Error } from '@progress/kendo-react-labels';
import { createRoot } from 'react-dom/client';
import {
  DropDownList,
  DropDownListChangeEvent,
} from '@progress/kendo-react-dropdowns';

const App = () => {
  const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
  const sizes = [
    { name: 'X-Small', id: 0 },
    { name: 'Small', id: 1 },
    { name: 'Medium', id: 2 },
    { name: 'Large', id: 3 },
    { name: 'X-Large', id: 4 },
    { name: '2X-Large', id: 5 },
  ];
  const [initials, setInitials] = React.useState({
    email: { name: 'Large', id: 3 },
  });

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={initials}
      render={(formRenderProps) => (
        <FormElement
          style={{
            maxWidth: 650,
          }}
        >
          <fieldset className={'k-form-fieldset'}>
            <div className="mb-3">
              <Field
                name={'email'}
                type={'email'}
                component={DropdownList}
                formProps={formRenderProps}
                textField={'name'}
                data={sizes}
                label={'Email'}
              />
            </div>
          </fieldset>
          <div className="k-form-buttons">
            <button
              type={'submit'}
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
              disabled={!formRenderProps.allowSubmit}
            >
              Submit
            </button>
          </div>
        </FormElement>
      )}
    />
  );
};

const DropdownList = (fieldRenderProps) => {
  const {
    label,
    validationMessage,
    disabled,
    data,
    id,
    textField,
    valid,
    touched,
    hint,
    ...others
  } = fieldRenderProps;
  return (
    <div>
      <DropDownList
        style={{ width: '300px' }}
        data={data}
        value={others.value}
        textField={textField}
        onChange={others.onChange}
        {...others}
      />
    </div>
  );
};

createRoot(document.querySelector('my-app')).render(<App />);
