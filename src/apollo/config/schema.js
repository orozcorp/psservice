import { mergeTypeDefs } from "@graphql-tools/merge";
import { uploadSchema } from "./schemas/uploadsAndOther.schema";
import { responses } from "./types/responses.schema";
import { documents } from "./types/Documents.schema";
const schema = mergeTypeDefs([documents, uploadSchema, responses]);
