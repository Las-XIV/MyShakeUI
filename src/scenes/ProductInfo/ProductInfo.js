import react from 'react'
import {useParams} from 'react-router-dom'
import Card from '../../components/Card'
import '../../theme/style/product-info.css'
const ProductInfo = () =>{
    const params = useParams()
    console.log(params.product)
    const buy = (item) =>{
            let exist = localStorage.getItem('bucket')
            let addToItems = () => {
                let s = JSON.parse(exist)
                s.push(params.product)
                return [...new Set(s)]
            }
            let addNew = () => localStorage.setItem('bucket',JSON.stringify([params.product]))
            return exist ? localStorage.setItem('bucket', JSON.stringify(addToItems())) : addNew()
    }
    return(
        <div className='one-product-info-container'>
         <div>
        <Card />
        </div> 
        <div>
            <p>
                
            </p>
            <button className="buy-button" onClick={()=>buy()}>
                Add To Card
            </button>
        </div>  
        </div>
    )
}

export default ProductInfo