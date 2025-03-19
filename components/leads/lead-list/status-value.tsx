import {ChangeEvent, FC} from 'react';
import {LeadStatus, leadStatuses, leadStatusToName} from '@/types/lead-status';
import {StatusSelect} from '@/components/leads/lead-list/styles';
import {updateStatus} from '@/app/actions/leads/update-lead';
import {QueryClient, useQueryClient} from '@tanstack/react-query';

export interface StatusValueProps {
	id: string;
	value: LeadStatus;
}
export const StatusValue: FC<StatusValueProps> = ({id, value}: StatusValueProps) => {
	const queryClient: QueryClient = useQueryClient();

	async function handleStatusChange(id: string, status: LeadStatus) {
		await updateStatus(id, status);
		await queryClient.invalidateQueries({queryKey: ['leads']});
	}

	return (
		<StatusSelect
			value={value}
			onChange={(e: ChangeEvent<HTMLSelectElement>) => handleStatusChange(id, e.target.value as LeadStatus)}
		>
			{leadStatuses.map((status: LeadStatus) => (
				<option key={status} value={status}>
					{leadStatusToName[status]}
				</option>
			))}
		</StatusSelect>
	);
}
