import {getAllPr , getByIdproduct , createProducts , updateProducts , deleteProduct} from '../service/index.js'

export const getAllProducts = async (req , res , next) => {
    try{
        const allProduct= await getAllPr()
        return res.send(allProduct)
    }catch(err){
        next(err)
    }
}

export const getByIdProduct = async (req , res , next) => {
    try{
        const id = req.params.id
        const allProduct= await getByIdproduct(id)
        if(allProduct){
            return res.send(allProduct)
        }
        else{
            return res.status(404).send("not found")
        }
        
    }catch(err){
        next(err)
    }
}

export const createByIdProduct = async (req , res , next) => {
    try{
        const body = req.body
        const test = await createProducts(body)
        if(test){
            return res.send("malumot qoshildi")
         }
         else{
             return res.status(404).send("not found")
         }
    }catch(err){
        next(err)
    }
}

export const updateByIdProduct = async (req , res , next) => {
    try{
        const id = req.params.id
        const body = req.body
        const test = await updateProducts(id, body)
        if(test){
            return res.send(test)
         }
         else{
             return res.status(404).send("not found")
         }
    }catch(err){
        next(err)
    }
}

export const deleteByIdProduct = async (req , res , next) => {
    try{
        const id = req.params.id
        const test = await deleteProduct(id)
        if(test){
            return res.send("malumot ochirildi")
         }
         else{
             return res.status(404).send("not found")
         }
    }catch(err){
        next(err)
    }
}