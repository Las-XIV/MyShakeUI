import React,{ useRef, useLayoutEffect } from 'react'
import { TweenMax } from 'gsap'
import Whey from '../../assets/whey.png'
import Mass from '../../assets/mass.png'
import '../../theme/style/home.css'
const Home = (props) =>{
    let whey = useRef(null)
    let mass = useRef(null)
    useLayoutEffect(()=>{
        TweenMax.from(whey,1.6,{
            x: "40vw", opacity: 0
          }).then(()=>{
              TweenMax.fromTo(whey,1,{
                  rotation: 0
              },{
                // rotationX: -5,
                rotateX: 15,
                delay: 1,
                repeat: -1,
                // repeatDelay: 1,
                yoyo: true,
                // immediateRender:false
              })
          })
        TweenMax.from(mass,1.6,{
            x: "40vw", opacity: 0
          }).delay(0.5)
    },[])
    return(
        <div className='home-container'>
            <section className='home-description'>
                <div>
                    <div>
                        <h4>Healthy &</h4>
                    </div>
                    <div>
                        <h1>STRONGER</h1>
                    </div>
                    <div>
                        <p>lorem lorem lorem lorem lorem</p>
                    </div>
                    <div>
                        <span>EXPLORE NOW</span>
                        <span>Discount *</span>
                    </div>
                </div>
            </section>
            <section className="img-container">
                <div className="whey">
                <img src={Whey} ref={el=> whey = el}/>
                <div className="mass">
                <img src={Mass} ref={el=> mass = el}/>
                </div>
                </div>

            </section>
            <section>
                
            </section>
        </div>
    )
}

export default Home