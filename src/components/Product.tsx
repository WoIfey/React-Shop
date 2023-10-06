export default function Product({
	img,
	newly,
	sale,
	phone,
	color,
	price,
	sPrice,
	date,
}) {
	return (
		<div className="flex justify-end flex-col bg-white w-[18%] max-h-[350px] rounded-[15px] m-[1.5rem] flex-shrink-0 shadow-box hover:shadow-hover cursor-pointer mb-4 relative transition-all delay-200">
			<div className="flex justify-center flex-col">
				<img
					src={img}
					alt="Phone"
					className="w-full rounded-[15px] object-scale-down h-[200px]"
				/>
				<p className="text-xl mx-3 mt-2">{phone}</p>
				<div className="flex mx-3 mb-2">
					<span
						className={`bg-[#28B95D] mr-1.5 ${newly} rounded-xl px-3 text-lg text-white`}
					>
						<p className="mt-0.5">New</p>
					</span>
					<span
						className={`bg-[#B94228] mr-1.5 ${sale} rounded-xl px-3 text-lg text-white`}
					>
						<p className="mt-0.5">Sale</p>
					</span>
					<p className={`text-2xl text-${color}`}>{price}</p>
					<p className={`text-md line-through text-[#9D9D9D] ml-1 ${sale}`}>
						{sPrice}
					</p>
				</div>
			</div>
			<button className="bg-[#6FD141] w-10 h-10 rounded-full hover:bg-[#8be262] absolute bottom-10 right-3">
				<img src="/ReactShop/add.svg" alt="Add to Cart" className="p-1.5" />
			</button>
			<div className="flex justify-between items-center px-4 py-1 bg-gray-300 rounded-b-xl w-full">
				<p>Delivery</p>
				<p>{date}</p>
			</div>
		</div>
	)
}
