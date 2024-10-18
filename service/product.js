import {readUsersDB , writeUsersDB} from './db.js'
import { v4 } from "uuid";

export const getAllPr = async () => {
    const Allproducts = await readUsersDB()
    return Allproducts
}

export const getByIdproduct = async (id) => {
    const Allproducts = await readUsersDB()
    const product = Allproducts.find(item => item.id === id)
    if(product){
        return product
    }
    return false
}


export const createProducts = async (data) => {
    const id = v4();
    const Allproducts = await readUsersDB()
    const data1 = {id:id , ...data}
    Allproducts.push(data1)
    writeUsersDB(Allproducts)
    return true
}


export const updateProducts = async (id , data) => {
    const Allproducts = await readUsersDB()
    const ProductIndex= Allproducts.findIndex(item => item.id === id)
    if(ProductIndex !== -1){
        Allproducts[ProductIndex] = {...Allproducts[ProductIndex],...data}
        writeUsersDB(Allproducts)
        return Allproducts
    }
    else{
        return false
    }

}  

export const deleteProduct = async (id) => {
    const Allproducts = await readUsersDB()
    const newProduct = Allproducts.filter(item => item.id !== id)
    if(newProduct.length !== Allproducts.length){
        await writeUsersDB(newProduct)
        return true
    }
    else{
        return false
    }
} 