import Banner from './Banner'
import Cart from './Cart'
import Recommendation from './Recommendation'
import ShoppingList from './ShoppingList'

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
				<Recommendation/>
			</Banner>
			<Cart />
			<ShoppingList />
		</div>
	)
}

export default App
