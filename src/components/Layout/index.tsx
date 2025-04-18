import { LayoutProps } from '@/types/types.ts';

import styles from './styles.module.css';

const Layout = ({ children }: LayoutProps) => {
	return <div className={styles.pageStyle}>{children}</div>;
};

export default Layout;
