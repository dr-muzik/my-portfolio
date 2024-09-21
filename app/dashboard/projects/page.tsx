import Image from 'next/image';

export default function Projects() {
	return (
		<section className="px-7 lg:py-20 relative z-50">
			<h1 className="text-5xl font-bold mb-9 opacity-80 text-transparent bg-clip-text bg-custom-gradient">
				Projects
			</h1>
			<div className="lg:flex gap-8">
				<div className="mb-4 flex flex-col max-w-[350px] items-center  border-2 border-gray-300">
					<Image
						src="/images/sef.png"
						className="cursor-pointer"
						width={350}
						height={300}
						alt="sefmar"
					/>
					<p className="bg-gray-400 p-5 text-center w-full">SEFMAR limited</p>
				</div>
				<div className="mb-4 flex flex-col max-w-[350px] items-center  border-2 border-gray-500">
					<Image
						src="/images/sogizHero.png"
						alt="sogiz"
						width={350}
						height={400}
						className="cursor-pointer h-[216px] "
					/>
					<p className="bg-gray-400 p-5 text-center w-full">
						Sogizberlin Church
					</p>
				</div>
			</div>
		</section>
	);
}
