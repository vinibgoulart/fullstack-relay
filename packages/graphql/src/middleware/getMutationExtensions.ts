import type { GraphQLFieldConfigMap, GraphQLResolveInfo } from 'graphql';

import type { GraphQLContext } from '@fullstack-relay/types';

export const getMutationExtensions = (
  info: GraphQLResolveInfo,
  mutationName: string,
): GraphQLFieldConfigMap<any, GraphQLContext> | null | void => {
  const mutationType = info.schema.getMutationType();

  if (!mutationType) {
    return null;
  }

  const fields = mutationType.getFields();

  return fields[mutationName].extensions;
};
