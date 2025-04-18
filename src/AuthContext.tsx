import { createContext, ReactNode, useEffect, useState } from 'react';
import { User } from 'firebase/auth';

import { AuthContextType } from './types/types.ts';
import auth, { loginWithGoogle, logout } from './firebase';

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((currentUser) => {
			setUser(currentUser);
		});

		return () => unsubscribe();
	}, []);

	const login = async () => {
		await loginWithGoogle();
	};

	const handleLogout = async () => {
		await logout();
	};

	return (
		<AuthContext.Provider value={{ user, login, logout: handleLogout }}>
			{children}
		</AuthContext.Provider>
	);
};
