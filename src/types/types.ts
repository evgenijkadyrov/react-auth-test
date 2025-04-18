import { User } from 'firebase/auth';
import { ReactElement } from 'react';

export type AuthContextType = {
	user: User | null;
	login: () => void;
	logout: () => void;
};

export type LayoutProps = {
	children: ReactElement;
};
