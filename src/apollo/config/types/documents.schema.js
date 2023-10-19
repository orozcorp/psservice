import { gql } from "@apollo/client";

export const documents = gql`
  enum Estatus {
    ACTIVO
    INACTIVO
  }
  type Document {
    _id: ID!
    name: String!
    url: String!
    createdAt: Date!
    updatedAt: Date!
    estatus: Estatus!
    extension: String!
  }
  input InputDocument {
    name: String!
    url: String!
    extension: String!
  }
  input InputDocumentUpdate {
    _id: ID!
    name: String!
    estatus: String!
    updatedAt: Date!
  }
  input Contact {
    name: String!
    email: String!
    phone: String!
    message: String!
  }
  type Query {
    getDocuments: [Document]
    getLastDocument: Document
  }
  type Mutation {
    createDocument(document: InputDocument): GeneralResponse!
    updateDocument(document: InputDocumentUpdate): GeneralResponse!
    deleteDocument(ids: [ID!]): GeneralResponse!
    contact(contact: Contact): GeneralResponse!
  }
`;
