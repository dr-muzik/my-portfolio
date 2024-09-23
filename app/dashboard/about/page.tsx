export default function About() {
	return (
		<section className="px-7 lg:py-20 relative z-40">
			<h1 className="text-5xl mb-8  md:mb-4 font-bold opacity-20 text-[#c9512d] shadow-lg">
				ABOUT ME
			</h1>
			<div className="lg:flex lg:gap-[68px] mb-[80px]">
				<p className="nunito text-3xl lg:text-4xl font-extrabold  lg:w-[485px] md:text-right leading-[50px] lg:leading-[60px] mb-9">
					<span className="block">Hello!</span> I'm Wisdom Peters, a passionate
					<span className="text-[#fe805b] ps-2">Full Stack Web Application developer</span>. I
					create engaging and intuitive web experiences
				</p>
				<p className="roboto-condense-500 leading-10  mb-9 lg:w-[340px] bg-white h-max rounded-xl text-gray-700 lg:relative lg:top-[100px] text-sm text-left shadow-lg p-5">
					...with my basic foundation in full-stack development, I can handle both the client-side
					and server-side tasks, ensuring seamless integration and optimized performance. Whether
					you're looking to create modern web apps or neeed backend services, I'm here to hlp
					deliver reliable and scalable solutions.
				</p>
			</div>

			<div className="mb-8 leading-8">
				<h1 className="text-4xl mb-5 font-medium">Education</h1>
				<p className="text-2xl mb-1">
					<b>University of Nigeria, Nsukka</b>
				</p>
				<p>B.Sc. in Computer Science</p>
				<p>October 2019 - September 2023</p>
			</div>
		</section>
	);
}
