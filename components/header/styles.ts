import {FC, InputHTMLAttributes} from 'react';
import styled from 'styled-components';
import {theme} from '@/styles/theme';

export const HeaderNav: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	position: sticky;
	top: 0;
	z-index: 10;
	background-color: white;
	padding: 0 16px;
	border-bottom: 1px solid ${theme.colors.muted};
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 60px;
	
	@media (min-width: ${theme.breakpoints.md}) {
		display: none;
	}
`;

export const Logo: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	color: ${theme.colors.primary};
	font-size: ${theme.typography.fontSize['2xl']};
	font-weight: ${theme.typography.fontWeight.bold};
`;

export const MenuButton: FC<InputHTMLAttributes<HTMLButtonElement>> = styled.button`
	background: none;
	border: none;
	color: ${theme.colors.black};
	cursor: pointer;
	padding: 0.25rem;
	display: flex;
	align-items: center;
	justify-content: center;
	
	@media (min-width: ${theme.breakpoints.md}) {
		display: none;
	}
`;
