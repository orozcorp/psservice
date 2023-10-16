import { gql } from "@apollo/client";
export const vacantes = gql`
  type Vacante {
    id: ID!
    titulo: String!
    descripcion: String!
    contrato: String!
    ubicacion: String!
    skills: [String]
    candidatos: [Candidato]
    numeroCandidatos: Int!
    creado: Date!
    estatus: String!
  }
  type Candidato {
    id: ID!
    nombre: String!
    email: String!
    telefono: String!
    cv: String!
    creado: Date
  }
  input VacanteInput {
    titulo: String!
    descripcion: String!
    salario: String!
    contrato: String!
    ubicacion: String!
    empresa: String!
    skills: [String]
  }
  input CandidatoInput {
    nombre: String!
    email: String!
    cv: String!
  }
  type Query {
    obtenerVacantes: [Vacante]
    obtenerVacante(id: ID!): Vacante
  }
  type Mutation {
    crearVacante(input: VacanteInput): Vacante
    actualizarVacante(id: ID!, input: VacanteInput): Vacante
    eliminarVacante(id: ID!): GeneralResponse
    crearCandidato(id: ID!, input: CandidatoInput): Candidato
  }
`;
