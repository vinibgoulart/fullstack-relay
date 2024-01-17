import { GraphQLContext } from '@fullstack-relay/core';
import {
  connectionDefinitions,
  nodeInterface,
  registerTypeLoader,
} from '@fullstack-relay/graphql';
import { IUser, UserLoader } from '@fullstack-relay/user';
import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';

const UserType = new GraphQLObjectType<IUser, GraphQLContext>({
  name: 'User',
  description: 'Represents a User',
  fields: () => ({
    id: globalIdField('User'),
    firstName: {
      type: GraphQLString,
      resolve: (user) => user.firstName,
    },
    email: {
      type: GraphQLString,
      resolve: (user) => user.email,
    },
  }),
  interfaces: () => [nodeInterface],
});

export const UserConnection = connectionDefinitions({
  name: 'User',
  nodeType: UserType,
});

registerTypeLoader(UserType, UserLoader.load);

export default UserType;
