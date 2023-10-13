export default function Footer() {
	return (
		<footer className="bg-[#D9D9D9] mt-14">
			<div className="mx-auto w-full max-w-screen-xl p-4 py-6">
				<div className="sm:flex sm:items-center sm:justify-between">
					<span className="text-sm text-[#565656] sm:text-center">
						© 2023{' '}
						<a href="#" className="hover:underline">
							Company™
						</a>
					</span>
					<div className="flex space-x-2 sm:justify-center">
						<a
							href="#"
							className="transition duration-150 hover:bg-white rounded-full p-2"
						>
							<img src="/ReactShop/icons/github.svg" alt="github" />
						</a>
						<a
							href="#"
							className="transition duration-150 hover:bg-white rounded-full p-2"
						>
							<img src="/ReactShop/icons/x.svg" alt="x" />
						</a>
						<a
							href="#"
							className="transition duration-150 hover:bg-white rounded-full p-2"
						>
							<img src="/ReactShop/icons/linkedin.svg" alt="linkedin" />
						</a>
						<a
							href="#"
							className="transition duration-150 hover:bg-white rounded-full p-2"
						>
							<img src="/ReactShop/icons/youtube.svg" alt="youtube" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
