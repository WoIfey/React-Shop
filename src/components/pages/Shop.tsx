import Product from '../Products'
/* import { useState, useEffect } from 'react' */

export default function Shop() {
	/* 	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch('http://10.111.3.78:3001/api/products')
			.then(res => {
				return res.json()
			})
			.then(data => {
				console.log(data)
				setProducts(data)
			})
	}, []) */

	return (
		<div className="flex justify-evenly items-center flex-col overflow-x-auto">
			<div className="w-full max-w-[1440px]">
				<div className="flex justify-center flex-wrap md:flex-nowrap">
					<div className="bg-white w-full h-[450px] rounded-[15px] m-[1.5rem] bg-3 bg-center bg-no-repeat bg-cover shadow-box cursor-pointer mb-4"></div>
				</div>
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
					<Product
						data={{
							img: 'samsung2.jpg',
							product: 'S22 Ultra 5G',
							price: 1199,
							sPrice: 0,
							color: '',
							date: '14.10',
							newly: 'hidden',
							sale: 'hidden',
						}}
					/>
					<Product
						data={{
							img: 'samsung3.jpg',
							product: 'Galaxy A14',
							price: 399,
							sPrice: 0,
							color: '',
							date: '15.10',
							newly: 'hidden',
							sale: 'hidden',
						}}
					/>
					<Product
						data={{
							img: 'samsung4.jpg',
							product: 'Galaxy A14 5G',
							price: 199,
							sPrice: 249,
							color: 'text-sale',
							date: '16.10',
							newly: 'hidden',
							sale: '',
						}}
					/>
					<Product
						data={{
							img: 'samsung5.jpg',
							product: 'Galaxy A04s',
							price: 169,
							sPrice: 0,
							color: '',
							date: '14.10',
							newly: 'hidden',
							sale: 'hidden',
						}}
					/>
					<Product
						data={{
							img: 'samsung6.jpg',
							product: 'S21 Ultra 5G',
							price: 1099,
							sPrice: 0,
							color: '',
							date: '17.10',
							newly: 'hidden',
							sale: 'hidden',
						}}
					/>
				</div>
				<div className="flex justify-center flex-wrap md:flex-nowrap">
					<div className="bg-white w-full h-[450px] rounded-[15px] m-[1.5rem] my-[2rem] bg-2 bg-center bg-no-repeat bg-cover shadow-box cursor-pointer mb-4"></div>
				</div>
				<div className="flex overflow-x-auto">
					{/* 					
					{products.map(product => (
						<Product data={product}></Product>
					))} 
					*/}
					<Product
						data={{
							img: 'apple1.jpg',
							product: 'IPhone 15 256',
							price: 1119,
							sPrice: 0,
							color: '',
							date: '12.10',
							newly: '',
							sale: 'hidden',
						}}
					/>
					<Product
						data={{
							img: 'apple2.jpg',
							product: 'iPhone 15 512GB',
							price: 1199,
							sPrice: 0,
							color: '',
							date: '14.10',
							newly: '',
							sale: 'hidden',
						}}
					/>
					<Product
						data={{
							img: 'apple3.jpg',
							product: 'iPhone 14 Plus 512GB',
							price: 1379,
							sPrice: 1429,
							color: 'text-sale',
							date: '15.10',
							newly: 'hidden',
							sale: '',
						}}
					/>
					<Product
						data={{
							img: 'apple4.jpg',
							product: 'iPhone 12 64GB',
							price: 619,
							sPrice: 799,
							color: 'text-sale',
							date: '16.10',
							newly: 'hidden',
							sale: '',
						}}
					/>
					<Product
						data={{
							img: 'apple5.jpg',
							product: 'iPhone SE',
							price: 369,
							sPrice: 0,
							color: '',
							date: '14.10',
							newly: 'hidden',
							sale: 'hidden',
						}}
					/>
					<Product
						data={{
							img: 'apple6.jpg',
							product: 'iPhone 12 Pro',
							price: 1099,
							sPrice: 0,
							color: '',
							date: '17.10',
							newly: 'hidden',
							sale: 'hidden',
						}}
					/>
					<Product
						data={{
							img: 'apple7.jpg',
							product: 'iPhone 12',
							price: 899,
							sPrice: 0,
							color: '',
							date: '17.10',
							newly: 'hidden',
							sale: 'hidden',
						}}
					/>
				</div>
			</div>
		</div>
	)
}
