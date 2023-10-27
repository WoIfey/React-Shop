import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	/* 	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		const res = await fetch('http://10.111.3.78:3001/api/users', {
			method: 'post',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({ email, password }),
		})
		const data = await res.json()
		console.log(data)
		localStorage.setItem('token', data.token)
	} */

	return (
		<div className="flex flex-col justify-center items-center h-[72vh] pt-10">
			<div className="bg-[#eaeaea] p-8 rounded-lg max-w-md w-full">
				<div className="flex">
					<img
						src="/ReactShop/icons/newuser.svg"
						alt="user"
						className="w-6 h-6 my-1"
					/>
					<h2 className="text-2xl font-bold mb-3 ml-2">Register</h2>
				</div>
				<form /* onSubmit={handleSubmit} */>
					<div className="mb-4">
						<label htmlFor="email" className="text-[#4b4b4b] font-bold mb-2">
							Email
						</label>
						<input
							type="email"
							onChange={e => setEmail(e.target.value)}
							className="w-full px-3 py-2 outline-none rounded-md border-2 border-[#A5A5A5]"
							required
						/>
					</div>
					<div className="mb-5">
						<label htmlFor="password" className="text-[#4b4b4b] font-bold mb-2">
							Password
						</label>
						<input
							type="password"
							onChange={e => setPassword(e.target.value)}
							className="w-full px-3 py-2 outline-none rounded-md border-2 border-[#A5A5A5]"
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full cursor-default p-2 mr-3 mb-1 bg-[#1A6BE5] hover:bg-[#1A57B4] text-white rounded-md transition duration-150"
					>
						Register
					</button>
				</form>
				<Link to={'/login'} className="hover:underline">
					Already have an account? Login here.
				</Link>
			</div>
			<div className="px-8 py-4 rounded-lg max-w-md">
				<p className="pt-2"></p>
			</div>
		</div>
	)
}
