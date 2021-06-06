import react from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../components/Card'
import ON from '../../assets/ON.png'
import Scitec from '../../assets/Scitec.png'
import Dymatize from '../../assets/Dymatize.png'
import Universal from '../../assets/Universal.png'
import '../../theme/style/product-info.css'
const ProductInfo = () => {
    const params = useParams()
    console.log(params.product)
    const buy = (item) => {
        let exist = localStorage.getItem('bucket')
        let addToItems = () => {
            let s = JSON.parse(exist)
            s.push(params.product)
            return [...new Set(s)]
        }
        let addNew = () => localStorage.setItem('bucket', JSON.stringify([params.product]))
        return exist ? localStorage.setItem('bucket', JSON.stringify(addToItems())) : addNew()
    }
    return (
        <div className='one-product-info-container'>
            <div>
                <Card />
            </div>
            <div>
                <h2>About Protein</h2>
                <p className='product-informations'>
                    Protein powder is a popular nutritional supplement. Protein is an essential macronutrient that helps build muscle, repair tissue,
                     and make enzymes and hormones. Using protein powder may also aid weight loss and help people tone their muscles
            </p>
                <center><button className="buy-button" onClick={() => buy()}>
                    Add To Card
            </button></center>
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

export default ProductInfo