export default function Footer() {
	return (
		<footer className="bg-[#D9D9D9] text-center py-6 md:py-8 mt-16 md:mt-20">
			<p className="text-lg sm:text-2xl mb-4">© 2023 Company Name </p>
			<div className="flex justify-center">
				<a href="/" target="_blank" className="mx-2">
					<img
						src="/ReactShop/github.svg"
						alt="github"
						className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFFFFF] hover:bg-[#ededed] hover:transition-all delay-150 rounded-full cursor-pointer p-3.5"
					/>
				</a>
				<a href="/" target="_blank" className="mx-2">
					<img
						src="/ReactShop/x.svg"
						alt="x"
						className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFFFFF] hover:bg-[#ededed] hover:transition-all delay-150 rounded-full cursor-pointer p-3.5"
					/>
				</a>
				<a href="/" target="_blank" className="mx-2">
					<img
						src="/ReactShop/linkedin.svg"
						alt="linkedin"
						className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFFFFF] hover:bg-[#ededed] hover:transition-all delay-150 rounded-full cursor-pointer p-3.5"
					/>
				</a>
				<a href="/" target="_blank" className="mx-2">
					<img
						src="/ReactShop/youtube.svg"
						alt="youtube"
						className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFFFFF] hover:bg-[#ededed] hover:transition-all delay-150 rounded-full cursor-pointer p-3.5"
					/>
				</a>
			</div>
		</footer>
	)
}
