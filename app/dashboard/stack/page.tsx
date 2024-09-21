// import { stack } from '@/app/interface';
import Image from 'next/image';
import javascript from './../public/images/js.png';
import ts from './../public/images/ts.png';
import next from './../public/images/nextjs.png';
import node from './../public/images/nodejs.png';
import scss from './../public/images/sass.png';
import git from './../public/images/icon-git.png';
import socket from './../public/images/socket.png';
import express from './../public/images/express.png';
import mongo from './../public/images/mongodb.png';
import tailwind from './../public/images/tailwind.png';
import react from './../public/images/react.png';
import nest from './../public/images/nest.png';

export interface Icons {
	icons: string;
	name: string;
}

const stack: Icons[] = [
	{
		icons: '/images/js.png',
		name: 'Javascript',
	},
	{
		icons: '/images/ts.png',
		name: 'Typescript',
	},
	{
		icons: '/images/nextjs.svg',
		name: 'Nextjs',
	},
	{
		icons: '/images/nodejs.png',
		name: 'Node',
	},
	{
		icons: '/images/sass.png',
		name: 'SASS',
	},
	{
		icons: '/images/icon-git.png',
		name: 'Git',
	},
	{
		icons: '/images/nest.png',
		name: 'Nestjs',
	},
	{
		icons: '/images/socket.png',
		name: 'Socket.io',
	},
	{
		icons: '/images/react.png',
		name: 'Reactjs',
	},
	{
		icons: '/images/express.png',
		name: 'Expressjs',
	},
	{
		icons: '/images/mongodb.png',
		name: 'MongoDb',
	},
	{
		icons: '/images/tailwind.png',
		name: 'Tailwind',
	},
];

export default function Skills() {
	return (
		<section className="px-2 lg:py-20 z-30 relative">
			<h1 className="text-5xl font-bold mb-9 opacity-80 text-transparent bg-clip-text bg-custom-gradient">
				Skills
			</h1>

			<div className=" flex flex-wrap gap-2 sm:gap-6 justify-center ">
				{stack.map((tech, i) => (
					<div
						key={i}
						className=" bg-white shadow-lg p-4 flex w-[120px] sm:w-[150px] justify-center items-center flex-col gap-3 text-gray-600"
					>
						<Image
							className="h-[70px] w-[70px]"
							src={tech.icons}
							alt={tech.name}
							width={50}
							height={50}
						/>
						<p>{tech.name}</p>
					</div>
				))}
			</div>
		</section>
	);
}
