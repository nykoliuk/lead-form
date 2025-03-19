'use client';

import {FC, ReactNode, useEffect, useState} from 'react';
import {ContentArea, MainContent, Overlay, SidebarWrapper} from './styles';
import Providers from '../providers';
import {Header} from '@/components/header';
import {UseStateResult} from '@/hooks/use-state-result';
import {useMediaQuery} from '@/hooks/use-media-query';
import {Sidebar} from '@/components/sidebar';

export interface DashboardContentProps {
	children: ReactNode;
}
export const DashboardContent: FC<DashboardContentProps> = ({children}: DashboardContentProps) => {
	const [sidebarOpen, setSidebarOpen]: UseStateResult<boolean> = useState(false);
	const [isMounted, setIsMounted]: UseStateResult<boolean> = useState(false);
	const isMobile: boolean = useMediaQuery('(max-width: 768px)');

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
		<>
			<Header onToggleSidebar={toggleSidebar} />
			<SidebarWrapper aria-expanded={sidebarOpen || !isMobile}>
				<Sidebar />
			</SidebarWrapper>
			{isMounted && <Overlay aria-hidden={!sidebarOpen} onClick={closeSidebar} />}
			<MainContent>
				<ContentArea>
					<Providers>{children}</Providers>
				</ContentArea>
			</MainContent>
		</>
	);
};
