import { HashRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Shop from './components/pages/Shop.tsx'
import Checkout from './components/pages/Checkout.tsx'
import Layout from './components/Layout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<HashRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
			</Layout>
		</HashRouter>
	</React.StrictMode>
)
