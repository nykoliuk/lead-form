'use client';

import {createGlobalStyle, ExecutionProps} from 'styled-components';
import {NamedExoticComponent} from 'react';
import {theme} from '@/styles/theme';

export const GlobalStyle: NamedExoticComponent<ExecutionProps & object> = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html,
	body {
		font-family: ${theme.typography.fontFamily.sans};
		font-size: ${theme.typography.fontSize.md};
		line-height: ${theme.typography.lineHeight.normal};
		color: ${theme.colors.black};
		background-color: ${theme.colors.background};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		overflow-x: hidden;
	}

	body.sidebar-open {
		overflow: hidden;
	}

	a {
		color: ${theme.colors.primary};
		text-decoration: none;
	
		&:hover {
		  text-decoration: none;
		}
	}

	button {
		cursor: pointer;
	}

	input, button, textarea, select {
		font-family: inherit;
		font-size: inherit;
	}
`;
