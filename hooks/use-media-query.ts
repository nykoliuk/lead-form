'use client';

import {useState, useEffect} from "react";
import {UseStateResult} from '@/hooks/use-state-result';

export function useMediaQuery(query: string): boolean {
	const [matches, setMatches]: UseStateResult<boolean> = useState(false);

	useEffect(() => {
		const media: MediaQueryList = window.matchMedia(query);
		setMatches(media.matches);

		function listener(e: MediaQueryListEvent): void {
			setMatches(e.matches);
		}

		media.addEventListener('change', listener);

		return () => {
			media.removeEventListener('change', listener);
		}
	}, [query]);

	return matches;
}

