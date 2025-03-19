export enum LeadStatus {
	Pending = 'pending',
	ReachedOut = 'reached-out',
}

export const leadStatusToName: Record<LeadStatus, string> = {
	[LeadStatus.Pending]: 'Pending',
	[LeadStatus.ReachedOut]: 'Reached Out',
}

export const leadStatuses: LeadStatus[] = Object.values(LeadStatus);
