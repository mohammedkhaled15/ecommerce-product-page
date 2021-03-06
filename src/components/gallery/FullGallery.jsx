import { ReactComponent as Next } from "./../../assets/images/icon-next.svg"
import { ReactComponent as Prev } from "./../../assets/images/icon-previous.svg"
import { ReactComponent as Close } from "./../../assets/images/icon-close.svg"
import ProductShow from '../product-page/ProductShow'
import { useEffect } from "react"

function FullGallery({ product, index, setHeroImg, setimgIndic, imgIndic, heroImg, imgRefs, handleClose, handleNext, handlePrev }) {

    return (

        <div onClick={handleClose} className='fixed w-screen h-screen flex flex-col justify-center items-center gap-8 bg-blackTransparent top-0 left-0 '>
            <ProductShow heroClick={false} product={product} index={index} heroImg={heroImg} setHeroImg={setHeroImg} setimgIndic={setimgIndic} imgIndic={imgIndic} imgRefs={imgRefs} />
            <span onClick={handleClose} className='close-btn'><Close color='#fff' /></span>
            <span onClick={handlePrev} className={`nav-btn left-[27%] -translate-x-full`}><Prev /></span>
            <span onClick={handleNext} className='nav-btn right-[27%] translate-x-full'><Next /></span>
        </div>

    )

}

export default FullGallery