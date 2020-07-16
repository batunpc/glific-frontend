import React, { useState } from 'react';
import { Input } from '../../components/UI/Form/Input/Input';
import { GET_TEMPLATE } from '../../graphql/queries/Template';
import styles from './MessageTemplate.module.css';
import { UPDATE_TEMPLATE, CREATE_TEMPLATE } from '../../graphql/mutations/Template';
import { ReactComponent as SpeedSendIcon } from '../../assets/images/icons/SpeedSend/Selected.svg';
import { DELETE_TEMPLATE } from '../../graphql/mutations/Template';
import { ListItem } from '../List/ListItem/ListItem';

export interface TemplateProps {
  match: any;
}

export const MessageTemplate: React.SFC<TemplateProps> = ({ match }) => {
  const [label, setLabel] = useState('');
  const [body, setBody] = useState('');

  const states = { label, body };
  const setStates = ({ label, body }: any) => {
    setLabel(label);
    setBody(body);
  };

  const setValidation = (values: any) => {
    const errors: Partial<any> = {};
    if (!values.label) {
      errors.label = 'Required';
    } else if (values.label.length > 50) {
      errors.label = 'Too Long';
    }
    if (!values.body) {
      errors.description = 'Required';
    }
    return errors;
  };

  const dialogMessage = ' It will stop showing when you are drafting a customized message.';

  const formFields = [
    { component: Input, name: 'label', placeholder: 'Title' },
    { component: Input, name: 'body', placeholder: 'Message', row: 3 },
  ];

  const defaultAttribute = {
    type: 'TEXT',
  };

  const speedSendIcon = <SpeedSendIcon className={styles.SpeedSendIcon} />;

  const queries = {
    getItemQuery: GET_TEMPLATE,
    createItemQuery: CREATE_TEMPLATE,
    updateItemQuery: UPDATE_TEMPLATE,
    deleteItemQuery: DELETE_TEMPLATE,
  };

  return (
    <ListItem
      {...queries}
      match={match}
      states={states}
      setStates={setStates}
      setValidation={setValidation}
      listItemName="speed send"
      dialogMessage={dialogMessage}
      formFields={formFields}
      redirectionLink="speed-send"
      listItem="sessionTemplate"
      icon={speedSendIcon}
      defaultAttribute={defaultAttribute}
    />
  );
};
