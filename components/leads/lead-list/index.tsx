'use client';

import {ChangeEvent, FC, Fragment, useState} from 'react';
import {UseStateResult} from '@/hooks/use-state-result';
import {
	ColumnFilter,
	ColumnFiltersState,
	getCoreRowModel, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	SortingState, Table,
} from '@tanstack/table-core';
import {useQuery} from '@tanstack/react-query';
import {apiFetch} from '@/utils/api-fetch';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import {
	FilterContainer,
	PaginationButton,
	PaginationContainer, SearchContainer, SearchIcon, SearchInput, SearchSelect,
	StyledTable,
	TableCell,
	TableContainer, TableFoot,
	TableHeader,
	TableHeaderCell,
	TableRow,
} from '@/components/leads/lead-list/styles';
import {Lead} from '@/types/lead';
import {LeadStatus, leadStatuses, leadStatusToName} from '@/types/lead-status';
import {flexRender, useReactTable} from '@tanstack/react-table';
import {leadColumns} from '@/components/leads/lead-list/constants/lead-columns';
import {LoadingSpinner} from '@/components/leads/lead-list/loading-spinner';
import {ErrorStateAlert} from '@/components/leads/lead-list/error-state-alert';

export const LeadList: FC = () => {
	const [sorting, setSorting]: UseStateResult<SortingState> = useState<SortingState>([]);
	const [columnFilters, setColumnFilters]: UseStateResult<ColumnFiltersState> = useState<ColumnFiltersState>([]);
	const [globalFilter, setGlobalFilter]: UseStateResult<string> = useState('');

	const {data, isPending, isError, refetch} = useQuery({
		queryKey: ['leads'],
		queryFn: () => apiFetch('/api/leads'),
		staleTime: 0,
	});

	const table: Table<Lead> = useReactTable({
		data,
		columns: leadColumns,
		state: {
			sorting,
			columnFilters,
			globalFilter,
		},
		enableRowSelection: true,
		enableSortingRemoval: false,
		onSortingChange: setSorting,
		onGlobalFilterChange: setGlobalFilter,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		initialState: {
			pagination: {
				pageSize: 8,
			},
			sorting: [
				{
					id: 'createdAt',
					desc: true,
				}
			],
		},
	});

	if (isPending) {
		return (
			<LoadingSpinner />
		);
	}

	if (isError) {
		return (
			<ErrorStateAlert onRetry={() => refetch()} />
		);
	}

	return (
		<div>
			<FilterContainer>
				<SearchContainer>
					<SearchIcon />
					<SearchInput
						placeholder="Search"
						value={globalFilter ?? ''}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)}
					/>
				</SearchContainer>
				<SearchSelect
					defaultValue={(columnFilters.find((f: ColumnFilter) => f.id === 'status')?.value as string) || ''}
					onChange={(e: ChangeEvent<HTMLSelectElement>) => {
						const value: string = e.target.value;
						if (value) {
							table.getColumn('status')?.setFilterValue(value);
						} else {
							table.getColumn('status')?.setFilterValue(undefined);
						}
					}}
				>
					<option value="">
						Status
					</option>
					{leadStatuses.map((status: LeadStatus) => (
						<option key={status} value={status}>
							{leadStatusToName[status]}
						</option>
					))}
				</SearchSelect>
			</FilterContainer>
			<TableContainer>
				<StyledTable>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHeaderCell key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(
												header.column.columnDef.header,
												header.getContext()
											)}
									</TableHeaderCell>
								))}
							</tr>
						))}
					</TableHeader>
					<tbody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow key={row.id}>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell>
								No results.
							</TableCell>
						</TableRow>
					)}
					</tbody>
					<TableFoot>
						<tr>
							<td colSpan={leadColumns.length}>
								<PaginationContainer>
									<PaginationButton onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
										<ChevronLeft size={20} />
									</PaginationButton>

									{Array.from({length: table.getPageCount()}, (_, i: number) => i + 1)
										.filter((page: number) => {
											const currentPage: number = table.getState().pagination.pageIndex + 1;
											return page === 1 || page === table.getPageCount() || Math.abs(page - currentPage) <= 1;
										})
										.map((page: number, i: number, array: number[]) => {
												const currentPage: number = table.getState().pagination.pageIndex + 1;

												if (i > 0 && array[i - 1] !== page - 1) {
													return (
														<Fragment key={`ellipsis-${page}`}>
															<span>...</span>
															<PaginationButton
																key={page}
																onClick={() => table.setPageIndex(page - 1)}
																aria-current={currentPage === page ? 'page' : undefined}
															>
																{page}
															</PaginationButton>
														</Fragment>
													)
												}
												return (
													<PaginationButton
														key={page}
														onClick={() => table.setPageIndex(page - 1)}
														aria-current={currentPage === page ? 'page' : undefined}
													>
														{page}
													</PaginationButton>
												)
											}
										)}
									<PaginationButton onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
										<ChevronRight size={20} />
									</PaginationButton>
								</PaginationContainer>
							</td>
						</tr>
					</TableFoot>
				</StyledTable>
			</TableContainer>
		</div>
	);
}
