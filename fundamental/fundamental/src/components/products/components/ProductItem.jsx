

function ButtonComponent()
{
  return <button>Click</button>
}

const ProductItem = ({singleProductItem,key})=>
{
  return (
    <div key={key}>
        <p>{singleProductItem}</p>
        <ButtonComponent/>
        <h2>Product :- {singleProductItem}</h2>
    </div>
  )
}

export default ProductItem