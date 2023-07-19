import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'

function ShoppingList({ cart, updateCart }) {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<div key={plant.id}>
						<PlantItem 
						plant_name={plant.name} 
						plant_cover={plant.cover} 
						plant_light={plant.light} 
						plant_water={plant.water}
						plant_bestSale={plant.isBestSale}
						/>
						<button onClick={() => updateCart(cart + 1)}>Ajouter</button>
					</div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList