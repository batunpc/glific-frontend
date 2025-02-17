import React from 'react';
import { FormControl, FormHelperText } from '@material-ui/core';
import 'react-phone-input-2/lib/bootstrap.css';
import { getIn } from 'formik';
import ReactPhoneInput from 'react-phone-input-2';

import styles from './PhoneInput.module.css';

export interface InputProps {
  enableSearch?: boolean;
  inputProps?: {
    name: string;
    required: boolean;
    autoFocus: boolean;
  };
  helperText: string;
  field: any;
  placeholder: string;
  form: { errors: any; setFieldValue: any };
}

export const PhoneInput = ({
  enableSearch = true,
  form: { errors, setFieldValue },
  field,
  inputProps = {
    name: field.name,
    required: true,
    autoFocus: false,
  },
  placeholder,
}: InputProps) => {
  const errorText = getIn(errors, field.name);

  return (
    <div className={styles.Input} data-testid="phoneInput">
      <FormControl>
        <ReactPhoneInput
          containerClass={styles.Container}
          inputClass={styles.PhoneNumber}
          data-testid="phoneNumber"
          placeholder={placeholder}
          enableSearch={enableSearch}
          country="in"
          autoFormat={false}
          inputProps={inputProps}
          {...field}
          value={field.value}
          onChange={(event) => {
            setFieldValue(field.name, event);
          }}
        />
        {errorText ? (
          <FormHelperText classes={{ root: styles.FormHelperText }}>{errorText}</FormHelperText>
        ) : null}
      </FormControl>
    </div>
  );
};
