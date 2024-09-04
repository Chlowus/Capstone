import {getProductsDb, getProductDb, insertProductDb, deleteProductDb, updateProductDB,} from '../modal/productDB.js'
// import { getUserDb } from '../model/usersDb.js'
 const getProducts = async(req,res)=>{
    res.json(await getProductsDb())
}
const getProduct = async(req,res)=>{
    res.json(await getProductDb(req.params.product_ID))
}
const insertProduct = async(req,res)=>{
    let {product_name,product_image,product_description,product_ingredients,product_price,product_category} =req.body
    await insertProductDb(product_name,product_image,product_description,product_ingredients,product_price,product_category)
    res.send('Product was inserted successfully')
}
const deleteProduct = async(req,res)=>{
    await deleteProductDb(req.params.product_ID)
    res.send('Product has been deleted')
}
const updateProduct = async(req,res)=>{
    let {product_name,product_image,product_description,product_ingredients,product_price,product_category} = req.body
    let product = await getProductDb(req.params.product_ID)
    product_name ? product_name=product_name: product_name = product.product_name
    product_image ? product_image=product_image: product_image = product.product_image
    product_description ? product_description=product_description: product_description = product.product_description
    product_ingredients ? product_ingredients=product_ingredients: product_ingredients = product.product_ingredients
    product_price ? product_price=product_price: product_price = product.product_price
    product_category ? product_category=product_category: product_category = product.product_category
    
    await updateProductDB(req.params.product_ID,product_name,product_image,product_description, product_ingredients,product_price,product_category)
    res.send('Update Product was successful')
}
const addToCart = async (req,res)=>{
    console.log(req.body);
    let {product_ID} = await getUserDb(req.body.user)
    console.log(product_ID);
    // await addToCartDB(req.body.id,id)
    res.json({message:"You've added an item to cart"})
}
export {getProducts, getProduct, insertProduct, deleteProduct, updateProduct,addToCart}