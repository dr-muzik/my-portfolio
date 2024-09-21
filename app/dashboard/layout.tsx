// app/dashboard/layout.tsx
'use client';
import Link from 'next/link';
import React from 'react';
import { ReactNode, useState } from 'react';
import Image from 'next/image';
import line from '../../public/images/Line.png';

export default function DashboardLayout({ children }: { children: ReactNode }) {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const [active, setIsActive] = useState<string>('');

	const toggleSidebar = (arg: string) => {
		console.log(arg);
		arg === 'open' ? setSidebarOpen(true) : setSidebarOpen(false);
	};

	const activeLink = (arg: string) => {
		setIsActive(arg);
		console.log(arg);
	};
	return (
		<>
			<div style={{ minHeight: '100vh' }} className="flex">
				{/* Sidebar */}
				<aside
					// style={{ width: '250px' }}
					className={`flex flex-col gap-16 pt-16 h-screen fixed top-0 left-0  w-64 bg-black opacity-90 z-[9999] text-white p-4 max-w-[140px] lg:max-w-[130px]  xl:max-w-[200px] 
						transform transition-transform duration-300 ease-in-out ${
							isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
						} sm:translate-x-0 sm:sticky`}
				>
					<div className="px-10">
						<div className="merriweather-black rounded-full mb-4 bg-white w-max p-2 flex h-max">
							<p className="text-3xl text-black">tG</p>
						</div>
					</div>
					<nav className="px-10">
						<ul className="flex flex-col gap-8 text-xs items-center">
							<li>
								<Link
									href="/dashboard"
									className="relative"
									onClick={() => activeLink('home')}
								>
									<span
										className={`${
											active === 'home'
												? 'absolute left-0 top-[6px] z-10'
												: 'hidden'
										}`}
									>
										<Image
											src={line}
											alt="line"
											// className="w-[180px]"
											width={120}
											height={0}
										/>
									</span>
									<span
										className={`${
											active === 'home' ? 'font-bold text-base' : ''
										}`}
									>
										HOME
									</span>
								</Link>
							</li>
							<li>
								<Link
									href="/dashboard/about"
									className="relative"
									onClick={() => activeLink('about')}
								>
									<span
										className={`${
											active === 'about'
												? 'absolute left-0 top-[6px] z-10'
												: 'hidden'
										}`}
									>
										<Image
											src={line}
											alt="line"
											// className="w-[180px]"
											width={120}
											height={0}
										/>
									</span>{' '}
									<span
										className={`${
											active === 'about' ? 'font-bold text-base' : ''
										}`}
									>
										ABOUT
									</span>
								</Link>
							</li>
							<li>
								<Link
									href="/dashboard/stack"
									className="relative"
									onClick={() => activeLink('stack')}
								>
									<span
										className={`${
											active === 'stack'
												? 'absolute left-0 top-[6px] z-10'
												: 'hidden'
										}`}
									>
										<Image
											src={line}
											alt="line"
											// className="w-[180px]"
											width={120}
											height={0}
										/>
									</span>{' '}
									<span
										className={`${
											active === 'stack' ? 'font-bold text-base' : ''
										}`}
									>
										STACK
									</span>
								</Link>
							</li>
							<li>
								<Link
									href="/dashboard/projects"
									className="relative"
									onClick={() => activeLink('projects')}
								>
									<span
										className={`${
											active === 'projects'
												? 'absolute left-0 top-[5px] z-10'
												: 'hidden'
										}`}
									>
										<Image
											src={line}
											alt="line"
											// className="w-[180px]"
											width={120}
											height={0}
										/>
									</span>{' '}
									<span
										className={`${
											active === 'projects' ? 'font-bold text-base' : ''
										}`}
									>
										PROJECTS
									</span>
								</Link>
							</li>
							<li>
								<Link
									href="/dashboard/contact"
									className="relative"
									onClick={() => activeLink('contact')}
								>
									<span
										className={`${
											active === 'contact'
												? 'absolute left-0 top-[5px] z-10'
												: 'hidden'
										}`}
									>
										<Image src={line} alt="line" width={120} height={0} />
									</span>{' '}
									<span
										className={`${
											active === 'contact' ? 'font-bold text-base' : ''
										}`}
									>
										CONTACT
									</span>
								</Link>
							</li>

							{/* Add more links as needed */}
						</ul>
					</nav>

					<footer className="text-[10px]  mt-8 px-2 text-center md[w-]:none">
						Copyright @ 2024 <br />
						techGenius <br /> All right reserved
					</footer>
				</aside>

				{/* Main Content */}
				<main
					className="relative overflow-auto align-middle py-20 lg:py-0 flex-1 lg:p-8 p-5 bg-white"
					style={{
						backgroundColor: '#fff',
						color: 'black',
					}}
					// onClick={() => toggleSidebar('close')}
				>
					{/* Hamburger Icon (Visible on Mobile) */}
					{isSidebarOpen === true ? (
						<button
							className="fixed top-4 right-4 sm:hidden"
							onClick={() => toggleSidebar('close')}
						>
							✕
						</button>
					) : (
						<button
							className="fixed top-4 right-4 text-2xl sm:hidden"
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
						className="fixed opacity-30 bottom-[120px] z-10 -right-[100px]"
					/>
					{children}
				</main>
			</div>
			{/* <div className=" sm:hidden text-black bg-white">home</div> */}
		</>
	);
}
