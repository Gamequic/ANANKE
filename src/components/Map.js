import React from 'react'

function Map() {
    
    return (
        <div className='flex justify-center items-center'>
            <img
                src={process.env.PUBLIC_URL + '/photos/decorations/googlemaps.jpg'}
                alt='Map'
            />
        </div>
    )
}

export default Map;
