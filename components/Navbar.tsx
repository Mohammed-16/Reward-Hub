
import Connectwallet from './Connectwallet';

export const Navbar = () => {

	return (
		<>
			<div className='flex justify-between px-10 h-20 items-center border-b border-[#8BD1D2] '>
				<h1 className='uppercase super text-3xl font-Lexend font-extrabold tracking-tight '>
				Reward Hub
				</h1>
				<Connectwallet />
			</div>
		</>
	)
}
