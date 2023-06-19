import { useEffect, useState } from "react"
import './App.css'

//const que nos devuelve una imagen
const CAT_ENDPOINT_IMAGE_URL = 'https://catass.com/cat/says/${firstWord}?size=50&color=read&son=true';

//const que devuelve un random fact
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

//cat image url prefix
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
    const [fact, setFact] = useState('');
    const [imageUrl, setImageUrl] = useState();

    //useEffect para recibir el randomfact
    //para hacer el fetch se usa el useEffect porque queremos que el fetch se renderice cuando se monta el componente
    useEffect(() => {
        //hacemos el fetch
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            //devuelve la promesa y la respuesta
            .then(res => res.json())
            //data es toda la informcion en formato json, y accedemos a .fact
            .then(data => {
                const { fact } = data
                setFact(fact)


            })
    }, []) //  con el [] se renderiza la primera vez, sin el [] se renderiza siempre, si pusieramos [setFact] se renderizaria cuando modifiquemos el fact


    //useEffect para recuperar la imagen con las tres primeras palabras del fact
    useEffect(() => {
        if (!fact) return
    
        const threeFirstWords = fact.split(' ', 3).join(' ')
    
        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(response => {
            const { url } = response
            setImageUrl(url)
          })
      }, [fact])

    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${ CAT_PREFIX_IMAGE_URL }${ imageUrl }`} alt={`Image extracted using the first three words of ${ fact }`} />}
        </main>
    )
}