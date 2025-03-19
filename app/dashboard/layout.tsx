import {ReactNode} from 'react';
import {DashboardContainer} from '@/app/dashboard/styles';
import {DashboardContent} from './dashboard-content';

export default function DashboardLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<DashboardContainer>
			<DashboardContent>{children}</DashboardContent>
		</DashboardContainer>
	);
}
