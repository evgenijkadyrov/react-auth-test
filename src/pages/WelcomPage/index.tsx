import Layout from '@/components/Layout';
import { TEXTS } from '@constants/texts.ts';
import { useAuthentification } from '@hooks/useAuthentification.ts';

const WelcomePage = () => {
	const { user, logout } = useAuthentification();

	return (
		<Layout>
			<>
				<h1>
					{TEXTS.WELCOME}, {user?.displayName || 'Гость'}!
				</h1>
				<button onClick={logout}>{TEXTS.LOGOUT_BUTTON}</button>
			</>
		</Layout>
	);
};

export default WelcomePage;
