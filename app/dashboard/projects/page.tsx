'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { useState } from 'react';
// import { Iproject } from '@/app/interface';
import { projects } from '@/app/Interface/interface';

export default function Projects() {
	const section1Ref = useRef(null);

	const isInView1 = useInView(section1Ref, { once: true });
	const [project, setProject] = useState('');

	const handleDetails = (pro: string) => {
		setProject(project === '' ? pro : project === pro ? '' : pro);
		console.log(pro);
		console.log(project);
	};

	return (
		<motion.section
			id="projects"
			className="px-7 lg:py-20 relative z-40 mb-20 md:mb-0 pt-[90px] md:pt-0"
			ref={section1Ref}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 100 }}
			transition={{ duration: 1, ease: 'easeOut' }}
		>
			<h1 className="border-l-8 border-red-800  dark:text-white dark:opacity-30 ps-2 text-4xl md:text-5xl font-bold mb-9 opacity-30 text-[#fe805b]">
				PROJECTS
			</h1>
			<p className="text-gray-700 dark:text-white">
				These are the list of projects that I have worked on and with a brief detail about each
			</p>
			<div className="flex flex-col items-center lg:flex-row lg:flex-wrap gap-8 mt-14 ">
				{projects.map((props, i) => (
					<div
						key={i}
						className="lg:flex lg:max-w-[850px] h-min mb-4 max-w-[350px]  group relative  rounded-lg overflow-hidden"
					>
						<div
							className=" flex flex-col max-w-[350px] items-center  border-2 border-gray-300"
							onClick={() => handleDetails(props.siteName)}
						>
							<Image
								src={props.src}
								className={`cursor-pointer ${
									props.siteName === 'Sogizberlin' ? ' sm:h-[216px]' : ''
								}`}
								width={350}
								height={300}
								alt={props.siteName}
							/>
							<p className="bg-custom-gradient text-gray-900 font-semibold p-3 text-center w-full">
								{props.projectName}
							</p>
						</div>
						<div
							className={`${
								project === props.siteName ? 'flex' : 'hidden'
							}  max-w-[350px] lg:max-w-[500px]  flex-col justify-center text-sm p-5 py-5 leading-6 shadow-lg text-gray-600`}
						>
							<h1 className="font-semibold">DESCRIPTION</h1>
							<p className=" mb-3">
								<a
									href={props.site}
									className="text-blue underline"
									style={{ color: 'blue', textDecoration: 'underline' }}
								>
									{props.siteName}
								</a>{' '}
								{props.about}
							</p>
							<h1 className="font-semibold">TECHNOLOGIES USED:</h1>
							<p className="">
								<span className="roboto-condensed-400">Server-side:</span> {props.server}
							</p>
							<p>
								<span className="roboto-condensed-400">Client-side:</span> {props.client}
							</p>
						</div>

						{/* modal */}
						<div
							onClick={() => handleDetails(props.siteName)}
							className={`${
								project === props.siteName ? 'hidden' : ''
							} absolute inset-0 bg-black bg-opacity-75 text-white flex cursor-pointer justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
						>
							<p className="text-center font-medium text-lg">View Project details</p>
						</div>
					</div>
				))}
				{/* <div className="mb-4 flex flex-col max-w-[350px] items-center  border-2 border-gray-500">
					<Image
						src="/images/sogizHero.png"
						alt="sogiz"
						width={350}
						height={400}
						className="cursor-pointer h-[216px] "
					/>
				</div> */}
			</div>
		</motion.section>
	);
}
