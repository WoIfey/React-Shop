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
						<button className="h-10 sm:h-12 w-12 rounded-tr-xl rounded-br-xl border-4 border-l-0 bg-white">
							<img src="/ReactShop/search.svg" alt="search" className="px-2.5" />
						</button>
					</div>
				</div>
				<ul className="flex list-none invisible lg:visible my-4">
					<li className="mx-6 cursor-pointer hover:text-[#4f4f4f]">
						<Link to="/">Home</Link>
					</li>
					<li className="mx-6 cursor-pointer hover:text-[#4f4f4f]">
						<Link to="/shop">Shop</Link>
					</li>
					<li className="mx-6 cursor-pointer hover:text-[#4f4f4f]">
						<Link to="/checkout">Checkout</Link>
					</li>
				</ul>
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
		</header>
	)
}
