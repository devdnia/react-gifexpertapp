import React from 'react'
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
import { prototype } from 'events';

export const GifGrid = ({ category }) => {


    const { data : images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{ category }</h3>

            { loading && <p className='animate__animated animate__flash'>Cargando...</p>}
            
            <div className='card-grid'>
                    {
                    images.map( img => (
                        <GifGridItem
                            key ={ img.id }
                            { ...img }
                        />
                    ))
                    }
        </div>        
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}