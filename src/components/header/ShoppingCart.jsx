import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { appContext } from './../../context/ShoppingContext'

function ShoppingCart() {
    const { cartCount, handleProfileClick } = useContext(appContext)
    return (
        <span onClick={handleProfileClick} className='text-center cursor-pointer w-1/2 relative'>
            {cartCount ? <span className='bubble-number'>{cartCount}</span> : ""}
            <AiOutlineShoppingCart size={"100%"} />
        </span>
    )
}

export default ShoppingCart