import type { GraphQLContext } from '@fullstack-relay/core';
import { nodeField, nodesField } from '@fullstack-relay/graphql';
import { GraphQLObjectType } from 'graphql';
import { globalIdField } from 'graphql-relay';

import UserQueries from '../../modules/user/UserQueries';

const QueryType = new GraphQLObjectType<
  Record<string, unknown>,
  GraphQLContext
>({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    id: globalIdField('Query'),
    node: nodeField,
    nodes: nodesField,
    ...UserQueries,
  }),
});

export default QueryType;
