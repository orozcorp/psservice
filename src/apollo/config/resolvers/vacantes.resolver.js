import { ObjectId } from "mongodb";
export const vacantesResolver = {
  Query: {
    obtenerVacantes: async (root, args, { db }) => {
      const vacantes = await db
        .collection("Vacantes")
        .find({
          estatus: "ACTIVO",
        })
        .toArray();
      return vacantes;
    },
    obtenerVacante: async (root, { id }, { db }) => {
      const vacante = await db.collection("Vacantes").findOne({
        _id: new ObjectId(id),
      });
      return vacante;
    },
  },
  Mutation: {
    crearVacante: async (root, { input }, { db }) => {
      try {
        const vacante = await db.collection("Vacantes").insertOne({
          ...input,
          candidatos: [],
          numeroCandidatos: 0,
          creado: new Date(),
          estatus: "ACTIVO",
        });
        return {
          code: 200,
          success: true,
          message: "Vacante creada correctamente",
          data: `Vacante ${input.nombreVacante} creada correctamente`,
        };
      } catch (error) {
        console.log(error);
        return {
          code: 400,
          success: false,
          message: "Error al crear la vacante",
          data: error,
        };
      }
    },
    actualizarVacante: async (root, { id, input }, { db }) => {
      try {
        const updatedVacante = await db.collection("Vacantes").updateOne(
          { _id: new ObjectId(id) },
          {
            $set: {
              ...input,
            },
          }
        );
        return {
          code: 200,
          success: true,
          message: "Vacante actualizada correctamente",
          data: `Vacante ${input.nombreVacante} actualizada correctamente`,
        };
      } catch (error) {
        console.log(error);
        return {
          code: 400,
          success: false,
          message: "Error al actualizar la vacante",
          data: error,
        };
      }
    },
    eliminarVacante: async (root, { id }, { db }) => {
      try {
        const deletedVacante = await db.collection("Vacantes").updateOne(
          { _id: new ObjectId(id) },
          {
            $set: {
              estatus: "INACTIVO",
            },
          }
        );
        return {
          code: 200,
          success: true,
          message: "Vacante eliminada correctamente",
          data: `Vacante eliminada correctamente`,
        };
      } catch (error) {
        console.log(error);
        return {
          code: 400,
          success: false,
          message: "Error al eliminar la vacante",
          data: error,
        };
      }
    },
    crearCandidato: async (root, { id, input }, { db }) => {
      try {
        const candidato = await db.collection("Candidatos").insertOne({
          ...input,
          creado: new Date(),
        });
        const updatedVacante = await db.collection("Vacantes").updateOne(
          { _id: new ObjectId(id) },
          {
            $push: {
              candidatos: { _id: candidato.insertedId, ...input },
            },
            $inc: {
              numeroCandidatos: 1,
            },
          }
        );
        return {
          code: 200,
          success: true,
          message: "Candidato creado correctamente",
          data: `Candidato ${input.nombre} creado correctamente`,
        };
      } catch (error) {
        console.log(error);
        return {
          code: 400,
          success: false,
          message: "Error al crear el candidato",
          data: error,
        };
      }
    },
  },
};
