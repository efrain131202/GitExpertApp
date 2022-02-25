import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //const [images, setImages] = useState([]);

    const { loading }= useFetchGifs();

    //useEffect(  () => {
    //    getGifs( category )
    //   .then( setImages );
    //}, [ category ])


    return (
        <>
        <h3> { category} </h3>

        { loading ? 'cargando...' : 'Data cargada'}
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
