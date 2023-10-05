import { gql } from "@apollo/client";

export const documents = gql`
  enum Estatus {
    ACTIVO
    INACTIVO
  }
  type Document {
    _id: ID!
    name: String!
    nameEnglish: String!
    url: String!
    createdAt: Date!
    updatedAt: Date!
    estatus: Estatus!
    extension: String!
  }
  input InputDocument {
    name: String!
    nameEnglish: String!
    url: String!
    extension: String!
  }
  input InputDocumentUpdate {
    _id: ID!
    name: String!
    nameEnglish: String!
    estatus: String!
    updatedAt: Date!
  }
  type Query {
    getDocuments: [Document]
    getLastDocument: Document
  }
  type Mutation {
    createDocument(document: InputDocument): GeneralResponse!
    updateDocument(document: InputDocumentUpdate): GeneralResponse!
    deleteDocument(_id: ID!): GeneralResponse!
  }
`;
