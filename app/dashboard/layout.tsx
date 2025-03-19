'use client';

import {ReactNode, useEffect, useState} from 'react';
import {ContentArea, DashboardContainer, MainContent, Overlay, SidebarWrapper} from '@/app/dashboard/styles';
import {Sidebar} from '@/components/sidebar';
import {UseStateResult} from '@/hooks/use-state-result';
import {useMediaQuery} from '@/hooks/use-media-query';
import {Header} from '@/components/header';
import Providers from '@/app/providers';

export default function DashboardLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	const [sidebarOpen, setSidebarOpen]: UseStateResult<boolean> = useState(false);
	const [isMounted, setIsMounted]: UseStateResult<boolean> = useState(false);
	const isMobile: boolean = useMediaQuery("(max-width: 768px)")

	useEffect(() => {
		setIsMounted(true);
	}, []);

	function toggleSidebar(): void {
		setSidebarOpen(!sidebarOpen);
	}

	function closeSidebar(): void {
		setSidebarOpen(false);
	}

	return (
		<DashboardContainer>
			<Header onToggleSidebar={toggleSidebar} />
			<SidebarWrapper aria-expanded={sidebarOpen|| !isMobile}>
				<Sidebar />
			</SidebarWrapper>
			{isMounted && (
				<Overlay aria-hidden={!sidebarOpen} onClick={closeSidebar} />
			)}
			<MainContent>
				<ContentArea>
					<Providers>
						{children}
					</Providers>
				</ContentArea>
			</MainContent>
		</DashboardContainer>
	);
}
