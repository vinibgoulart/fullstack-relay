import { Theme } from '@fullstack-relay/ui';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Providers({ children }: Props) {
  return <Theme>{children}</Theme>;
}
