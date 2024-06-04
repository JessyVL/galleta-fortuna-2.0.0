// Mandamos la props del componente Phrase (quoteRandom) en llaves dado que todas las props se guardan en un objeto. Se necesita desestructurar ese objeto.
const Phrase = ({quoteRandom}) => {

// console.log(quoteRandom);

  return (
    <p className="app_phrase">{quoteRandom.phrase}</p>
  )
}

export default Phrase