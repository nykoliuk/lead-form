import {ColumnDef} from '@tanstack/table-core';
import {Lead} from '@/types/lead';
import {getFormattedDate} from '@/utils/get-formatted-date';
import {LeadStatus} from '@/types/lead-status';
import {StatusValue} from '@/components/leads/lead-list/status-value';
import {SortableColumnHeader} from '@/components/leads/lead-list/sortable-column-header';

export const leadColumns: ColumnDef<Lead>[] = [
	{
		id: 'name',
		accessorFn: (row: Lead) => `${row.firstName} ${row.lastName}`,
		header: ({ column }) => <SortableColumnHeader column={column} title="Name" />,
		cell: ({ getValue }) => getValue(),
		enableSorting: true,
	},
	{
		accessorKey: 'createdAt',
		header: ({ column }) => <SortableColumnHeader column={column} title="Submitted" />,
		cell: ({ getValue }) => getFormattedDate(getValue() as string),
		enableSorting: true,
	},
	{
		accessorKey: 'status',
		header: ({ column }) => <SortableColumnHeader column={column} title="Status" />,
		cell: ({ getValue, row }) => (
			<StatusValue
				id={row.original.id}
				value={getValue() as LeadStatus}
			/>
		),
		filterFn: 'equals',
		enableSorting: true,
	},
	{
		accessorKey: 'country',
		header: ({ column }) => <SortableColumnHeader column={column} title="Country" />,
		cell: ({ getValue }) => getValue(),
		enableSorting: true,
	},
];
