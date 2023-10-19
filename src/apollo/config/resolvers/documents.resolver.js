import { ObjectId } from "mongodb";
import nodemailer from "nodemailer";

const nodemailerMailgun = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: process.env.EMAIL_SERVER_PORT,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

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
    contact: async (root, { contact: contacto }, ctx) => {
      try {
        const { name, email, phone, message } = contacto;
        const mailOptions = {
          from: "contacto@psservice.com.mx",
          to: "jnegrete@psservice.com.mx",
          subject: `Contacto de cliente ${name}`,
          text: `Recibiste un mensaje de : Nombre: ${name} \n Email: ${email} \n Teléfono: ${phone} \n Mensaje: ${message}`,
          html: `
                <!DOCTYPE html>
                  <html lang="es">
                  <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <style>
                      body {
                          background-color: #f0f0f0;
                          font-family: Arial, sans-serif;
                          color: #23283C;
                      }
                      .container {
                          margin: 0 auto;
                          padding: 20px;
                          background-color: #ffffff;
                          border-radius: 8px;
                          max-width: 500px;
                      }
                      .header {
                          background-color: #23283C;
                          padding: 20px;
                          border-radius: 8px 8px 0 0;
                          color: #ffffff;
                          text-align: center;
                      }
                      .content {
                          padding: 20px;
                      }
                      .info {
                          margin-bottom: 10px;
                      }
                  </style>
                  </head>
                  <body>
                  <div class="container">
                      <div class="header">
                          <h1>¡Has recibido un nuevo mensaje!</h1>
                      </div>
                      <div class="content">
                          <div class="info">
                              <strong>Nombre:</strong> ${name}
                          </div>
                          <div class="info">
                              <strong>Email:</strong> ${email}
                          </div>
                          <div class="info">
                              <strong>Teléfono:</strong> ${phone}
                          </div>
                          <div class="info">
                              <strong>Mensaje:</strong> ${message}
                          </div>
                      </div>
                  </div>
                  </body>
                  </html>
          `,
        };
        await nodemailerMailgun.sendMail(mailOptions);

        return { code: 200, success: true, message: `Se Edito ` };
      } catch (error) {
        console.log(error);
        return {
          code: error.extensions.response.status,
          success: false,
          message: error.message,
        };
      }
    },
  },
};
