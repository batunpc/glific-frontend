import { gql } from '@apollo/client';

export const CREATE_EXTENSION = gql`
  mutation createExtension($input: ExtensionInput!) {
    createExtension(input: $input) {
      extension {
        code
        isActive
        module
        name
        clientId
      }
      errors {
        message
        key
      }
    }
  }
`;

export const DELETE_EXTENSION = gql`
  mutation deleteExtension($id: ID) {
    deleteExtension(id: $id) {
      Extension {
        code
        id
        insertedAt
        updatedAt
        isActive
        isValid
        module
        name
        organization {
          name
          isActive
        }
      }
    }
  }
`;

export const UPDATE_EXTENSION = gql`
  mutation updateExtension($id: ID!, $input: ExtensionInput!) {
    updateExtension(id: $id, input: $input) {
      Extension {
        code
        id
        insertedAt
        updatedAt
        isActive
        isValid
        module
        name
        organization {
          name
          isActive
        }
      }
      errors {
        message
        key
      }
    }
  }
`;
