// src/components/Footer.js

import React from 'react';
import { FaDiscord, FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
<footer className="bg-[#1C1C1C] text-white">
	<div className="w-full px-4 md:px-5 lg:px-8 py-5 md:py-8">
		<div className="flex flex-col items-center justify-center gap-3">
				<h2 className="text-3xl font-bold">Game<span className="text-acent italic">Zy</span></h2>
			<div>
				<ul className="flex gap-4 items-center justify-center">
					<li>
						<a href="#" className="outline-icon w-10 h-10 rounded-full flex items-center justify-center bg-primary shadow-3xl">
							<FaInstagram/>
						</a>
					</li>
					<li>
						<a href="#" className="outline-icon w-10 h-10 rounded-full flex items-center justify-center bg-primary shadow-3xl">
							<FaPinterest/>
						</a>
					</li>
					<li>
						<a href="#" className="outline-icon w-10 h-10 rounded-full flex items-center justify-center bg-primary shadow-3xl">
							<FaFacebook/>
						</a>
					</li>
					<li>
						<a href="#" className="outline-icon w-10 h-10 rounded-full flex items-center justify-center bg-primary shadow-3xl">
							<FaTwitter/>
						</a>
					</li>
					<li>
						<a href="#" className="outline-icon w-10 h-10 rounded-full flex items-center justify-center bg-primary shadow-3xl">
							<FaDiscord/>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div className="flex flex-col lg:flex-row gap-5 items-center justify-between pt-4">
			<div className="flex flex-col gap-4 items-center lg:items-start ">
				<ul className="flex gap-4 md:gap-5 text-pastelBlue">
					<li className="hover:text-acent"><a href="#">About</a></li>
					<li className="hover:text-acent"><a href="#">Privacy Policy</a></li>
					<li className="hover:text-acent"><a href="#">Terms & Conditions</a></li>
					<li className="hover:text-acent"><a href="#l">Contact Us</a></li>
					<li className="hover:text-acent"><a href="#">FAQs</a></li>
				</ul>
				<p className="text-pastelBlue">©2024 GameZy All rights reserved.</p>
			</div>
			<div className="flex flex-row gap-4">
				<a href="#" className="p-2 sm:p-3 border border-slate-300 rounded-lg flex gap-2 items-center text-white">
					<img className="w-6 md:w-8 h-auto" src="https://www.androidp1.com/uploads/posts/2021-09/1630781158_google-play-store.webp" alt=""/>
					<div className="text-white">
						<span className="text-xxs sm:text-xs">Get It On</span>
						<p className="text-pastelBlue">Google Play</p>
					</div>
				</a>
				<a href="#" className="p-2 sm:p-3 border border-slate-300 rounded-lg flex gap-2 items-center">
					<img className="w-6 md:w-8 h-auto" src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201610091654" alt=""/>
					<div className="text-white">
						<span className="text-xxs sm:text-xs">Download On</span>
						<p className="text-pastelBlue">Apple Store</p>
					</div>
				</a>
			</div>
		</div>
	</div>
</footer>
  );
};

export default Footer;
