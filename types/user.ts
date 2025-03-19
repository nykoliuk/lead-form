export interface User {
	id: string;
	email: string;
	name: string;
	role: string;
	password?: string;
}

export const defaultUser: User = {
	id: '1',
	email: 'admin@example.com',
	name: 'Admin',
	role: 'admin',
};
