import {FC} from 'react';
import {ArrowContainer, SortableHeader} from '@/components/leads/lead-list/styles';
import {ArrowDown, ArrowUp} from 'lucide-react';

export interface SortableColumnHeaderProps {
	title: string;
	column: any;
}
export const SortableColumnHeader: FC<SortableColumnHeaderProps> = ({title, column}: SortableColumnHeaderProps) => {
	const isSorted = column.getIsSorted();

	return (
		<SortableHeader
			onClick={() => {
				if (isSorted === false || isSorted === undefined) {
					column.toggleSorting(false);
				} else if (isSorted === 'asc') {
					column.toggleSorting(true);
				} else {
					column.toggleSorting(false);
				}
			}}
		>
			{title}
			<ArrowContainer>
				{isSorted === 'asc' ? (
					<ArrowUp size={16} />
				) : isSorted === 'desc' ? (
					<ArrowDown size={16} />
				) : (
					<ArrowUp size={16} style={{opacity: 0.3}} />
				)}
			</ArrowContainer>
		</SortableHeader>
	);
}
