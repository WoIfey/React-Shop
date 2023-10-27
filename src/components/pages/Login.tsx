import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
	const [user, setUser] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [msg, setMsg] = useState('')

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		const res = await fetch('http://10.111.3.78:3001/api/login', {
			method: 'post',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({ email, password }),
		})
		const data = await res.json()
		setUser(data.user[0].name)
		setMsg(data.msg + ' as')
		localStorage.setItem('token', data.token)
	}

	/* 	useEffect(() => {
		fetch('http://10.111.3.78:3001/api/login', {
			method: 'post',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({ email: 'bob@example.com', password: '85fe8a52' }),
		})
			.then(res => {
				return res.json()
			})
			.then(data => {
				console.log(data)
				setUser(data.user[0].name)
				setMsg(data.msg)
			})
	}, []) */

	return (
		<div className="flex flex-col justify-center items-center h-[72vh] pt-10">
			<div className="bg-[#eaeaea] p-8 rounded-lg max-w-md w-full">
				<div className="flex">
					<img src="/ReactShop/icons/user.svg" alt="user" className="w-6 h-6 my-1" />
					<h2 className="text-2xl font-bold mb-3 ml-2">Sign In</h2>
				</div>
				<form onSubmit={handleSubmit}>
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
						Sign In
					</button>
				</form>
				<Link to={'/register'} className="hover:underline">
					Don't have an account? Register here.
				</Link>
			</div>
			<div className="px-8 py-4 rounded-lg max-w-md">
				<p className="pt-2">
					{msg} {user}
				</p>
			</div>
		</div>
	)
}
