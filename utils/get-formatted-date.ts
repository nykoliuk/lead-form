import {format} from 'date-fns';

export function getFormattedDate(dateString: string): string {
	try {
		return format(new Date(dateString), 'MM/dd/yyyy, h:mm a')
	} catch (error) {
		return dateString
	}
}
