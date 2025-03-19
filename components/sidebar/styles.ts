import styled from 'styled-components';
import {theme} from '@/styles/theme';
import {FC, InputHTMLAttributes} from 'react';

export const SidebarContainer: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: ${theme.spacing[10]} ${theme.spacing[8]};
`;

export const SidebarHeader: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	margin-bottom: ${theme.spacing[12]};
`;

export const Logo: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	color: ${theme.colors.primary};
	font-size: ${theme.typography.fontSize['4xl']};
	font-weight: ${theme.typography.fontWeight.bold};
`;

export const SidebarNav: FC<InputHTMLAttributes<HTMLElement>> = styled.nav`
	flex: 1;
`;

export const SidebarNavList: FC<InputHTMLAttributes<HTMLUListElement>> = styled.ul`
	display: flex;
	flex-direction: column;
	gap: ${theme.spacing[3]};
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const SidebarFooter: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin-top: ${theme.spacing[12]};
`;

export const LogOutButton: FC<InputHTMLAttributes<HTMLButtonElement>> = styled.button`
	background: none;
	border: none;
	color: ${theme.colors.black};
	cursor: pointer;
	padding: 0.25rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
