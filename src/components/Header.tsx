import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header className="mb-4 mt-4">
			<div className="flex justify-around list-none text-lg sm:text-2xl py-5">
				<div className="flex">
					<Link to="/checkout">
						<img
							src="/ReactShop/bag.svg"
							alt="bag"
							className="w-12 h-12 sm:w-16 sm:h-16 p-3 bg-[#84C865] hover:bg-[#89d765] rounded-full mr-5"
						/>
					</Link>
					<div className="flex my-2">
						<input
							type="text"
							placeholder="Search"
							className="h-10 sm:h-12 max-w-52 rounded-tl-xl rounded-bl-xl border-4 px-5 text-lg outline-none"
						/>
						<Link
							to="/search"
							className="h-10 sm:h-12 w-12 rounded-tr-xl rounded-br-xl border-4 border-l-0 hover:bg-[#f5f5f5]"
						>
							<img src="/ReactShop/search.svg" alt="search" className="py-2 px-2.5" />
						</Link>
					</div>
				</div>
				<ul className="flex list-none invisible lg:visible bg-[#E6E6E6] p-2 rounded-full">
					<Link to="/">
						<li className="mx-2 cursor-pointer transition duration-300 hover:bg-[#c9c9c9] rounded-full p-2 hover:text-white">
							Home
						</li>
					</Link>
					<Link to="/shop">
						<li className="mx-2 cursor-pointer transition duration-300 hover:bg-[#c9c9c9] rounded-full p-2 hover:text-white">
							Shop
						</li>
					</Link>
					<Link to="/checkout">
						<li className="mx-2 cursor-pointer transition duration-300 hover:bg-[#c9c9c9] rounded-full p-2 hover:text-white">
							Checkout
						</li>
					</Link>
				</ul>
				<div className="hidden">
					<div className="bg-[#E6E6E6] max-w-64 h-16 rounded-lg flex items-center justify-center px-4">
						<div className="flex mr-2">
							<button className="cursor-default">
								<img
									src="/ReactShop/bell.svg"
									alt="inbox"
									className="w-10 h-10 p-2 hover:bg-[#D3D3D3] rounded-md"
								/>
							</button>
							<button className="cursor-default">
								<img
									src="/ReactShop/message.svg"
									alt="messages"
									className="w-10 h-10 p-2 hover:bg-[#D3D3D3] rounded-md"
								/>
							</button>
							<button className="cursor-default">
								<img
									src="/ReactShop/account.svg"
									alt="account"
									className="w-10 h-10 p-2 hover:bg-[#D3D3D3] rounded-md"
								/>
							</button>
						</div>
						<p className="w-32 ml-2 truncate text-xl border-l-2 border-gray-500 pl-5">
							Philip Huynh
						</p>
						<button className="cursor-default">
							<img
								src="/ReactShop/arrow.svg"
								alt="dropdown"
								className="w-10 h-10 pt-2 pb-1.5 ml-3 hover:bg-[#efefef] rounded-full"
							/>
						</button>
					</div>
				</div>
				<div className="">
					<div className="bg-[#E6E6E6] max-w-64 h-16 rounded-lg flex items-center justify-center px-4">
						<Link
							to="/login"
							className="cursor-default px-2 py-1 mr-3 bg-[#1A6BE5] hover:bg-[#1A57B4] text-white rounded-md"
						>
							Sign In
						</Link>
						<Link
							to="register"
							className="cursor-default px-2 py-1 bg-[#1A6BE5] hover:bg-[#1A57B4] text-white rounded-md"
						>
							Register
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}
