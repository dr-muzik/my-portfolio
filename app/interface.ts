import { StaticImageData } from 'next/image';
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

export const stack: Icons[] = [
	{
		icons: `${javascript}`,
		name: 'Javascript',
	},
	{
		icons: `${ts}`,
		name: 'Typescript',
	},
	{
		icons: `${next}`,
		name: 'Nextjs',
	},
	{
		icons: `${node}`,
		name: 'Node',
	},
	{
		icons: `${scss}`,
		name: 'SASS',
	},
	{
		icons: `${git}`,
		name: 'Git',
	},
	{
		icons: `${nest}`,
		name: 'Nestjs',
	},
	{
		icons: `${socket}`,
		name: 'Socket.io',
	},
	{
		icons: `${react}`,
		name: 'Reactjs',
	},
	{
		icons: `${express}`,
		name: 'Expressjs',
	},
	{
		icons: `${mongo}`,
		name: 'MongoDb',
	},
	{
		icons: `${tailwind}`,
		name: 'Tailwind',
	},
];
