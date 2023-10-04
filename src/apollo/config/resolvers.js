const { mergeResolvers } = require("@graphql-tools/merge");

import { uploadsResolver } from "./resolvers/uploadsAndOther.resolver";

const resolvers = mergeResolvers([uploadsResolver]);

export default resolvers;
