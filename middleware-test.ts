import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export function middlewareTest(request: NextRequest) {
	const path: string = request.nextUrl.pathname;
	const isDashboardRoute: boolean = path.startsWith('/dashboard');
	const loginUrl: URL = new URL('/login', request.nextUrl.origin);

	if (!isDashboardRoute) {
		return NextResponse.next();
	}

	const token: string = request.cookies.get('auth_token')?.value || '';

	if (!token) {
		return NextResponse.redirect(loginUrl);
	}

	try {
		if (token === process.env.JWT_SECRET) {
			return NextResponse.next();
		}
	} catch (error) {
		return NextResponse.redirect(loginUrl);
	}
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
