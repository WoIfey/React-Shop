import Products from '../components/Products'

export default function Home() {
	return (
		<>
			<div className="flex justify-evenly items-center flex-col overflow-x-auto">
				<div className="w-full max-w-[1440px]">
					<div className="flex justify-center flex-wrap md:flex-nowrap">
						<div className="bg-white w-full md:w-[45%] lg:w-[60%] h-[450px] rounded-[15px] m-[1.5rem] bg-2 bg-[-10.5rem] bg-no-repeat bg-cover shadow-box hover:shadow-hover cursor-pointer mb-4 hover:transition-all delay-200"></div>
						<div className="bg-white w-full md:w-[45%] lg:w-[35%] h-[450px] rounded-[15px] m-[1.5rem] bg-3 bg-center bg-no-repeat bg-cover shadow-box hover:shadow-hover cursor-pointer mb-4 hover:transition-all delay-200"></div>
					</div>
					<Products />
				</div>
			</div>
		</>
	)
}
