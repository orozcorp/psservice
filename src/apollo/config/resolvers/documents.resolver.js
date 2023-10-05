import { ObjectId } from "mongodb";
export const documentsResolver = {
  Query: {
    getDocuments: async (root, args, { db }) => {
      const documents = await db
        .collection("Documents")
        .find({
          estatus: "ACTIVO",
        })
        .toArray();
      return documents;
    },
    getLastDocument: async (root, args, { db }) => {
      const lastDocument = await db
        .collection("Documents")
        .findOne({ estatus: "ACTIVO" }, { sort: { updatedAt: -1 } });
      return lastDocument;
    },
  },
  Mutation: {
    createDocument: async (root, { document }, { db }) => {
      try {
        const newDocument = await db.collection("Documents").insertOne({
          ...document,
          createdAt: new Date(),
          updatedAt: new Date(),
          estatus: "ACTIVO",
        });
        return {
          code: 200,
          success: true,
          message: "Documento creado correctamente",
          data: `Documento ${document.name}.${document.extension} subido correctamente`,
        };
      } catch (error) {
        console.log(error);
        return {
          code: 400,
          success: false,
          message: "Error al subir el documento",
          data: error,
        };
      }
    },
    updateDocument: async (root, { document }, { db }) => {
      try {
        const updatedDocument = await db.collection("Documents").updateOne(
          { _id: document._id },
          {
            $set: {
              ...document,
            },
          }
        );
        return {
          code: 200,
          success: true,
          message: "Documento actualizado correctamente",
          data: `Documento ${document.name} actualizado correctamente`,
        };
      } catch (error) {
        console.log(error);
        return {
          code: 400,
          success: false,
          message: "Error al actualizar el documento",
          data: error,
        };
      }
    },
    deleteDocument: async (root, { ids }, { db }) => {
      try {
        const objectIds = ids.map((id) => new ObjectId(id));

        const deletedDocument = await db
          .collection("Documents")
          .deleteMany({ _id: { $in: objectIds } });
        return {
          code: 200,
          success: true,
          message: "Documento eliminado correctamente",
          data: `Documento eliminado correctamente`,
        };
      } catch (error) {
        console.log(error);
        return {
          code: 400,
          success: false,
          message: "Error al eliminar el documento",
          data: error,
        };
      }
    },
  },
};
