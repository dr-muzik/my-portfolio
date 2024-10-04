// import { StaticImageData } from 'next/image';
// import javascript from './../public/images/js.png';
// import ts from './../public/images/ts.png';
// // import next from './../public/images/nextjs.png';
// import node from './../public/images/nodejs.png';
// import scss from './../public/images/sass.png';
// import git from './../public/images/icon-git.png';
// import socket from './../public/images/socket.png';
// import express from './../public/images/express.png';
// import mongo from './../public/images/mongodb.png';
// import tailwind from './../public/images/tailwind.png';
// import react from './../public/images/react.png';
// import nest from './../public/images/nest.png';

export interface Icons {
	icons: string;
	name: string;
}

export interface Iproject {
	src: string;
	siteName: string;
	about: string;
	server: string;
	client: string;
	site: string;
	projectName: string;
}

export const projects: Iproject[] = [
	{
		src: '/images/sef.png',
		siteName: 'Sefmar',
		about:
			'is an online Market that gives business owners the opportunity to create and have an online shop for their businesses, which can be accessible by anyone within and outside their region.',
		server: 'Nodejs, Expressjs and MYSQL, Nodemailer (for email services)',
		client: 'React Vitejs, typescript, scss, bootstrap',
		site: 'https://www.sefmar.com',
		projectName: 'Sefmar Limted',
	},
	{
		src: '/images/sogizHero.png',
		siteName: 'Sogizberlin',
		about:
			'is an online Market that gives business owners the opportunity to create and have an online shop for their businesses, which can be accessible by anyone within and outside their region.',
		server: 'Nodemailer (for email services)',
		client: 'React Vitejs, typescript, scss',
		site: 'https://www.sefmar.com',
		projectName: 'Sogizberlin church',
	},
];

export interface IState {
	isSidebarOpen: boolean;
	active: string;
	toggleSidebar: (arg: string) => void;
	activeLink: (arg: string) => void;
	// children?: ReactNode;
}
