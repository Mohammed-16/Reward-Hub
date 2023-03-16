import React, { useEffect } from 'react'
import Connectwallet from './Connectwallet'


export const Landing = () => {

	return (
		<>
			<div className='bgLanding md:grid  '>
				<div></div>
				<main className='  flex flex-col justify-center items-center space-y-20 min-h-screen  '>
					<h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-extrabold uppercase super font-Lexend '>
						Reward Hub
					</h1>
					<div className='flex flex-col justify-center items-center text-center space-y-2'>
						<p className='text-transparent bg-clip-text text-xl xl:text-2xl 2xl:text-3xl tracking-tighter font-medium capitalize superdes font-Lexend'>
							{'"Tokens and NFTs can be bought,'}
						</p>
						<p className=' text-xl 2xl:text-3xl xl:text-xl font-medium capitalize  font-Lexend flex flex-row gap-x-3 '>
							<span className='text-transparent bg-clip-text superdes tracking-tighter '>
								{'Contribution Power needs to be earned"'}
							</span>
							🏆
						</p>
					</div>
					<div className='flex justify-center relative '>
						{' '}
						<div>
							<Connectwallet />
						</div>
					</div>
				</main>
			</div>
		</>
	)
}
