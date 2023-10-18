const { mergeResolvers } = require("@graphql-tools/merge");

import { documentsResolver } from "./resolvers/documents.resolver";
import { uploadsResolver } from "./resolvers/uploadsAndOther.resolver";
import { vacantesResolver } from "./resolvers/vacantes.resolver";

const resolvers = mergeResolvers([
  uploadsResolver,
  documentsResolver,
  vacantesResolver,
]);

export default resolvers;
