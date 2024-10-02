/* eslint-disable react/no-unescaped-entities */
import { Box, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
	return (
		<section className="px-3 sm:px-7 lg:py-20 bg-white ">
			<h1 className="text-5xl font-bold mb-11 lg:mb-20 opacity-30 text-[#fe805b]">CONTACT</h1>
			<div className="lg:flex md:gap-7 relative z-40">
				<div className="p-1 w-full max-w-[310px] mb-7 z-20 leading-[70px] border-2 border-transparent bg-custom-gradient bg-clip-padding rounded-lg relative h-max">
					<div className="bg-white z-30 rounded-lg p-7  flex flex-col gap-3 text-gray-900">
						<div className="absolute -top-[20px]">
							<h2 className="text-2xl font-medium z-50  bg-white w-max px-5">Reach Out</h2>
						</div>
						<p className="flex gap-3 items-center text-sm ">
							<EmailIcon sx={{ fontSize: 25, color: '#c36bd0' }} /> dev_drmuzik@outlook.com
						</p>
						<p className="flex gap-3 items-center text-sm">
							<CallIcon sx={{ fontSize: 25, color: '#c36bd0' }} /> +234 90 653 835 89
						</p>
						{/* <p>
						<CallIcon sx={{ fontSize: 25 }} /> +234 81 243 854 83
					</p> */}
						<p className="flex gap-3 items-center text-sm">
							<XIcon sx={{ fontSize: 25, color: '#c36bd0' }} /> twitter_handle
						</p>
						<p className="flex gap-3 items-center text-sm">
							{' '}
							<LinkedInIcon sx={{ fontSize: 25, color: '#c36bd0' }} />
							linkedIn handle
						</p>
					</div>
				</div>
				<Box
					component="form"
					// sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
					noValidate
					autoComplete="off"
					className="grid gap-3 w-full lg:max-w-[650px] lg:relative lg:-top-14 text-gray-900"
				>
					<h1 className="text-4xl font-semibold text-gray-800 mb-4">Any Project?</h1>
					<div className="grid gap-7 ">
						<TextField
							className="md:col-span-1 col-span-2"
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
		</section>
	);
}
