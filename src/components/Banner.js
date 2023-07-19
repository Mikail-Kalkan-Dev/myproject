import '../styles/Banner.css'
import Recommendation from './Recommendation'
// Cette manière d'utiliser  children   est particulièrement utile lorsqu'un composant ne connaît pas ses enfants à l'avance, 
// Par exemple pour une barre de navigation (Sidebar) ou bien pour une modale.
function Banner({ children }) {
	return (
		<div>
			<div className='lmj-banner'>{children}</div>
			<Recommendation/>
		</div>
	)
}

export default Banner