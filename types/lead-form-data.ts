import {Visa} from '@/types/visa';

export interface LeadFormData {
	firstName: string;
	lastName: string;
	email: string;
	linkedIn: string;
	resume: string;
	visas: Visa[];
	comment: string;
	country: string;
}

export const defaultLeadFormData: LeadFormData = {
	firstName: '',
	lastName: '',
	email: '',
	linkedIn: '',
	resume: '',
	visas: [],
	comment: '',
	country: '',
};
