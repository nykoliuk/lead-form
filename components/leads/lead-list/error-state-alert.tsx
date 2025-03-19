import {FC} from 'react';
import {Alert, AlertIcon, AlertText} from '@/styles/alert';
import {AlertCircle} from 'lucide-react';
import {Button} from '@/styles/button';

export interface ErrorStateAlert {
	onRetry?: () => void
}
export const ErrorStateAlert: FC<ErrorStateAlert> = ({onRetry}: ErrorStateAlert) => {
	return (
		<Alert role="alert">
			<AlertIcon>
				<AlertCircle size={20} />
			</AlertIcon>
			<AlertText>
				<span>Error: Failed to load. </span>
				<Button onClick={onRetry}>
					Try again
				</Button>
			</AlertText>
		</Alert>
	);
}
