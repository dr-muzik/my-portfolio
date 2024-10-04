import Link from 'next/link';
import About from '../dashboard/about/page';
import Contact from '../dashboard/contact/page';
import DashboardHome from '../dashboard/page';
import Projects from '../dashboard/projects/page';
import Skills from '../dashboard/stack/page';
import Image from 'next/image';
import { useTheme } from '../../context/ThemeToggle';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface IState {
	isSidebarOpen: boolean;
	active: string;
	toggleSidebar: (arg: string) => void;
	activeLink: (arg: string) => void;
}

const MobileScreen = ({ isSidebarOpen, active, toggleSidebar, activeLink }: IState) => {
	const { themeMode, toggleTheme } = useTheme();

	return (
		<div className=" md:hidden bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-60000 ease-in-out">
			<Image
				src="/images/img-bg.png"
				alt="background"
				width={500}
				height={400}
				className="fixed opacity-10 bottom-[80px] md:bottom-[120px] z-10 -right-[100px]"
			/>
			<div
				className={`${
					isSidebarOpen === true ? 'bg-transparent' : 'bg-white dark:bg-transparent'
				}  shadow-lg p-3 fixed top-4 left-[5%] z-[100] w-[90%] rounded-xl flex justify-between items-center`}
			>
				<Image
					src="/images/LOGO.png"
					alt="background"
					width={50}
					height={300}
					className="rounded-3xl"
				/>
				{/* <ThemeToggle /> */}

				{themeMode === 'light' ? (
					<div onClick={toggleTheme}>
						<LightModeIcon sx={{ fontSize: 25, color: '#000', cursor: 'pointer' }} />
					</div>
				) : (
					<div onClick={toggleTheme}>
						<DarkModeIcon sx={{ fontSize: 25, color: '#c36bd0', cursor: 'pointer' }} />
					</div>
				)}

				{/* <button
					onClick={toggleTheme}
					className="p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
				>
					Toggle {themeMode === 'light' ? 'Dark' : 'Light'} Mode
				</button> */}

				{isSidebarOpen === true ? (
					<button className="  text-white" onClick={() => toggleSidebar('close')}>
						X
					</button>
				) : (
					<button className="text-2xl " onClick={() => toggleSidebar('open')}>
						☰
					</button>
				)}
			</div>
			<nav
				className={`transform transition-transform text-white bg-black w-full z-50 fixed top-0 left-0 h-screen opacity-90 duration-700 ease-in-out flex-col gap-10 ${
					isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
				} `}
			>
				<ul className="flex flex-col gap-14 w-full items-center p-20 pt-32">
					<li className="w-full">
						<Link
							href="#"
							className={`relative w-full block text-center p-1 hover:bg-gray-800 hover:bg-opacity-50 ${
								active === 'home' ? 'bg-custom-gradient' : ''
							}`}
							onClick={() => activeLink('home')}
						>
							<span className={`${active === 'home' ? 'font-bold text-base ' : ''}`}>HOME</span>
						</Link>
					</li>
					<li className="w-full">
						<Link
							href="#about"
							className={`relative w-full block text-center p-1 hover:bg-gray-800 hover:bg-opacity-50 ${
								active === 'about' ? 'bg-custom-gradient' : ''
							}`}
							onClick={() => activeLink('about')}
						>
							<span className={`${active === 'about' ? 'font-bold text-base' : ''}`}>ABOUT</span>
						</Link>
					</li>
					<li className="w-full">
						<Link
							href="#skills"
							className={`relative w-full block text-center p-1 hover:bg-gray-800 hover:bg-opacity-50 ${
								active === 'stack' ? 'bg-custom-gradient' : ''
							}`}
							onClick={() => activeLink('stack')}
						>
							<span className={`${active === 'stack' ? 'font-bold text-base' : ''}`}>STACK</span>
						</Link>
					</li>
					<li className="w-full">
						<Link
							href="#projects"
							className={`relative w-full block text-center p-1 hover:bg-gray-800 hover:bg-opacity-50 ${
								active === 'projects' ? 'bg-custom-gradient' : ''
							}`}
							onClick={() => activeLink('projects')}
						>
							<span className={`${active === 'projects' ? 'font-bold text-base' : ''}`}>
								PROJECTS
							</span>
						</Link>
					</li>
					<li className="w-full">
						<Link
							href="#contact"
							className={`relative w-full block text-center p-1 hover:bg-gray-800 hover:bg-opacity-50 ${
								active === 'contact' ? 'bg-custom-gradient' : ''
							}`}
							onClick={() => activeLink('contact')}
						>
							<span className={`${active === 'contact' ? 'font-bold text-base' : ''}`}>
								CONTACT
							</span>
						</Link>
					</li>
				</ul>
			</nav>
			<DashboardHome />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<footer className="text-base bg-black text-white  mt-8 p-5 py-8 text-center md[w-]:none">
				Copyright @ 2024 <br />
				techGenius <br /> All rights reserved
			</footer>
		</div>
	);
};

export default MobileScreen;
