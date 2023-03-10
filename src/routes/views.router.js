import { Router } from "express";
import Products from "../dao/dbManager/product.manager.js";
import cartProducts from "../dao/dbManager/cartP.manager.js"

const router = Router()
const productsManager = new Products()
const cartPManager = new cartProducts() 

router.get('/session/register',(req,res)=>{
    res.render('register')
})

router.get('/session/login',(req,res)=>{
    res.render('login')
})

router.get('/products',async(req,res)=>{
    let products = await productsManager.getAll()
    console.log(products)
    res.render('home',{products})
})

router.get('/cart',async(req,res)=>{
    let products = await cartPManager.getAll()
    res.render('cart',{products})
})

export default router