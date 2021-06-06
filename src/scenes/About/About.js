import React from 'react'
import GoogleMapReact from 'google-map-react';
import ON from '../../assets/ON.png'
import Scitec from '../../assets/Scitec.png'
import Dymatize from '../../assets/Dymatize.png'
import Universal from '../../assets/Universal.png'
import '../../theme/style/find.css'
import AssistantIcon from '@material-ui/icons/Assistant';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const About = (props) => {
    const defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    return (
        <div className="find">
            <div className='find-us'>
            <center><div style={{ height: '70vh', width: '55vw' }}>
        <GoogleMapReact
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={<AssistantIcon style={{color: 'rgba(255, 196, 0, 0.843)', fontSize: '30px'}}/>}
          />
        </GoogleMapReact>
        </div></center>
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

export default About