export async function apiFetch(url: string) {
	const response: Response = await fetch(url);

	if (!response.ok) {
		throw new Error(`Failed to fetch: ${response.statusText}`);
	}

	return await response.json();
}
