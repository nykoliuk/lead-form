import {supabase} from '@/lib/db/supabase-client';
import {Lead} from '@/types/lead';
import {LeadStatus} from '@/types/lead-status';

export async function GET(): Promise<Response> {
	const {data, error } = await supabase
		.from('leads')
		.select('*')
		.order('createdAt', {ascending: false});

	if (error) {
		return new Response(JSON.stringify({error: error.message}), {status: 500});
	}

	const leads: Lead[] = data.map((lead: Lead) => ({
		id: lead.id,
		firstName: lead.firstName,
		lastName: lead.lastName,
		email: lead.email,
		linkedIn: lead.linkedIn,
		visas: lead.visas,
		resume: lead.resume,
		comment: lead.comment,
		status: lead.status || LeadStatus.Pending,
		createdAt: new Date(lead.createdAt).toLocaleDateString(),
		updatedAt: new Date(lead.updatedAt).toLocaleDateString(),
		country: lead.country || '',
	}));

	return new Response(JSON.stringify(leads), {status: 200});
}
