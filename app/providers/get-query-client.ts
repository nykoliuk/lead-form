import {
	QueryClient,
	defaultShouldDehydrateQuery,
	isServer,
} from '@tanstack/react-query';

function makeQueryClient(): QueryClient {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 1000 * 60 * 5,
			},
			dehydrate: {
				shouldDehydrateQuery: (query) =>
					defaultShouldDehydrateQuery(query) ||
					query.state.status === 'pending',
			},
		},
	})
}

let browserQueryClient: QueryClient | undefined = undefined

export function getQueryClient(): QueryClient {
	if (isServer) {
		return makeQueryClient()
	} else {
		if (!browserQueryClient) browserQueryClient = makeQueryClient()
		return browserQueryClient
	}
}
