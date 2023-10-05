export default function Checkout() {
	return (
		<div className="flex justify-between mx-20 mt-10">
			<div className="w-full">
				<div className="flex mx-7 font-bold text-xl">
					<p className="mr-48">Product</p>
					<p className="mr-24">Quantity</p>
					<p>Price</p>
				</div>
				<div className="flex">
					<div className="bg-white w-[20%] h-[250px] rounded-[15px] mt-3 mx-6 bg-4 bg-center bg-no-repeat bg-cover flex-shrink-0 shadow-box hover:shadow-hover cursor-pointer hover:transition-all delay-200"></div>
					<div className="flex mt-3">
						<button className="h-12 w-12 rounded-l-lg border-4">
							<img src="/ReactShop/minus.svg" alt="" className="p-2" />
						</button>
						<p className="h-12 w-12 border-l-0 border-r-0 border-4 flex justify-center items-center text-xl">
							1
						</p>
						<button className="h-12 w-12 rounded-r-lg border-4">
							<img src="/ReactShop/plus.svg" alt="" className="p-2" />
						</button>
					</div>
					<p className="ml-7 text-xl mt-3">1299€</p>
				</div>
				<div className="flex">
					<div className="bg-white w-[20%] h-[250px] rounded-[15px] mt-3 mx-6 bg-1 bg-center bg-no-repeat bg-cover flex-shrink-0 shadow-box hover:shadow-hover cursor-pointer hover:transition-all delay-200"></div>
					<div className="flex mt-3">
						<button className="h-12 w-12 rounded-l-lg border-4">
							<img src="/ReactShop/minus.svg" alt="" className="p-2" />
						</button>
						<p className="h-12 w-12 border-l-0 border-r-0 border-4 flex justify-center items-center text-xl">
							1
						</p>
						<button className="h-12 w-12 rounded-r-lg border-4">
							<img src="/ReactShop/plus.svg" alt="" className="p-2" />
						</button>
					</div>
					<p className="ml-7 text-xl mt-3">1499€</p>
				</div>
				<div className="flex">
					<div className="bg-white w-[20%] h-[250px] rounded-[15px] mt-3 mx-6 bg-5 bg-center bg-no-repeat bg-cover flex-shrink-0 shadow-box hover:shadow-hover cursor-pointer hover:transition-all delay-200"></div>
					<div className="flex mt-3">
						<button className="h-12 w-12 rounded-l-lg border-4">
							<img src="/ReactShop/minus.svg" alt="" className="p-2" />
						</button>
						<p className="h-12 w-12 border-l-0 border-r-0 border-4 flex justify-center items-center text-xl">
							1
						</p>
						<button className="h-12 w-12 rounded-r-lg border-4">
							<img src="/ReactShop/plus.svg" alt="" className="p-2" />
						</button>
					</div>
					<p className="ml-7 text-xl mt-3">199€</p>
				</div>
			</div>
			<div className="flex justify-end w-[50%]">
				<div className="flex flex-col bg-[#F2F2F2] rounded-md h-[820px] w-[510px] p-6">
					<div>
						<p className="font-bold text-2xl">Summary</p>
						<div className="flex justify-between mt-5">
							<p className="text-2xl">Subtotal</p>
							<p className="text-2xl">3€</p>
						</div>
						<div className="flex justify-between mt-5 border-b-2 pb-7 border-black">
							<p className="text-2xl">Shipping</p>
							<p className="text-2xl text-green-600">FREE!</p>
						</div>
					</div>
					<div className="mt-5">
						<input
							type="text"
							placeholder="Email"
							className="p-4 w-full mb-2 rounded-md border-2 border-gray-300"
						/>
						<input
							type="text"
							placeholder="First name"
							className="p-4 w-[50%] mb-2 rounded-md border-2 border-gray-300"
						/>
						<input
							type="text"
							placeholder="Last name"
							className="p-4 w-[50%] mb-2 rounded-md border-2 border-gray-300"
						/>
						<input
							type="text"
							placeholder="Address"
							className="p-4 w-full mb-2 rounded-md border-2 border-gray-300"
						/>
						<input
							type="text"
							placeholder="Postal Code"
							className="p-4 w-[50%] mb-2 rounded-md border-2 border-gray-300"
						/>
						<input
							type="text"
							placeholder="City"
							className="p-4 w-[50%] mb-2 rounded-md border-2 border-gray-300"
						/>
						<input
							type="text"
							placeholder="Company (Optional)"
							className="p-4 w-[50%] mb-2 rounded-md border-2 border-gray-300"
						/>
						<input
							type="text"
							placeholder="Phone"
							className="p-4 w-[50%] mb-2 rounded-md border-2 border-gray-300"
						/>
						<div className="mt-2 p-4 w-[50%] rounded-md border-2 border-gray-300">
							Ship to Finland
						</div>
					</div>
					<div className="flex justify-center items-end mt-auto">
						<button className="w-full h-14 bg-[#EEBC30] hover:bg-[#fdc019] rounded-md">
							Checkout
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
