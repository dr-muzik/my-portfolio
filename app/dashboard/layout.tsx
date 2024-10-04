// app/dashboard/layout.tsx
'use client';
// import Image from 'next/image';
// import Link from 'next/link';
import { ReactNode, useState } from 'react';
// import DashboardHome from './page';
// import About from './about/page';
// import Skills from './stack/page';
// import Projects from './projects/page';
// import Contact from './contact/page';
// import ThemeToggle from '../component/ThemeToggle';
import MobileScreen from '../mobile/MobileScreen';
import DesktopScreen from '../desktop/DesktopScreen';
// import { ThemeProvider } from '@/context/ThemeToggle';
// import { ThemeProvider } from '@emotion/react';

// import { useTheme } from '../../context/ThemeToggle';

// interface IToggle {
// 	toggle: () => void;
// 	theme: 'light' | 'dark';
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function DashboardLayout({ children }: { children: ReactNode }) {
	// export default function DashboardLayout() {
	// const DashboardLayout = ({ toggle, theme }: IToggle) => {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const [active, setIsActive] = useState<string>('');
	// const { themeMode, } = useTheme();

	// useEffect(() => {
	// 	console.log('themeMode: ', themeMode);
	// }, []);

	// const toggle = () => {
	// 	console.log('testing');
	// 	console.log(theme);
	// };

	const toggleSidebar = (arg: string) => {
		console.log(arg);
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		arg === 'open' ? setSidebarOpen(true) : setSidebarOpen(false);
	};

	const activeLink = (arg: string) => {
		setIsActive(arg);
		setSidebarOpen(false);
		console.log(arg);
	};
	return (
		<div className="transition-colors duration-5000 ease-in-out">
			{/* <button onClick={toggleTheme}>click</button> */}
			<DesktopScreen
				isSidebarOpen={isSidebarOpen}
				active={active}
				toggleSidebar={toggleSidebar}
				activeLink={activeLink}
			>
				{children}
			</DesktopScreen>

			<MobileScreen
				isSidebarOpen={isSidebarOpen}
				active={active}
				toggleSidebar={toggleSidebar}
				activeLink={activeLink}
			/>
		</div>
	);
}
