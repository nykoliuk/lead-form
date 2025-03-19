'use client';

import {FC} from 'react';
import {Logo, LogOutButton, SidebarContainer, SidebarFooter, SidebarHeader, SidebarNav, SidebarNavList} from '@/components/sidebar/styles';
import {usePathname, useRouter} from 'next/navigation';
import {NavLink} from '@/components/nav-link';
import {UserCard} from '@/components/user-card';
import Cookies from 'js-cookie';
import {LogOut} from 'lucide-react';
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Link from 'next/link';

interface NavItem {
	label: string
	href: string
}
const navItems: NavItem[] = [
	{label: 'Leads', href: '/dashboard'},
	{label: 'Settings', href: ''},
]

export const Sidebar: FC = () => {
	const pathname: string = usePathname();
	const router: AppRouterInstance = useRouter();

	async function handleLogout() {
		Cookies.set('auth_token', '', { maxAge: 0, path: '/', sameSite: 'strict' });
		localStorage.removeItem('auth_token');
		localStorage.removeItem('user');
		router.push('/login');
	}

	return (
		<SidebarContainer>
			<SidebarHeader>
				<Link href="/">
					<Logo>
						almā
					</Logo>
				</Link>
			</SidebarHeader>
			<SidebarNav>
				<SidebarNavList>
					{navItems.map((item: NavItem) => (
						<li key={item.href}>
							<NavLink href={item.href} aria-current={pathname === item.href ? 'page' : undefined}>
								{item.label}
							</NavLink>
						</li>
					))}
				</SidebarNavList>
			</SidebarNav>
			<SidebarFooter>
				<UserCard />
				<LogOutButton onClick={handleLogout} aria-label="Log out">
					<LogOut size={24} />
				</LogOutButton>
			</SidebarFooter>
		</SidebarContainer>
	);
}
