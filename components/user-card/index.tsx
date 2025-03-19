import {FC, useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import {useRouter} from 'next/navigation';
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {User} from '@/types/user';
import {UseStateResult} from '@/hooks/use-state-result';
import {Avatar, UserInfo, UserName} from '@/components/user-card/styles';

function getInitial(name: string): string {
	return name.charAt(0).toUpperCase() || 'A';
}

export const UserCard: FC = () => {
	const router: AppRouterInstance = useRouter();
	const [user, setUser]: UseStateResult<User | null> = useState<User | null>(null);

	useEffect(() => {
		const token: string | null = Cookies.get('auth_token') || localStorage.getItem('auth_token');
		if (!token) {
			router.push('/login');
		} else {
			const storedUser: string | null = localStorage.getItem('user');
			setUser(storedUser ? JSON.parse(storedUser) : null);
		}
	}, []);

	if (!user) {
		return null;
	}

	return (
		<UserInfo>
			<Avatar>{getInitial(user.name)}</Avatar>
			<UserName>{user.name}</UserName>
		</UserInfo>
	);
}
