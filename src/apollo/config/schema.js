import { mergeTypeDefs } from "@graphql-tools/merge";
import { uploadSchema } from "./types/uploadsAndOthers.schema";
import { responses } from "./types/responses.schema";
import { documents } from "./types/documents.schema";
const schema = mergeTypeDefs([documents, uploadSchema, responses]);

export default schema;
