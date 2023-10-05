import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Shop from './components/pages/Shop.tsx'
import Checkout from './components/pages/Checkout.tsx'
import Layout from './components/Layout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<Layout>
				<Routes>
					<Route path="/ReactShop" element={<App />} />
					<Route path="/ReactShop/shop" element={<Shop />} />
					<Route path="/ReactShop/checkout" element={<Checkout />} />
				</Routes>
			</Layout>
		</Router>
	</React.StrictMode>
)
