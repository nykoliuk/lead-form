'use client';

import {FC} from 'react';
import {HeaderNav, Logo, MenuButton} from '@/components/header/styles';
import {PanelRight} from 'lucide-react';

export interface HeaderProps {
	onToggleSidebar: () => void;
}
export const Header: FC<HeaderProps> = ({onToggleSidebar}: HeaderProps) => {
	return (
		<HeaderNav>
			<Logo>
				almā
			</Logo>
			<MenuButton onClick={onToggleSidebar} aria-label="Toggle sidebar">
				<PanelRight size={24} />
			</MenuButton>
		</HeaderNav>
	);
}
