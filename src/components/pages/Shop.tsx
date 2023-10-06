import Product from '../Product.tsx'
export default function Shop() {
	return (
		<div className="flex justify-evenly items-center flex-col overflow-x-auto">
			<div className="w-full max-w-[1440px]">
				<div className="flex justify-center flex-wrap md:flex-nowrap">
					<div className="bg-white w-full h-[450px] rounded-[15px] m-[1.5rem] bg-3 bg-center bg-no-repeat bg-cover shadow-box hover:shadow-hover cursor-pointer mb-4 hover:transition-all delay-200"></div>
				</div>
				<div className="flex overflow-x-auto">
					<Product
						img={'/ReactShop/samsung1.jpg'}
						newly={'hidden'}
						sale={'hidden'}
						color={''}
						phone={'S23 Ultra 5G'}
						price={'1299€'}
						sPrice={''}
						date={'12.10'}
					/>
					<Product
						img={'/ReactShop/samsung2.jpg'}
						newly={''}
						sale={'hidden'}
						color={''}
						phone={'S22 Ultra 5G'}
						price={'1199€'}
						sPrice={''}
						date={'15.10'}
					/>
					<Product
						img={'/ReactShop/samsung3.jpg'}
						newly={'hidden'}
						sale={''}
						color={'sale'}
						phone={'Galazy A14'}
						price={'1299€'}
						sPrice={'1099€'}
						date={'17.10'}
					/>
					<Product
						img={'/ReactShop/samsung4.jpg'}
						newly={'hidden'}
						sale={'hidden'}
						color={''}
						phone={'Galaxy A14 5G'}
						price={'399€'}
						sPrice={''}
						date={'12.10'}
					/>
					<Product
						img={'/ReactShop/samsung5.jpg'}
						newly={'hidden'}
						sale={'hidden'}
						color={''}
						phone={'Galaxy A04s'}
						price={'169€'}
						sPrice={''}
						date={'12.10'}
					/>
					<Product
						img={'/ReactShop/samsung6.jpg'}
						newly={''}
						sale={'hidden'}
						color={''}
						phone={'Galaxy S23+'}
						price={'1599€'}
						sPrice={''}
						date={'21.10'}
					/>
				</div>
				<div className="flex justify-center flex-wrap md:flex-nowrap">
					<div className="bg-white w-full h-[450px] rounded-[15px] m-[1.5rem] my-[4rem] bg-2 bg-center bg-no-repeat bg-cover shadow-box hover:shadow-hover cursor-pointer mb-4 hover:transition-all delay-200"></div>
				</div>
				<div className="flex overflow-x-auto">
					<Product
						img={'/ReactShop/samsung1.jpg'}
						newly={''}
						sale={'hidden'}
						color={''}
						phone={'iPhone 15 Pro Max'}
						price={'1599€'}
						sPrice={''}
						date={'12.10'}
					/>
					<Product
						img={'/ReactShop/samsung2.jpg'}
						newly={''}
						sale={'hidden'}
						color={''}
						phone={'S22 Ultra 5G'}
						price={'1199€'}
						sPrice={''}
						date={'15.10'}
					/>
					<Product
						img={'/ReactShop/samsung3.jpg'}
						newly={'hidden'}
						sale={''}
						color={'sale'}
						phone={'Galazy A14'}
						price={'1299€'}
						sPrice={'1099€'}
						date={'17.10'}
					/>
					<Product
						img={'/ReactShop/samsung4.jpg'}
						newly={'hidden'}
						sale={'hidden'}
						color={''}
						phone={'Galaxy A14 5G'}
						price={'399€'}
						sPrice={''}
						date={'12.10'}
					/>
					<Product
						img={'/ReactShop/samsung5.jpg'}
						newly={'hidden'}
						sale={'hidden'}
						color={''}
						phone={'Galaxy A04s'}
						price={'169€'}
						sPrice={''}
						date={'12.10'}
					/>
					<Product
						img={'/ReactShop/samsung6.jpg'}
						newly={''}
						sale={'hidden'}
						color={''}
						phone={'Galaxy S23+'}
						price={'1599€'}
						sPrice={''}
						date={'21.10'}
					/>
				</div>
			</div>
		</div>
	)
}
