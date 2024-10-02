/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import bg from '../../public/images/img-bg.png';
import vector from '../../public/images/Vector.png';
import send from '../../public/images/send.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeCircleCheck, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function DashboardHome() {
	return (
		<section className="hero flex flex-col-reverse gap-5 lg:flex-row  lg:mt-8 relative z-40 px-3">
			<div className="flex items-center justify-center   pt-16 w-full xl:ml-16">
				<div className="lg:flex-1 relative  w-max lg:w-full h-min z-40">
					<Image className="absolute top-0 -z-10" width={100} src={vector} alt="vector" />
					<h1 className="nunito text-5xl lg:text-7xl">
						<span className="nunito text-3xl lg:text-5xl mb-4 block"> Hi, I'm</span>{' '}
						<b className="nunito font-extrabold">WISDOM PETERS...</b>
					</h1>
					<p className="w-full w-max-[200px] lg:w-max-full text-base lg:text-lg mt-4">
						A <b className="roboto-condensed-400">fullstack Web developer</b> based in{' '}
						<b className="roboto-condensed-400">Nigeria</b>
					</p>

					<div className="contact-link mt-8 mb-8 bg-black text-white w-max p-2 px-5 text-sm">
						Let's talk business{' '}
						<span className="ms-4">
							<Image className="inline" src={send} alt="send" width={18} />
						</span>
					</div>
					<div className="contact-details flex flex-col gap-4 lg:flex lg:flex-row lg:gap-8 text-xs">
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
			<div className="image flex w-full items-center justify-center">
				<Image className="w-[500px] h-[500px]" src={bg} alt="background" />
			</div>
		</section>
	);
}
