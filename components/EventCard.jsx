import React from 'react'

const EventCard = ({ product, onClickImage }) => {
    return (
        <div className='h-28 relative rounded-md overflow-hidden cursor-pointer' onClick={() => onClickImage(product)}>
            <div className='absolute bg-black/50 top-0 left-0 w-full h-full'></div>
            <img src={product?.toShow} alt="" className='w-full h-full' />
            <div className='absolute text-white bottom-2 left-2 text-lg font-semibold'>{product?.title}</div>
        </div>
    )
}

export default EventCard