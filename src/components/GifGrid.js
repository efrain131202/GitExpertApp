import React from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(  () => {
        getGifs( category )
        .then( setImages );
    }, [ category ])


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
