import {FC} from 'react';
import {Spinner} from '@/components/leads/lead-list/styles';
import {Loader} from 'lucide-react';

export const LoadingSpinner: FC = () => {
	return (
		<Spinner>
			<Loader size={40} />
		</Spinner>
	);
}
