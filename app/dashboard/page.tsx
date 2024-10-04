/* eslint-disable react/no-unescaped-entities */
'use client';
import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
import Image from 'next/image';
import bg from '../../public/images/img-bg.png';
import vector from '../../public/images/Vector.png';
import send from '../../public/images/send.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeCircleCheck, faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeToggle';

export default function DashboardHome() {
	const { homeRef } = useTheme();
	// const section1Ref = useRef(null);

	const isInView1 = useInView(homeRef, { once: true });
	return (
		<motion.section
			id="home"
			ref={homeRef}
			className="md:mt-20 h-screen md:h-auto pb-12 md:pb-0 ps-8 md:ps-0 md:pt-0 hero pt-48  gap-5 lg:flex lg:flex-row  lg:mt-8 relative md:z-40 px-3 mb-0"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 100 }}
			transition={{ duration: 1, ease: 'easeOut' }}
		>
			<div className="flex items-center justify-center pt-10 w-full xl:ml-16">
				<div className="lg:flex-1 relative   w-max lg:w-full h-min z-40">
					<Image
						className="absolute top-0 opacity-40 -z-10"
						width={100}
						src={vector}
						alt="vector"
					/>
					<h1 className="nunito text-6xl lg:text-7xl">
						<span className="nunito text-4xl lg:text-5xl mb-6 md:mb-4 block"> Hi, I'm</span>{' '}
						<b className="nunito font-extrabold">WISDOM PETERS...</b>
					</h1>
					<p className="w-full w-max-[200px] lg:w-max-full text-lg mt-4">
						A <b className="roboto-condensed-400">fullstack Web developer</b> based in{' '}
						<b className="roboto-condensed-400">Nigeria</b>
					</p>

					<Link href="#contact" className="block ">
						<div className="contact-link mt-10 mb-10 md:mt-8 md:mb-8 bg-black text-white w-max p-2 px-5 text-sm">
							Let's talk business{' '}
							<span className="ms-4">
								<Image className="inline" src={send} alt="send" width={18} />
							</span>
						</div>
					</Link>
					<div className="contact-details flex flex-col gap-4 lg:flex lg:flex-row lg:gap-8 text-base">
						<p className="flex gap-2 align-middle ">
							<span>
								<FontAwesomeIcon icon={faPhone} width={17} />
							</span>
							+234 90 635 835 89
						</p>
						<p className="flex gap-2 align-middle ">
							<span>
								<FontAwesomeIcon icon={faEnvelopeCircleCheck} width={20} />
							</span>
							dev_drmuzik@outlook.com
						</p>
					</div>
				</div>
			</div>
			<div className="hidden image md:flex w-full items-center justify-center">
				<Image className="w-[500px] h-[500px]" src={bg} alt="background" />
			</div>
		</motion.section>
	);
}
