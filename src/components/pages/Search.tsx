import Product from '../Products'

export default function Search() {
	return (
		<div className="flex justify-evenly items-center flex-col overflow-x-auto">
			<div className="w-full max-w-[1440px]">
				<h1 className="text-3xl font-bold">Search:</h1>
				<div className="flex overflow-x-auto">
					<Product
						data={{
							img: 'samsung1.jpg',
							product: 'S23 Ultra 5G',
							price: 1299,
							sPrice: 0,
							color: '',
							date: '12.10',
							newly: '',
							sale: 'hidden',
						}}
					/>
				</div>
				<div className="flex overflow-x-auto">
					<Product
						data={{
							img: 'apple1.jpg',
							product: 'iPhone',
							price: 1299,
							sPrice: 0,
							color: '',
							date: '12.10',
							newly: 'hidden',
							sale: 'hidden',
						}}
					/>
				</div>
				<div className="flex justify-center items-center mt-8">
					<span>
						<img
							src="/ReactShop/arrow.svg"
							alt="linkedin"
							className="mr-4 w-12 h-12 sm:w-16 sm:h-16 bg-[#c9c9c9] hover:bg-[#ededed] hover:transition-all delay-150 rotate-90 rounded-full cursor-pointer p-3.5"
						/>
					</span>
					<span className="mr-2 w-12 h-12 sm:w-16 sm:h-16 bg-[#c9c9c9] hover:bg-[#ededed] hover:transition-all delay-150 text-2xl rounded-full cursor-pointer flex justify-center items-center">
						1
					</span>
					<span className="mr-2 w-12 h-12 sm:w-16 sm:h-16 bg-[#c9c9c9] hover:bg-[#ededed] hover:transition-all delay-150 text-2xl rounded-full cursor-pointer flex justify-center items-center">
						2
					</span>
					<span className="mr-2 w-12 h-12 sm:w-16 sm:h-16 bg-[#c9c9c9] hover:bg-[#ededed] hover:transition-all delay-150 text-2xl rounded-full cursor-pointer flex justify-center items-center">
						3
					</span>
					<span className="w-12 h-12 sm:w-16 sm:h-16 bg-[#c9c9c9] hover:bg-[#ededed] hover:transition-all delay-150 text-2xl rounded-full cursor-pointer flex justify-center items-center">
						4
					</span>
					<span>
						<img
							src="/ReactShop/arrow.svg"
							alt="linkedin"
							className="ml-4 w-12 h-12 sm:w-16 sm:h-16 bg-[#c9c9c9] hover:bg-[#ededed] hover:transition-all delay-150 -rotate-90 rounded-full cursor-pointer p-3.5"
						/>
					</span>
				</div>
			</div>
		</div>
	)
}
