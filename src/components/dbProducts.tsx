type Products = {
	data: {
		imgurl: string
		id: number
		name: string
		stock: number
		price: string
	}
}

export default function Product({ data }: Products) {
	return (
		<div className="flex justify-end flex-col bg-white w-[18%] max-h-[350px] rounded-[15px] m-[1rem] flex-shrink-0 shadow-box hover:shadow-hover cursor-pointer mb-4 relative transition-all delay-200">
			<div className="flex justify-center flex-col">
				<img
					src={data.imgurl}
					alt="Phone"
					className="w-full rounded-[15px] object-scale-down h-[200px]"
				/>
				<p className="text-xl mx-3 mt-2">{data.name}</p>
				<div className="flex mx-3 mb-2">
					<p className={`text-2xl`}>{data.price}€</p>
				</div>
			</div>
			<button className="bg-[#6FD141] w-10 h-10 rounded-full hover:bg-[#8be262] absolute bottom-10 right-3">
				<img src="/ReactShop/add.svg" alt="Add to Cart" className="p-1.5" />
			</button>
		</div>
	)
}
