'use client';

import styled from 'styled-components';
import {theme} from '@/styles/theme';
import {FC, InputHTMLAttributes} from 'react';

export const DashboardContainer: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	min-height: 100vh;
	
	@media (min-width: ${theme.breakpoints.md}) {
		display: flex;
	}
`;

export const MainContent: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

export const SidebarWrapper: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	height: 100vh;
	width: 250px;
	background-color: ${theme.colors.white};
	border-right: 1px solid ${theme.colors.muted};
	
	@media (max-width: ${theme.breakpoints.md}) {
		position: fixed;
		top: 0;
		left: 0;
		background-color: white;
		z-index: 50;
		transform: translateX(-100%);
		box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
		
		&[aria-expanded='true'] {
			transform: translateX(0);
		}
	}
`;


export const Overlay: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 40;
	
	&[aria-hidden='false'] {
		display: block;
	}
	
	@media (min-width: 769px) {
		&,
		&[aria-hidden='false'] {
			display: none;
		}
	}
`;

export const ContentArea: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	flex: 1;
	padding: ${theme.spacing['10']} ${theme.spacing['4']};
	
	@media (min-width: ${theme.breakpoints.md}) {
		padding: ${theme.spacing['10']} ${theme.spacing['8']};
	}
`;
