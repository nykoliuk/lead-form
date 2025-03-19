'use server';

import {supabase} from '@/lib/db/supabase-client';
import {LeadStatus} from '@/types/lead-status';

export async function updateStatus(leadId: string, status: LeadStatus) {
	const {error } = await supabase
		.from('leads')
		.update({
			status,
		})
		.eq('id', leadId);

	if (error) {
		console.error('Error creating project:', error);
		return null;
	}

	return true;
}
