import style from '../components/style.css'

function ButtonComponent()
{
  console.log("style",style)
  return <button className={style.custombutton}>Click</button>
}

const ProductItem = ({singleProductItem,key})=>
{
  return (
    <div key={key}>
        <p style={{color:"green"}}>{singleProductItem}</p>
        <ButtonComponent/>
        <h2>Product :- {singleProductItem}</h2>
    </div>
  )
}

export default ProductItem