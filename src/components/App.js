//? STATE
import { useState } from 'react'

//? Import
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import QuestionForm from './QuestionForm'
import Footer from './Footer'



//? STYLES
import '../styles/Layout.css'



function App() {

	//? PROPS
	const [cart, updateCart] = useState([0])


	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<QuestionForm />
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App
