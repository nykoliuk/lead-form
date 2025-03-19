'use client';

import {FC, InputHTMLAttributes} from 'react';
import styled from 'styled-components';
import {theme} from '@/styles/theme';

export const PageHeader: FC<InputHTMLAttributes<HTMLDivElement>> = styled.div`
	margin-bottom: ${theme.spacing[8]};
`;
