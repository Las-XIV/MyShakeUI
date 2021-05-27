import React, { useRef, useLayoutEffect, useReducer } from 'react'
import { SocialIcon } from 'react-social-icons';
import { TweenMax } from 'gsap'
import Whey from '../../assets/whey.png'
import Mass from '../../assets/mass.png'
import '../../theme/style/home.css'
const Home = (props) => {
    let whey = useRef(null)
    let mass = useRef(null)
    let description = useRef(null)
    let expl = useRef(null)
    let social = useRef(null)
    useLayoutEffect(() => {
        TweenMax.from(whey, 1.6, {
            x: "40vw", opacity: 0
        }).then(() => {
            TweenMax.fromTo(whey, 1, {
                rotation: 0
            }, {
                // rotationX: -5,
                rotateX: 15,
                delay: 1,
                repeat: -1,
                // repeatDelay: 1,
                yoyo: true,
                // immediateRender:false
            })
        })
        TweenMax.from(mass, 1.6, {
            x: "40vw", opacity: 0
        }).delay(0.5)
        TweenMax.from(description,1.5,{autoAlpha: 0})
        TweenMax.from(social,2,{autoAlpha: 0})
    }, [])
    return (
        <div className='home-container'>
            <section className='home-description'>
                <div ref={el=> description = el}>
                    <div>
                        <h4>Healthy &</h4>
                    </div>
                    <div>
                        <h1>STRONGER</h1>
                    </div>
                    <div>
                        <p>The Best Source For The Best Athletes .</p>
                    </div>
                    <div>
                        <div className='explore-container'>
                            <h2 className='explore'>EXPLORE NOW</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="img-container">
                <div className="whey">
                    <img src={Whey} ref={el => whey = el} />
                    <div className="mass">
                        <img src={Mass} ref={el => mass = el} />
                    </div>
                </div>

            </section>
            <section className='home-social'>
                <div></div>
                <div className='social-icons' ref={el=> social = el}>
                    <SocialIcon url="https://www.twitter.com/" bgColor='rgba(255, 255, 255, 0.748)' />
                    <SocialIcon url="https://www.facebook.com/" bgColor='rgba(255, 255, 255, 0.748)' />
                    <SocialIcon url="https://www.gmail.com" bgColor='rgba(255, 255, 255, 0.748)' />
                </div>
            </section>
        </div>
    )
}

export default Home