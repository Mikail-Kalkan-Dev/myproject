import CareScale from "./CareScale"
import '../styles/PlantItem.css'

function handleClick(plant_name) {
    alert(`Vous voulez acheter 1 ${plant_name} ? Très bon choix 🌱✨`)
	// console.log('✨ Ceci est mon event :', e)
}

function PlantItem ({plant_name, plant_cover,plant_water,plant_light,plant_bestSale }) {

	return (

		<li className='lmj-plant-item' onClick={handleClick}>
			<img className='lmj-plant-item-cover' src={plant_cover} alt={`${plant_name} plant_cover`} />
			{plant_bestSale && <span>🔥</span>}
			{plant_name}
			<CareScale careType='water' scaleValue={plant_water} />
			<CareScale careType='light' scaleValue={plant_light} />
		</li>
	)
}



export default PlantItem 