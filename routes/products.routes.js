import  express from "express"
import {validationProductMidd} from "../middlewares/index.js"
import {getAllProducts , getByIdProduct , createByIdProduct , deleteByIdProduct , updateByIdProduct} from '../controller/index.js'


export const productRouter = express.Router()


productRouter.get("/" ,getAllProducts)
productRouter.get("/:id" , getByIdProduct)
productRouter.post("/", validationProductMidd, createByIdProduct)
productRouter.put("/:id" , updateByIdProduct)
productRouter.delete("/:id" , deleteByIdProduct)
