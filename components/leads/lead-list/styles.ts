'use client';

import {FC, InputHTMLAttributes} from 'react';
import styled, {keyframes} from 'styled-components';
import {Keyframes} from 'styled-components/dist/types';
import {theme} from '@/styles/theme';
import {Search} from 'lucide-react';
import {FormInput} from '@/styles/form/fomt-input';
import {FormSelect} from '@/styles/form/form-select';

const spin: Keyframes = keyframes`
	0% { 
		transform: rotate(0deg); 
	}
	100% { 
		transform: rotate(360deg); 
	}
`;

export const Spinner: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	text-align: center;
	
	svg {
		animation: ${spin} 1s linear infinite;
		will-change: transform;
	}
`;

export const TableContainer: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	width: 100%;
	overflow-x: auto;
	border-radius: ${theme.borderRadius.lg};
	border: 1px solid ${theme.colors.muted};
`;

export const StyledTable: FC<InputHTMLAttributes<HTMLTableElement>> = styled.table`
	width: 100%;
	border-collapse: collapse;
`;

export const TableHeader: FC<InputHTMLAttributes<HTMLElement>> = styled.thead`
	border-bottom: 1px solid ${theme.colors.muted};
`;

export const TableHeaderCell: FC<InputHTMLAttributes<HTMLElement>> = styled.th`
	padding: 1rem;
	text-align: left;
	font-weight: 400;
	color: ${theme.colors.text.secondary};
	cursor: pointer;
	user-select: none;
	white-space: nowrap;
	
	&:hover {
		color: ${theme.colors.black};
	}
`;

export const TableRow: FC<InputHTMLAttributes<HTMLTableRowElement>> = styled.tr`
	border-bottom: 1px solid ${theme.colors.muted};
	
	&:last-child {
		border-bottom: none;
	}
	
	&:hover {
		background-color: #f8fafc;
	}
`;

export const TableFoot: FC<InputHTMLAttributes<HTMLElement>> = styled.tfoot`
	border-top: 1px solid ${theme.colors.muted};
`;

export const TableCell: FC<InputHTMLAttributes<HTMLTableCellElement>> = styled.td`
	padding: 1.25rem 1rem;
	color: ${theme.colors.black};
	white-space: nowrap;
`;

export const StatusSelect: FC<InputHTMLAttributes<HTMLSelectElement>> = styled.select`
	background: transparent;
	border: none;
	cursor: pointer;
	appearance: none;
	
	&:focus {
		outline: none;
	}
`;

export const PaginationContainer: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 1rem;
	gap: 0.5rem;
`;

export const PaginationButton: FC<InputHTMLAttributes<HTMLButtonElement>> = styled.button`
	align-items: center;
	background-color: transparent;
	border: 1px solid transparent;
	border-radius: 0;
	color: ${theme.colors.black};
	cursor: pointer;
	display: inline-flex;
	font-size: 0.875rem;
	font-weight: ${theme.typography.fontWeight.medium};
	height: 2rem;
	justify-content: center;
	min-width: 2rem;
	padding: 0 0.5rem;
	
	&:hover {
		background-color: ${theme.colors.muted};
	}

	&[aria-current="page"] {
		border-color: ${theme.colors.black};
	}
	
	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

export const FilterContainer: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 1rem;
	
	@media (min-width: ${theme.breakpoints.sm}) {
		flex-direction: row;
	}
`;

export const SearchContainer: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	position: relative;
`;

export const SearchIcon: FC<InputHTMLAttributes<SVGElement>> = styled(Search)`
	position: absolute;
	left: 0.75rem;
	top: 50%;
	transform: translateY(-50%);
	color: #94a3b8;
	width: 1rem;
	height: 1rem;
`;

export const SearchInput: FC<InputHTMLAttributes<HTMLInputElement>> = styled(FormInput)`
	padding-left: 2.5rem;
	width: 100%;
	
	@media (min-width: ${theme.breakpoints.sm}) {
		width: 300px;
	}
`;

export const SearchSelect: FC<InputHTMLAttributes<HTMLSelectElement>> = styled(FormSelect)`
	width: auto;
`;

export const SortableHeader: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;
	
	&:hover {
		opacity: 0.8;
	}
`;

export const ArrowContainer: FC<InputHTMLAttributes<HTMLSpanElement>> = styled.span`
	display: inline-flex;
	width: 16px;
	height: 16px;
`;
