import React from 'react'
import { ProductCard } from 'react-ui-cards'
import '../../theme/style/cardStyle/card.css'
const Card = (props) =>{
    return(
     <>
   <ProductCard
          photos={[
            'https://www.proteinescenter.com/3610-large_default/pure-whey-isolate-native-eric-favre.jpg',
            'https://media.gettyimages.com/photos/closeup-of-protein-in-scoop-picture-id1201631726?s=2048x2048',
            'https://media.gettyimages.com/photos/protein-powder-picture-id1284256736?s=2048x2048'
          ]}
          price='$65'
          productName='WHEY PROTEIN'
          description='Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.'
          buttonText='Add to cart'
          rating={3}
          url='https://github.com/nukeop'
        />
     </>
    )
}

export default Card