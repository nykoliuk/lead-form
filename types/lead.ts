import {Visa} from '@/types/visa';
import {LeadStatus} from '@/types/lead-status';

export interface Lead {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	linkedIn: string;
	visas: Visa[];
	resume: string;
	comment: string;
	status: LeadStatus;
	createdAt: string;
	updatedAt: string;
	country?: string;
}
