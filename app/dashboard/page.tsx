import {LeadList} from '@/components/leads/lead-list';
import {PageHeader} from '@/styles/page-header';

export default function DashboardPage() {
	return (
		<main>
			<PageHeader>
				<h1>Leads</h1>
			</PageHeader>
			<LeadList/>
		</main>
	);
}
