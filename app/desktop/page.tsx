import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import About from '../dashboard/about/page';
import Skills from '../dashboard/stack/page';
import Projects from '../dashboard/projects/page';
import DashboardHome from '../dashboard/page';
import Contact from '../dashboard/contact/page';

interface IState {
	isSidebarOpen: boolean;
	active: string;
	toggleSidebar: (arg: string) => void;
	activeLink: (arg: string) => void;
	children?: ReactNode;
}

const DesktopScreen = ({ isSidebarOpen, active, toggleSidebar, activeLink }: IState) => {
	return (
		<div
			style={{ minHeight: '100vh' }}
			className="hidden md:flex bg-white dark:bg-gray-900 text-black dark:text-white"
		>
			{/* Sidebar */}
			<aside
				// style={{ width: '250px' }}
				className={`flex flex-col gap-16 pt-16 h-screen fixed top-0 left-0  w-64 bg-black opacity-90 z-[9999] text-white py-4 max-w-[140px] lg:max-w-[130px]  xl:max-w-[200px] 
						transform transition-transform duration-300 ease-in-out ${
							isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
						} sm:translate-x-0 sm:sticky`}
			>
				<div className="px-10">
					<div className="merriweather-black rounded-full mb-4 bg-white w-max p-2 flex h-max">
						<p className="text-3xl text-black">tG</p>
					</div>
				</div>
				<nav className="">
					<ul className="flex flex-col gap-8 text-xs items-center w-full">
						<li className="w-full">
							<Link
								href="/dashboard"
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
								href="/dashboard/about"
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
								href="/dashboard/stack"
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
								href="/dashboard/projects"
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
								href="/dashboard/contact"
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

				<footer className="text-[10px]  mt-8 px-2 text-center md[w-]:none">
					Copyright @ 2024 <br />
					techGenius <br /> All right reserved
				</footer>
			</aside>

			{/* Main Content */}
			<section
				className="relative overflow-auto align-middle py-20 lg:py-0 flex-1 lg:p-8 pt-10 bg-white"
				style={{
					backgroundColor: '#fff',
					color: 'black',
				}}
				// onClick={() => toggleSidebar('close')}
			>
				{/* Hamburger Icon (Visible on Mobile) */}
				{isSidebarOpen === true ? (
					<button className="fixed top-11 right-4 sm:hidden" onClick={() => toggleSidebar('close')}>
						✕
					</button>
				) : (
					<button
						className="fixed top-11 right-4 text-2xl sm:hidden z-50"
						onClick={() => toggleSidebar('open')}
					>
						☰
					</button>
				)}
				<Image
					src="/images/img-bg.png"
					alt="background"
					width={500}
					height={400}
					className="fixed opacity-20 bottom-[80px] md:bottom-[120px] z-10 -right-[100px]"
				/>
				{active === 'home' && <DashboardHome />}
				{active === 'about' && <About />}
				{active === 'stack' && <Skills />}
				{active === 'projects' && <Projects />}
				{active === 'contact' && <Contact />}
			</section>
		</div>
	);
};

export default DesktopScreen;
