import getRandomFromArr from "../utils/getRandomFromArr"
import phrases from '../utils/phrases.json'
import arrPhotos from '../utils/photos.json' 

const Button = ({setQuoteRandom,setPhotoRandom}) => {

    const handleChangePhrase = () => {
        setQuoteRandom(getRandomFromArr(phrases)) // damos el valor al setQuoteRandom sobre el aleatorio que realiza el js aplicado a phrases
        setPhotoRandom(getRandomFromArr(arrPhotos))
    }


  return (
    <button className="app_btn"  onClick={handleChangePhrase}>Buscar otra galleta! </button>
  )
}

export default Button