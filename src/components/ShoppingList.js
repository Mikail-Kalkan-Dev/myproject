import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'

function ShoppingList() {
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
					<PlantItem 
					plant_id={plant.id} 
					plant_name={plant.name} 
					plant_cover={plant.cover} 
					plant_light={plant.light} 
					plant_water={plant.water}
					plant_bestSale={plant.isBestSale}
					/>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList