import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Harsh Mobile is a dedicated online platform for my father’s Mobile & Accessories Shop, designed to bring convenience and accessibility to our customers. The website showcases a wide range of smartphones, mobile accessories, and gadgets with detailed product information, images, and pricing.</p>
                <p>The website not only highlights the offline retail presence of Harsh Mobile but also helps expand our reach by offering customers a modern, easy-to-use online shopping experience.</p>
            </div>
        </div>
    )
}
