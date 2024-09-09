import { connection as db } from '../config/index.js'

const fetchProducts = (req, res) => {
        try {
            const strQry = `
            SELECT *
            FROM products;
            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to fetch all products')
                res.json({
                    status: res.statusCode,
                    results
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
const recentProducts = (req, res) => {
        try {
            const strQry = `
            SELECT *
            FROM products
            ORDER BY product_ID DESC
            LIMIT 5;
            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to retrieve recent products')
                res.json({
                    status: res.statusCode,
                    results
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
const fetchProduct = (req, res) => {
        try {
            const strQry = `
            SELECT *
            FROM products
            WHERE product_ID = ${req.params.id};
            `
            db.query(strQry, (err, result) => {
                if (err) throw new Error('Unable to retrieve a product')
                res.json({
                    status: res.statusCode,
                    result: result[0]
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
const addProduct = (req, res) => {
        try {
            const strQry = `
            INSERT INTO products
            SET ?
            `
            db.query(strQry, [req.body], (err) => {
                if (err) throw new Error('Unable to add a new product')
                res.json({
                    status: res.statusCode,
                    msg: 'Product was added'
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
         }
    }
const updateProduct = (req, res) => {
        try {
            const strQry = `
            UPDATE products
            SET ?
            WHERE product_ID = ${req.params.id};
            `
            db.query(strQry, [req.body], (err) => {
                if (err) throw new Error('Unable to update a product')
                res.json({
                    status: res.statusCode,
                    msg: 'Product was updated.'
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }
const deleteProduct = (req, res) => {
        try {
            const strQry = `
            DELETE FROM products
            WHERE product_ID = ${req.params.id};
            `
            db.query(strQry, (err) => {
                if (err) throw new Error('Unable to delete a product')
                res.json({
                    status: res.statusCode,
                    msg: 'A product was removed.'
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

export {
    fetchProducts,
    recentProducts,
    fetchProduct,
    addProduct,
    updateProduct,
    deleteProduct
}









