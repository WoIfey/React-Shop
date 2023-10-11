import { HashRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Shop from './components/pages/Shop.tsx'
import Checkout from './components/pages/Checkout.tsx'
import Layout from './components/Layout.tsx'
import Login from './components/pages/Login.tsx'
import Register from './components/pages/Register.tsx'
import Search from './components/pages/Search.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<HashRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/search" element={<Search />} />
				</Routes>
			</Layout>
		</HashRouter>
	</React.StrictMode>
)
