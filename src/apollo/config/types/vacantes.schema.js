import { gql } from "@apollo/client";
export const vacantes = gql`
  type Vacante {
    _id: ID!
    nombreVacante: String!
    sueldo: Float!
    descripcion: String!
    conocimientos: String!
    funciones: String!
    horario: String!
    zonaDeTrabajo: String!
    candidatos: [Candidato]
    numeroCandidatos: Int!
    creado: Date!
    estatus: String!
  }
  type Candidato {
    _id: ID!
    nombre: String!
    email: String!
    telefono: String!
    cv: String!
    creado: Date
  }
  input VacanteInput {
    nombreVacante: String!
    sueldo: Float!
    horario: String!
    zonaDeTrabajo: String!
    descripcion: String!
    conocimientos: String!
    funciones: String!
  }
  input CandidatoInput {
    nombre: String!
    telefono: String!
    email: String!
    cv: String!
  }
  type Query {
    obtenerVacantes: [Vacante]
    obtenerVacante(id: ID!): Vacante
  }
  type Mutation {
    crearVacante(input: VacanteInput): GeneralResponse!
    actualizarVacante(id: ID!, input: VacanteInput): GeneralResponse!
    eliminarVacante(id: ID!): GeneralResponse!
    crearCandidato(id: ID!, input: CandidatoInput): GeneralResponse!
  }
`;
