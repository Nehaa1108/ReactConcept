import ProductItem from "./components/ProductItem"

const dummyProductData = ['Product1','Product2','Product3']




const ProductList=(
  // props
{name,city}
)=>

  // props is object


{


  // const {name,city} =props

  return(
    <div>
        <h3>Ecommerce Project</h3>
        {/* <ProductItem/> */}

        <ul>
          {
            dummyProductData.map((item,index) =>
              <li key={index}>{item}</li>
            )
          }
        </ul>


        {/* props */}
        <h3><span>{name} & {city}</span></h3>
    </div>
  )
}

export default ProductList
