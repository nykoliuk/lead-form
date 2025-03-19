import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {FlatCompat} from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

export default [
	...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'),
	{
		rules: {
			'prettier/prettier': [
				'error',
				{
					useTabs: true,
					tabWidth: 4,
					singleQuote: true,
					printWidth: 125,
					jsxSingleQuote: true,
					bracketSpacing: false,
					jsxBracketSameLine: false,
				},
			],
			indent: ['error', 'tab'],
			quotes: ['error', 'single', {avoidEscape: true}],
			'jsx-quotes': ['error', 'prefer-single'],
			'react/jsx-indent': ['error', 'tab'],
			'react/jsx-indent-props': ['error', 'tab'],
			'react/jsx-one-expression-per-line': ['error', {allow: 'none'}],
			'@typescript-eslint/indent': ['error', 'tab'],
			'@typescript-eslint/quotes': ['error', 'single', {avoidEscape: true}],
			'object-curly-spacing': ['error', 'never'],
		},
	},
];
