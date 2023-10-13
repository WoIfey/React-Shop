import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header className="mb-10 mt-4">
			<div className="flex justify-around list-none text-lg sm:text-2xl py-5">
				<p>.</p>
				<div className="flex absolute left-48">
					<Link to="/checkout" className="h-[64px] w-[64px] mr-5">
						<img
							src="/ReactShop/icons/bag.svg"
							alt="bag"
							className="w-12 h-12 sm:w-16 sm:h-16 p-3 bg-[#84C865] hover:bg-[#89d765] rounded-full mr-5 transition duration-150"
						/>
						<span className="bg-[#A12020] text-xl h-8 w-8 text-center pt-0.5 rounded-full absolute left-10 -top-2 text-white">
							9+
						</span>
					</Link>
					<div className="flex my-2">
						<input
							type="text"
							placeholder="Search"
							className="h-10 sm:h-12 max-w-[200px] rounded-tl-xl rounded-bl-xl border-4 px-4 text-lg outline-none"
						/>
						<Link
							to="/search"
							className="h-10 sm:h-12 w-12 rounded-tr-xl rounded-br-xl border-4 border-l-0 hover:bg-[#f5f5f5] transition duration-150"
						>
							<img
								src="/ReactShop/icons/search.svg"
								alt="search"
								className="py-2 px-2.5"
							/>
						</Link>
					</div>
				</div>
				<ul className="flex absolute list-none bg-[#E6E6E6] p-2 rounded-full text-[22px]">
					<Link to="/">
						<li className="w-32 text-center cursor-pointer transition duration-150 hover:bg-[#a2a2a2] rounded-full p-2 hover:text-white">
							Home
						</li>
					</Link>
					<Link to="/shop">
						<li className="w-32 text-center cursor-pointer transition duration-150 hover:bg-[#a2a2a2] rounded-full p-2 hover:text-white">
							Shop
						</li>
					</Link>
				</ul>
				<div className="hidden absolute right-48">
					<div className="bg-[#E6E6E6] h-16 rounded-lg flex items-center justify-center px-4">
						<div className="flex mr-2">
							<button className="cursor-default">
								<img
									src="/ReactShop/icons/bell.svg"
									alt="inbox"
									className="w-10 h-10 p-2 hover:bg-[#D3D3D3] rounded-md transition duration-150"
								/>
							</button>
							<button className="cursor-default">
								<img
									src="/ReactShop/icons/message.svg"
									alt="messages"
									className="w-10 h-10 p-2 hover:bg-[#D3D3D3] rounded-md transition duration-150"
								/>
							</button>
							<button className="cursor-default">
								<img
									src="/ReactShop/icons/account.svg"
									alt="account"
									className="w-10 h-10 p-2 hover:bg-[#D3D3D3] rounded-md transition duration-150"
								/>
							</button>
						</div>
						<p className="w-32 ml-2 truncate text-xl border-l-2 border-[#A6A6A6] pl-5">
							Philip Huynh
						</p>
						<button className="cursor-default">
							<img
								src="/ReactShop/icons/arrow.svg"
								alt="dropdown"
								className="w-10 h-10 pt-2 pb-1.5 ml-3 hover:bg-[#efefef] rounded-full transition duration-150"
							/>
						</button>
					</div>
				</div>
				<div className="absolute right-48">
					<div className="bg-[#E6E6E6] h-16 rounded-lg flex items-center justify-center px-4">
						<Link
							to="register"
							className="cursor-default text-xl px-2 py-1 mr-3 bg-[#7c7c7c] hover:bg-[#616161] text-white rounded-md transition duration-150"
						>
							Register
						</Link>
						<Link
							to="/login"
							className="cursor-default text-xl px-2 py-1 bg-[#1A6BE5] hover:bg-[#1A57B4] text-white rounded-md transition duration-150"
						>
							Sign In
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}
