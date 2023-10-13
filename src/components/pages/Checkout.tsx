export default function Checkout() {
	return (
		<div className="flex justify-evenly items-center mx-20 mt-10">
			<div className="w-full max-w-[1440px] flex">
				<div className="w-full">
					<div className="flex mx-5 font-bold text-xl">
						<p className="mr-48">Product</p>
						<p className="mr-24">Quantity</p>
						<p>Price</p>
					</div>
					<div className="flex">
						<div className="flex justify-end flex-col bg-white w-[25%] max-h-[350px] rounded-[15px] m-[1rem] flex-shrink-0 shadow-box hover:shadow-hover cursor-pointer mb-4 relative transition duration-150">
							<div className="flex justify-center flex-col">
								<img
									src="/ReactShop/products/samsung6.jpg"
									alt="Phone"
									className="w-full rounded-[15px] object-scale-down h-[200px]"
								/>
								<div className="flex mb-2">
									<p className="text-xl ml-3 mr-2 truncate">Galaxy S23 Ultra 5G</p>
									<span
										className={`bg-[#28B95D] rounded-xl px-3 mr-2 text-lg text-white`}
									>
										<p>New</p>
									</span>
									<span
										className={`bg-[#B94228] hidden rounded-xl px-3 mr-2 text-lg text-white`}
									>
										<p>Sale</p>
									</span>
								</div>
							</div>
						</div>
						<div className="flex mt-3 ml-3">
							<button className="h-12 w-12 rounded-l-lg border-4 hover:bg-[#f5f5f5] transition duration-150">
								<img src="/ReactShop/icons/minus.svg" alt="-" className="p-2" />
							</button>
							<p className="h-12 w-12 border-l-0 border-r-0 border-4 flex justify-center items-center text-xl">
								1
							</p>
							<button className="h-12 w-12 rounded-r-lg border-4 hover:bg-[#f5f5f5] transition duration-150">
								<img src="/ReactShop/icons/plus.svg" alt="+" className="p-2" />
							</button>
						</div>
						<div className="flex flex-col">
							<p className="ml-7 text-2xl mt-3">1499€</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex justify-end flex-col bg-white w-[25%] max-h-[350px] rounded-[15px] m-[1rem] flex-shrink-0 shadow-box hover:shadow-hover cursor-pointer mb-4 relative transition duration-150">
							<div className="flex justify-center flex-col">
								<img
									src="/ReactShop/products/samsung1.jpg"
									alt="Phone"
									className="w-full rounded-[15px] object-scale-down h-[200px]"
								/>
								<div className="flex mb-2">
									<p className="text-xl ml-3 mr-2 truncate">Galaxy A04s</p>
									<span
										className={`bg-[#28B95D] hidden rounded-xl px-3 mr-2 text-lg text-white`}
									>
										<p>New</p>
									</span>
									<span
										className={`bg-[#B94228] hidden rounded-xl px-3 mr-2 text-lg text-white`}
									>
										<p>Sale</p>
									</span>
								</div>
							</div>
						</div>
						<div className="flex mt-3 ml-3">
							<button className="h-12 w-12 rounded-l-lg border-4 hover:bg-[#f5f5f5] transition duration-150">
								<img src="/ReactShop/icons/minus.svg" alt="-" className="p-2" />
							</button>
							<p className="h-12 w-12 border-l-0 border-r-0 border-4 flex justify-center items-center text-xl">
								2
							</p>
							<button className="h-12 w-12 rounded-r-lg border-4 hover:bg-[#f5f5f5] transition duration-150">
								<img src="/ReactShop/icons/plus.svg" alt="+" className="p-2" />
							</button>
						</div>
						<div className="flex flex-col">
							<p className="ml-7 text-2xl mt-3">338€</p>
							<p className="ml-7 text-lg text-[#8D8D8D]">169€ / piece</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex justify-end flex-col bg-white w-[25%] max-h-[350px] rounded-[15px] m-[1rem] flex-shrink-0 shadow-box hover:shadow-hover cursor-pointer mb-4 relative transition duration-150">
							<div className="flex justify-center flex-col">
								<img
									src="/ReactShop/products/apple1.jpg"
									alt="Phone"
									className="w-full rounded-[15px] object-scale-down h-[200px]"
								/>
								<div className="flex mb-2">
									<p className="text-xl ml-3 mr-2 truncate">iPhone 15 Pro Max</p>
									<span
										className={`bg-[#28B95D] hidden rounded-xl px-3 mr-2 text-lg text-white`}
									>
										<p>New</p>
									</span>
									<span
										className={`bg-[#B94228] rounded-xl px-3 mr-2 text-lg text-white`}
									>
										<p>Sale</p>
									</span>
								</div>
							</div>
						</div>
						<div className="flex mt-3 ml-3">
							<button className="h-12 w-12 rounded-l-lg border-4 hover:bg-[#f5f5f5] transition duration-150">
								<img src="/ReactShop/icons/minus.svg" alt="-" className="p-2" />
							</button>
							<p className="h-12 w-12 border-l-0 border-r-0 border-4 flex justify-center items-center text-xl">
								1
							</p>
							<button className="h-12 w-12 rounded-r-lg border-4 hover:bg-[#f5f5f5] transition duration-150">
								<img src="/ReactShop/icons/plus.svg" alt="+" className="p-2" />
							</button>
						</div>
						<div className="flex flex-col">
							<p className="ml-7 text-2xl mt-3 text-[#AE5353]">199€</p>
							<p className="ml-7 text-lg text-[#8D8D8D] line-through">249€</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex justify-end flex-col bg-white w-[25%] max-h-[350px] rounded-[15px] m-[1rem] flex-shrink-0 shadow-box hover:shadow-hover cursor-pointer mb-4 relative transition duration-150">
							<div className="flex justify-center flex-col">
								<img
									src="/ReactShop/products/apple2.jpg"
									alt="Phone"
									className="w-full rounded-[15px] object-scale-down h-[200px]"
								/>
								<div className="flex mb-2">
									<p className="text-xl ml-3 mr-2 truncate">iPhone 14 Pro Max</p>
									<span
										className={`bg-[#28B95D] hidden rounded-xl px-3 mr-2 text-lg text-white`}
									>
										<p>New</p>
									</span>
									<span
										className={`bg-[#B94228] hidden rounded-xl px-3 mr-2 text-lg text-white`}
									>
										<p>Sale</p>
									</span>
								</div>
							</div>
						</div>
						<div className="flex mt-3 ml-3">
							<button className="h-12 w-12 rounded-l-lg border-4 hover:bg-[#f5f5f5] transition duration-150">
								<img src="/ReactShop/icons/minus.svg" alt="-" className="p-2" />
							</button>
							<p className="h-12 w-12 border-l-0 border-r-0 border-4 flex justify-center items-center text-xl">
								1
							</p>
							<button className="h-12 w-12 rounded-r-lg border-4 hover:bg-[#f5f5f5] transition duration-150">
								<img src="/ReactShop/icons/plus.svg" alt="+" className="p-2" />
							</button>
						</div>
						<div className="flex flex-col">
							<p className="ml-7 text-2xl mt-3">1099€</p>
						</div>
					</div>
				</div>
				<div className="flex justify-end w-[50%]">
					<div className="flex flex-col bg-[#F2F2F2] rounded-md max-h-[850px] w-[510px] p-6">
						<div>
							<p className="font-bold text-2xl">Summary</p>
							<div className="flex justify-between mt-4 mx-3">
								<p className="text-[22px]">Subtotal</p>
								<p className="text-[22px] text-[#515151]">3135€</p>
							</div>
							<div className="flex justify-between mt-3 border-b-2 pb-5 border-black">
								<p className="text-[22px] mx-3">Shipping</p>
								<p className="text-[22px] text-[#5c9e4e] mx-3">FREE!</p>
							</div>
						</div>
						<div className="mt-5">
							<input
								type="text"
								placeholder="Email"
								className="p-4 w-full mb-2 rounded-md border-2 border-[#A5A5A5]"
							/>
							<div className="flex justify-center">
								<input
									type="text"
									placeholder="First name"
									className="p-4 w-[50%] mb-2 rounded-md border-2 border-[#A5A5A5]"
								/>
								<input
									type="text"
									placeholder="Last name"
									className="p-4 w-[50%] ml-2 mb-2 rounded-md border-2 border-[#A5A5A5]"
								/>
							</div>
							<input
								type="text"
								placeholder="Address"
								className="p-4 w-full mb-2 rounded-md border-2 border-[#A5A5A5]"
							/>
							<div className="flex justify-center">
								<input
									type="text"
									placeholder="Postal Code"
									className="p-4 w-[50%] mb-2 rounded-md border-2 border-[#A5A5A5]"
								/>
								<input
									type="text"
									placeholder="City"
									className="p-4 w-[50%] mb-2 ml-2 rounded-md border-2 border-[#A5A5A5]"
								/>
							</div>
							<div className="flex justify-center">
								<input
									type="text"
									placeholder="Company (Optional)"
									className="p-4 w-[50%] mb-2 rounded-md border-2 border-[#A5A5A5]"
								/>
								<input
									type="text"
									placeholder="Phone"
									className="p-4 w-[50%] mb-2 ml-2 rounded-md border-2 border-[#A5A5A5]"
								/>
							</div>
							<div className="flex justify-end items-end">
								<div className="flex mt-3 p-2 w-[65%] rounded-md border-2 border-[#8AB789]">
									<img
										src="/ReactShop/icons/finland.svg"
										alt="fi"
										className="mr-3 ml-1"
									/>
									<div className="flex justify-between w-full">
										<p>Ships to Finland</p>
										<a className="underline text-[#595959] mr-1 cursor-pointer">
											Learn more
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="flex justify-center items-end mt-5 border-b-2 pb-7 border-black">
							<button className="w-full h-14 bg-[#EEBC30] hover:bg-[#fdc019] rounded-md transition duration-150">
								Checkout
							</button>
						</div>
						<div className="mt-6 flex items-center">
							<img src="/ReactShop/icons/shield.svg" alt="" className="mx-4 w-6 h-6" />
							<p className="text-[#4b4b4b]">3 Year warranty</p>
						</div>
						<div className="mt-4 flex items-center">
							<img
								src="/ReactShop/icons/calendar.svg"
								alt=""
								className="mx-4 w-6 h-6"
							/>
							<p className="text-[#4b4b4b]">30 Day return</p>
						</div>
						<div className="mt-4 mb-2 flex items-center">
							<img src="/ReactShop/icons/truck.svg" alt="" className="mx-4 w-6 h-6" />
							<p className="text-[#4b4b4b]">Worldwide shipping</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
