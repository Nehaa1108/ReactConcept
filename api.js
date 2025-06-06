let getListOfproduct = document.querySelector('.list-of-product')

function renderProducts(getProducts)
{
  getListOfproduct.innerHTML = getProducts.map(singleProductItems =>
    `<p>${singleProductItems.title}</p>`
 
  ).join(' ')
}

async function fetchListOfProducts()
{
    try{
        const apiResponse = await fetch('https://dummyjson.com/products',
          {
            method: 'GET' 
          }
        )

        const result = await apiResponse.json()

        console.log(result)

        if(result?.products?.length>0) renderProducts(result?.products)
    }
    catch(err){
        console.log(err)
    }
}
