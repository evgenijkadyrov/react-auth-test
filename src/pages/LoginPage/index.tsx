import { useAuthentification } from '@hooks/useAuthentification.ts';
import Layout from '@/components/Layout';
import { TEXTS } from '@constants/texts.ts';

const LoginPage = () => {
	const { login } = useAuthentification();

	return (
		<Layout>
			<>
				<h1>{TEXTS.ENTER}</h1>
				<button onClick={login}>{TEXTS.GOOGLE_ENTER}</button>
			</>
		</Layout>
	);
};

export default LoginPage;
