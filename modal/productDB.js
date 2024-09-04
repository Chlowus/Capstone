import { pool } from "../config/config.js";
const getProductsDb = async ()=>{
    let [data] = await pool.query('SELECT * FROM bnpagztgnve4cjy4chm5.products')
    return data
}
const getProductDb = async (product_ID) =>{
    let [[data]] = await pool.query('SELECT * FROM bnpagztgnve4cjy4chm5.products WHERE product_ID = ?',[product_ID])
    return data
}
const insertProductDb = async(product_name,product_image,product_description,product_ingredients,product_price,product_category) =>{
    await pool.query(`
        INSERT INTO bnpagztgnve4cjy4chm5.products
        (product_name,product_image,product_description,product_ingredients,product_price,product_category)
        VALUES (?,?,?,?,?,?)
        `,[product_name,product_image,product_description,product_ingredients,product_price,product_category])
}
const deleteProductDb = async(product_ID) =>{
    await pool.query('DELETE FROM bnpagztgnve4cjy4chm5.products WHERE product_ID = ?', [product_ID])
}
const updateProductDB = async (product_ID,product_name,product_image,product_description, product_ingredients,product_price,product_category)=>{
    await pool.query('UPDATE bnpagztgnve4cjy4chm5.products SET product_name = ?, product_image = ?, product_description = ?, product_ingredients = ?,product_price = ?,product_category = ?   WHERE product_ID = ?',[product_ID,product_name,product_image,product_description, product_ingredients,product_price,product_category]
    )
}
export {getProductsDb, getProductDb, insertProductDb, deleteProductDb, updateProductDB,}