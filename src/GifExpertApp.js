import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2>GifExpertApp</h2>
        

            <ol>
                {
                    categories.map( category  => (
                        <return <li key={ category } category={ category } ></li>
                        />
                    ))
                }
            </ol>

        </>
    )
}
