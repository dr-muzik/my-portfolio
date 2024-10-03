// import { stack } from '@/app/interface';
import Image from 'next/image';

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
		<section id="skills" className="px-2 lg:py-20 z-30 relative mb-20 md:mb-0 pt-[90px] md:pt-0">
			<h1 className="border-l-8 border-red-800 ps-2 text-4xl md:text-5xl font-bold mb-9 opacity-30 text-[#fe805b]">
				SKILLS
			</h1>

			<div className=" flex flex-wrap gap-4  sm:gap-6 justify-center ">
				{stack.map((tech, i) => (
					<div
						key={i}
						className="text-xs bg-white rounded-lg shadow-2xl p-4 flex w-[80px] md:w-[120px] sm:w-[150px] justify-center items-center flex-col gap-3 md:gap-3 text-gray-600"
					>
						<Image
							className="w-[40px] h-[40px] md:h-[70px] md:w-[70px]"
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
