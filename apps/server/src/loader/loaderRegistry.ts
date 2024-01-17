import { getLoaderRegistry } from '@fullstack-relay/graphql';
import { UserLoader } from '@fullstack-relay/user';

const { registerLoader, getDataloaders } = getLoaderRegistry();

registerLoader('UserLoader', UserLoader.getLoader);

export { getDataloaders, registerLoader };
