import { Helmet } from "react-helmet-async";

const ContactUs = () => {
	return (
		<section className="text-gray-600 body-font relative">
			<Helmet>
				<title>Contact Us | Student Survival Box</title>
			</Helmet>


			{/* Google Maps iFrame Background */}
			<div className="absolute inset-0 bg-gray-300">
				<iframe
					width="100%"
					height="100%"
					title="map"
					scrolling="no"
					src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=(Falmouth+University+-+Penryn+Campus)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
					style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
				></iframe>
			</div>

			{/* Contact form begins here */}
			<div className="container px-5 py-24 mx-auto flex">
				<div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
					<h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
						Get in touch
					</h2>
					<p className="leading-relaxed mb-5 text-gray-600">
						We are here ready to help
					</p>
					<div className="relative mb-4">
						<label htmlFor="email" className="leading-7 text-sm text-gray-600">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<div className="relative mb-4">
						<label
							htmlFor="message"
							className="leading-7 text-sm text-gray-600"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
						></textarea>
					</div>
					<button className="text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:text-white rounded text-lg">
						Send Message
					</button>
					<p className="text-xs text-gray-500 mt-3">
						Our team are ready and waiting to reply to your message as fast as
						possible.
					</p>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
