
import { config } from '@fullstack-relay/config';
import type { GraphQLContext } from '@fullstack-relay/core';
import { getObjectId } from '@fullstack-relay/graphql';
import type { IUser } from '@fullstack-relay/user';
import jwt from 'jsonwebtoken';

// 1 year
// eslint-disable-next-line
const maxAge = 365 * 24 * 60 * 60 * 100;

export const setSessionTokenCookie = async (
  context: GraphQLContext,
  COLLECTION_SESSION_COOKIE: string,
  token: string | null,
) => {
  const domain = config.FULLSTACK_RELAY_ENV === 'production' ? 'fullstack-relay.com' : undefined;

  try {
    const options = {
      domain,
      httpOnly: true,
      secure: config.FULLSTACK_RELAY_ENV !== 'development',
      sameSite: 'lax',
      path: '/',
      maxAge,
    };

    context.koaContext.cookies.set(COLLECTION_SESSION_COOKIE, token, options);
  } catch (err) {
    // eslint-disable-next-line
    console.log('set cookie failed: ', err);
  }
};

export const generateCollectionToken = (model: IUser, scope: string) =>
  jwt.sign(
    {
      id: getObjectId(model)?.toString(),
      scope,
    },
    config.JWT_KEY,
  );

export const generateUserToken = (model: IUser, scope: string) =>
  jwt.sign(
    {
      id: getObjectId(model)?.toString(),
      scope,
    },
    config.JWT_KEY,
  );
