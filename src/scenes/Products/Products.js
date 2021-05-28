import React from 'react'
import Carousel from "react-multi-carousel";
import Card from '../../components/Card'
import ON from '../../assets/ON.png'
import Scitec from '../../assets/Scitec.png'
import Dymatize from '../../assets/Dymatize.png'
import Universal from '../../assets/Universal.png'
import "react-multi-carousel/lib/styles.css";
import '../../theme/style/cardStyle/carousel.css'
import '../../theme/style/product.css'
const Products = (props) => {
    return (
        <div className='product-container'>
            <div className='cards-container'>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={7000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Carousel>
            </div>
            <div className='partners'>
                 <h1>OUR BRANDS</h1>
                <div className='products-partners'>
                    <div>
                        <img src={ON} />
                    </div>
                    <div>
                        <img src={Scitec} />
                    </div>
                    <div>
                        <img src={Dymatize} />
                    </div>
                    <div>
                        <img src={Universal} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const responsive = {
    desktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

export default Products