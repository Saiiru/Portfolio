import Image from 'next/image'
import React from 'react'
import heroImage from '../public/cat-girl.png'
import { Element } from "react-scroll";
const HomePage = () => {
  return (
    <Element id="home" name="home">
			<div>
	<div className=" w-full h-full rounded-full absolute z-[-1] px-10 hidden md:block">
						<Image
							src={heroImage}
							alt="heroImage"
							layout="fill"
							objectFit="cover"
							className="absolute w-full cursor-pointer hidden md:block"
						/>
					</div>
				<div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28 ">
				
					<div className="flex flex-col md:ml-20 mx-10 mt-10 items-center">
						<h1 className="font-bold text-7xl text-left mb-5">
							Hello, I am <span className="text-indigo-900">Sairu</span>
						</h1>
						<p className="text-left text-white font-normal font mr-2 mb-5 w-full flex-wrap">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
							aperiam placeat molestiae atque tempore perspiciatis laboriosam
							quasi pariatur, vitae sequi veritatis veniam rerum, quos
							consectetur commodi rem totam voluptatum? Hic!
						</p>
						<a
							href="https://github.com/Saiiru" target="_blank"
							className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black "
						>
							See My Portfolio !
						</a>
					</div>
				</div>
			</div>
		</Element>
  )
}

export default HomePage
