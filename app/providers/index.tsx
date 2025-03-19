'use client';

import {ReactNode} from 'react';
import {getQueryClient} from '@/app/providers/get-query-client';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export default function Providers({children}: {children: ReactNode}) {
	const queryClient: QueryClient = getQueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
}
