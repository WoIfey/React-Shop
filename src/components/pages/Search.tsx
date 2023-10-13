import Product from '../Products'

export default function Search() {
	return (
		<div className="flex justify-evenly items-center flex-col overflow-x-auto">
			<div className="w-full max-w-[1440px]">
				<h1 className="text-3xl font-bold">
					Search: <span className="italic">Result</span>
				</h1>
				<div className="flex overflow-x-auto">
					<Product
						data={{
							img: 'samsung1.jpg',
							product: 'S23 Ultra 5G',
							price: 1299,
							sPrice: 0,
							color: '',
							date: '12.10',
							newly: 'hidden',
							sale: 'hidden',
						}}
					/>
					<Product
						data={{
							img: 'samsung4.jpg',
							product: 'S23 Ultra 5G',
							price: 1299,
							sPrice: 0,
							color: '',
							date: '12.10',
							newly: '',
							sale: 'hidden',
						}}
					/>
					<Product
						data={{
							img: 'samsung5.jpg',
							product: 'S23 Ultra 5G',
							price: 1299,
							sPrice: 0,
							color: '',
							date: '12.10',
							newly: 'hidden',
							sale: 'hidden',
						}}
					/>
					<Product
						data={{
							img: 'samsung2.jpg',
							product: 'S23 Ultra 5G',
							price: 1299,
							sPrice: 0,
							color: '',
							date: '12.10',
							newly: 'hidden',
							sale: 'hidden',
						}}
					/>
					<Product
						data={{
							img: 'samsung3.jpg',
							product: 'S23 Ultra 5G',
							price: 1299,
							sPrice: 0,
							color: '',
							date: '12.10',
							newly: '',
							sale: 'hidden',
						}}
					/>
					<Product
						data={{
							img: 'samsung6.jpg',
							product: 'S23 Ultra 5G',
							price: 1299,
							sPrice: 0,
							color: '',
							date: '12.10',
							newly: 'hidden',
							sale: 'hidden',
						}}
					/>
				</div>
				<div className="flex overflow-x-auto">
					<Product
						data={{
							img: 'apple1.jpg',
							product: 'iPhone 15 Pro Max',
							price: 1499,
							sPrice: 0,
							color: '',
							date: '12.10',
							newly: 'hidden',
							sale: 'hidden',
						}}
					/>
				</div>
				<div className="flex overflow-x-auto">
					<Product
						data={{
							img: 'apple3.jpg',
							product: 'iPhone 15 Pro Max',
							price: 1499,
							sPrice: 1599,
							color: 'text-sale',
							date: '12.10',
							newly: 'hidden',
							sale: '',
						}}
					/>
					<Product
						data={{
							img: 'apple2.jpg',
							product: 'iPhone 15 Pro Max',
							price: 1499,
							sPrice: 0,
							color: '',
							date: '12.10',
							newly: 'hidden',
							sale: 'hidden',
						}}
					/>
				</div>
				<div className="flex justify-center items-center mt-10">
					<span>
						<img
							src="/ReactShop/icons/arrow.svg"
							alt="back"
							className="mr-4 w-12 h-12 sm:w-16 sm:h-16 hover:bg-[#f1f1f1] transition duration-150 rotate-90 rounded-full cursor-pointer p-3.5"
						/>
					</span>
					<span className="mr-2 w-12 h-12 sm:w-16 sm:h-16 bg-[#c9c9c9] hover:bg-[#dedede] transition duration-150 text-2xl rounded-full cursor-pointer flex justify-center items-center">
						1
					</span>
					<span className="mr-2 w-12 h-12 sm:w-16 sm:h-16 bg-[#c9c9c9] hover:bg-[#dedede] transition duration-150 text-2xl rounded-full cursor-pointer flex justify-center items-center">
						2
					</span>
					<span className="mr-2 w-12 h-12 sm:w-16 sm:h-16 bg-[#c9c9c9] hover:bg-[#dedede] transition duration-150 text-2xl rounded-full cursor-pointer flex justify-center items-center">
						3
					</span>
					<span className="w-12 h-12 sm:w-16 sm:h-16 bg-[#c9c9c9] hover:bg-[#dedede] transition duration-150 text-2xl rounded-full cursor-pointer flex justify-center items-center">
						4
					</span>
					<span>
						<img
							src="/ReactShop/icons/arrow.svg"
							alt="next"
							className="ml-4 w-12 h-12 sm:w-16 sm:h-16 hover:bg-[#f1f1f1] transition duration-150 -rotate-90 rounded-full cursor-pointer p-3.5"
						/>
					</span>
				</div>
			</div>
		</div>
	)
}
