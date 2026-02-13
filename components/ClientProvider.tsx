'use client';

import { UserProvider } from '@/app/contexts/UserContext';
import { ReactNode } from 'react';

export default function ClientProviders({ children }: { children: ReactNode }) {
  return <UserProvider>{children}</UserProvider>;
}