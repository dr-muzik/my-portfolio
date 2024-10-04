/* eslint-disable react/no-unescaped-entities */
'use client';
import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
import { Box, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from '@/context/ThemeToggle';

export default function Contact() {
	const { contactRef } = useTheme();
	// const section1Ref = useRef(null);

	const isInView1 = useInView(contactRef, { once: true });
	return (
		<motion.section
			id="contact"
			ref={contactRef}
			className="px-3 sm:px-7 lg:py-20 mb-36 md:mb-0 pt-[90px] md:pt-0"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 100 }}
			transition={{ duration: 1, ease: 'easeOut' }}
		>
			<h1 className="border-l-8 border-red-800 ps-2 text-4xl md:text-5xl font-bold mb-11 lg:mb-20 opacity-30 text-[#fe805b] dark:text-white dark:opacity-30">
				CONTACT
			</h1>
			<div className="lg:flex md:gap-7 relative z-40 ">
				<div className="p-1 w-full max-w-[310px] mb-10  md:mb-7 z-20 leading-[70px] border-2 border-transparent bg-custom-gradient bg-clip-padding dark:bg-none rounded-lg relative h-max">
					<div className="bg-white dark:bg-transparent z-30 dark:text-white rounded-lg p-7  flex flex-col gap-3 text-gray-900 mb-3">
						<div className="absolute -top-[20px]">
							<h2 className="text-2xl font-medium z-50  bg-white dark:bg-transparent w-max px-5">
								Reach Out
							</h2>
						</div>
						<p className="flex gap-3 items-center text-base ">
							<EmailIcon sx={{ fontSize: 25, color: '#c36bd0' }} /> dev_drmuzik@outlook.com
						</p>
						<p className="flex gap-3 items-center text-base">
							<CallIcon sx={{ fontSize: 25, color: '#c36bd0' }} /> +234 90 653 835 89
						</p>
						{/* <p>
						<CallIcon sx={{ fontSize: 25 }} /> +234 81 243 854 83
					</p> */}
						<p className="flex gap-3 items-center text-base">
							<XIcon sx={{ fontSize: 25, color: '#c36bd0' }} />{' '}
							<a href="" style={{ color: 'blue' }}>
								Twitter
							</a>
						</p>
						<p className="flex gap-3 items-center text-base">
							{' '}
							<LinkedInIcon sx={{ fontSize: 35, color: '#c36bd0' }} />
							<a style={{ color: 'blue' }} href="">
								LinkedIn
							</a>
						</p>
					</div>
				</div>
				<Box
					component="form"
					// sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
					noValidate
					autoComplete="off"
					className="grid gap-3 w-full lg:max-w-[650px] lg:relative lg:-top-14 "
				>
					<h1 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4">
						Any Project?
					</h1>
					<div className="grid gap-3">
						<TextField
							className="md:col-span-1 col-span-2 dark:text-white "
							id="outlined-basic"
							label="Name"
							variant="outlined"
						/>
						<TextField
							className="md:col-span-1 col-span-2"
							id="outlined-basic"
							label="Email"
							variant="outlined"
						/>
						<TextField
							id="outlined-multiline-static"
							label="Message"
							name="message"
							multiline
							rows={4}
							className="col-span-2"
						/>
						<div className="col-span-2">
							<Button variant="contained" className="bg-custom-gradient" endIcon={<SendIcon />}>
								Let's Connect
							</Button>
						</div>
					</div>
				</Box>
			</div>
		</motion.section>
	);
}
