import { useEffect, useState } from 'react'

//prefijo de la url para la imagen
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // para recuperar la imagen cada vez que tenemos un fact nuevo
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ') //recogemos las tres primeras palabras separadas por un " "

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact]) //cuando el fact se actualiza

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}