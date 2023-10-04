import { mergeTypeDefs } from "@graphql-tools/merge";
import { uploadSchema } from "./schemas/uploadsAndOther.schema";
import { responses } from "./types/responses.schema";
const schema = mergeTypeDefs([
  // ...other schemas
  uploadSchema,
  responses,
]);
