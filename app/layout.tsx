import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {NextFont} from 'next/dist/compiled/@next/font';
import {ReactNode} from 'react';
import {GlobalStyle} from '@/styles/global';
import StyledComponentsRegistry from '@/styles/styled-component-registry';

const inter: NextFont = Inter({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Alma',
	description: 'Immigration made easy!',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<StyledComponentsRegistry>
					<GlobalStyle />
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
