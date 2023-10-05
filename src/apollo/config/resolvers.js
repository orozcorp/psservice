const { mergeResolvers } = require("@graphql-tools/merge");

import { documentsResolver } from "./resolvers/documents.resolver";
import { uploadsResolver } from "./resolvers/uploadsAndOther.resolver";

const resolvers = mergeResolvers([uploadsResolver, documentsResolver]);

export default resolvers;
