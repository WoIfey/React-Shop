import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<>
			<div className="flex justify-evenly items-center flex-col overflow-x-auto">
				<div className="w-full max-w-[1440px]">
					<div className="flex justify-center flex-wrap md:flex-nowrap">
						<Link
							to={'/shop'}
							className="bg-white w-full md:w-[45%] lg:w-[60%] h-[450px] rounded-[15px] m-[1.5rem] bg-2 bg-[-10.5rem] bg-no-repeat bg-cover shadow-box hover:shadow-hover cursor-pointer mb-4 transition duration-150"
						></Link>
						<Link
							to={'/shop'}
							className="bg-white w-full md:w-[45%] lg:w-[35%] h-[450px] rounded-[15px] m-[1.5rem] bg-3 bg-center bg-no-repeat bg-cover shadow-box hover:shadow-hover cursor-pointer mb-4 transition duration-150"
						></Link>
					</div>
					<div className="flex overflow-x-auto">
						<Link
							to={'/shop'}
							className="bg-white w-[50%] md:w-[45%] lg:w-[25%] h-[250px] rounded-[15px] m-[1.5rem] bg-4 bg-center bg-no-repeat bg-cover flex-shrink-0 shadow-box hover:shadow-hover cursor-pointer mb-4 relative transition duration-150"
						></Link>
						<Link
							to={'/shop'}
							className="bg-white w-[50%] md:w-[45%] lg:w-[25%] h-[250px] rounded-[15px] m-[1.5rem] bg-1 bg-center bg-no-repeat bg-cover flex-shrink-0 shadow-box hover:shadow-hover cursor-pointer mb-4 relative transition duration-150"
						></Link>
						<Link
							to={'/shop'}
							className="bg-white w-[50%] md:w-[45%] lg:w-[25%] h-[250px] rounded-[15px] m-[1.5rem] bg-5 bg-center bg-no-repeat bg-cover flex-shrink-0 shadow-box hover:shadow-hover cursor-pointer mb-4 relative transition duration-150"
						></Link>
						<Link
							to={'/shop'}
							className="bg-white w-[50%] md:w-[45%] lg:w-[25%] h-[250px] rounded-[15px] m-[1.5rem] bg-6 bg-left bg-no-repeat bg-cover flex-shrink-0 shadow-box hover:shadow-hover cursor-pointer mb-4 relative transition duration-150"
						></Link>
						<Link
							to={'/shop'}
							className="bg-white w-[50%] md:w-[45%] lg:w-[25%] h-[250px] rounded-[15px] m-[1.5rem] bg-3 bg-center bg-no-repeat bg-cover flex-shrink-0 shadow-box hover:shadow-hover cursor-pointer mb-4 relative transition duration-150"
						></Link>
					</div>
					<div className="flex overflow-x-auto">
						<Link
							to={'/shop'}
							className="bg-white w-[50%] md:w-[45%] lg:w-[25%] h-[250px] rounded-[15px] m-[1.5rem] bg-6 bg-left bg-no-repeat bg-cover flex-shrink-0 shadow-box hover:shadow-hover cursor-pointer mb-4 relative transition duration-150"
						></Link>
						<Link
							to={'/shop'}
							className="bg-white w-[50%] md:w-[45%] lg:w-[25%] h-[250px] rounded-[15px] m-[1.5rem] bg-3 bg-center bg-no-repeat bg-cover flex-shrink-0 shadow-box hover:shadow-hover cursor-pointer mb-4 relative transition duration-150"
						></Link>
						<Link
							to={'/shop'}
							className="bg-white w-[50%] md:w-[45%] lg:w-[25%] h-[250px] rounded-[15px] m-[1.5rem] bg-4 bg-center bg-no-repeat bg-cover flex-shrink-0 shadow-box hover:shadow-hover cursor-pointer mb-4 relative transition duration-150"
						></Link>
						<Link
							to={'/shop'}
							className="bg-white w-[50%] md:w-[45%] lg:w-[25%] h-[250px] rounded-[15px] m-[1.5rem] bg-5 bg-center bg-no-repeat bg-cover flex-shrink-0 shadow-box hover:shadow-hover cursor-pointer mb-4 relative transition duration-150"
						></Link>
						<Link
							to={'/shop'}
							className="bg-white w-[50%] md:w-[45%] lg:w-[25%] h-[250px] rounded-[15px] m-[1.5rem] bg-1 bg-center bg-no-repeat bg-cover flex-shrink-0 shadow-box hover:shadow-hover cursor-pointer mb-4 relative transition duration-150"
						></Link>
					</div>
				</div>
			</div>
		</>
	)
}
