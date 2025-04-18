import { ReactElement } from 'react';
import { User } from 'firebase/auth';

export type AuthContextType = {
	user: User | null;
	login: () => void;
	logout: () => void;
};

export type LayoutProps = {
	children: ReactElement;
};
