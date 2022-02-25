import React from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(  () => {
        getGifs();
    }, [])

    const getGifs = async() => {

        const url = 'https//api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limi=106api_key=A8xMXqziI'
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downssized_medium.url
            }
        })

        console.log(gifs);
    }

    getGifs();

    return (
        <>
        <h3> { category} </h3>
        <div className ="card-grid">
            <h3> { category } </h3>
            <ol>
                {
                    images.map( img => (
                        <GifGridItem
                        key={ img.id }
                        {...img}
                        />

                    ))
                }
            </ol>
            
        </div>
        </>
    )

        
        


    
}
