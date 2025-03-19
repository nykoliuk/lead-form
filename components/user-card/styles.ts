import {FC, InputHTMLAttributes} from 'react';
import styled from 'styled-components';
import {theme} from '@/styles/theme';

export const UserInfo: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const UserName: FC<InputHTMLAttributes<HTMLSpanElement>> = styled.span`
	font-size: ${theme.typography.fontSize.lg};
	font-weight: ${theme.typography.fontWeight.bold};
`;

export const Avatar: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	background-color: ${theme.colors.muted};
	color: ${theme.colors.black};
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
`;
