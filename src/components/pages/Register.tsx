export default function Register() {
	return (
		<div className="flex justify-center items-center">
			<div className="bg-[#eaeaea] p-8 rounded-lg max-w-md w-full my-48">
				<h2 className="text-2xl font-bold mb-4">Register</h2>
				<form>
					<div className="mb-4">
						<p className="text-[#4b4b4b] font-bold mb-2">Email</p>
						<input
							type="email"
							className="w-full px-3 py-2 border-none outline-none rounded-xl"
							required
						/>
					</div>
					<div className="mb-6">
						<p className="text-[#4b4b4b] font-bold mb-2">Password</p>
						<input
							type="password"
							className="w-full px-3 py-2 border-none outline-none rounded-xl"
							required
						/>
					</div>
					<button
						type="submit"
						className="cursor-default px-2 py-1 mr-3 bg-[#1A6BE5] hover:bg-[#1A57B4] text-white rounded-md transition duration-150"
					>
						Register
					</button>
				</form>
			</div>
		</div>
	)
}
