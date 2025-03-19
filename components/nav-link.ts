import Link, {LinkProps} from 'next/link';
import styled from 'styled-components';
import {FC, PropsWithChildren} from 'react';
import {theme} from '@/styles/theme';

interface NavLinkProps extends LinkProps, PropsWithChildren {}
export const NavLink: FC<NavLinkProps> = styled(Link)<NavLinkProps>`
	display: block;
	color: ${theme.colors.black};
	transition: ${theme.transitions.default};
	text-decoration: none;
  
	&:hover {
		color: ${theme.colors.primary};
		text-decoration: none;
	}
	
	&[aria-current='page'] {
		font-weight: ${theme.typography.fontWeight.bold};
	}
`;
