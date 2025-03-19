import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import {TOKEN} from '@/constants/token';

export function middleware(request: NextRequest) {
	const path: string = request.nextUrl.pathname;
	const isDashboardRoute: boolean = path.startsWith('/dashboard');

	if (!isDashboardRoute) {
		return NextResponse.next();
	}

	const token: string = request.cookies.get('auth_token')?.value || '';

	if (!token) {
		const loginUrl: URL = new URL('/login', request.url);
		loginUrl.searchParams.set('returnUrl', path);
		return NextResponse.redirect(loginUrl);
	}

	try {
		if (token === TOKEN) {
			return NextResponse.next();
		}
	} catch (error) {
		const loginUrl: URL = new URL('/login', request.url);
		loginUrl.searchParams.set('returnUrl', path);
		return NextResponse.redirect(loginUrl);
	}
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
