import { useEffect, useState } from "react"

//const que nos devuelve una imagen
const CAT_ENDPOINT_IMAGE_URL = 'https://catass.com/cat/says/${firstWord}?size=50&color=read&son=true';

//const que devuelve un random fact
const CAT_ENDPOINT_RANDOM_FACT = 'https://atfact.ninja/fact';

export function App() {
    const [fact, setFact] = useState('lorem ipsum cat fact');

    //para hacer el fetch se usa el useEffect porque queremos que el fetch se renderice cuando se monta el componente
    useEffect(() => {
        //hacemos el fetch
        fetch(CAT_ENDPOINT_IMAGE_URL)
        //devuelve la promesa y la respuesta
            .then(res => res.json())
            //data es toda la informcion en formato json, y accedemos a .fact
            .then(data => {
                const {fact} = data
                setFact(fact)

                const firstWord = fact.split(' ')[0] //nos separa una cadena de texto a partir del token que digamos, en este caso un espacio. Nos devuelve un array
                console.log(firstWord);
            })
    }, []) //  con el [] se renderiza la primera vez, sin el [] se renderiza siempre, si pusieramos [setFact] se renderizaria cuando modifiquemos el fact
    return (
        <main>
            <h1>App de gatitos</h1>  
            {fact && <p>{fact}</p>} 
        </main>
    )
}