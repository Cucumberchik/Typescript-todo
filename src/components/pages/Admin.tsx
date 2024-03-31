import { useState } from "react"
import { TypeProduct } from "../../types/types"
import { useAppDispatch } from "../../hooks/redux-hooks"
import { addProduct } from "../../redux_components/reducers/todo"


export default function Admin() {
    let [product, setProduct] = useState<TypeProduct>({title: "", price: "", img: ""})
    let dispatch = useAppDispatch()
    function handleProduct(){
        if(product.img && product.img && product.title){
            dispatch(addProduct(product))
            setProduct({title: "", price: "", img: ""})
        }else{
            alert("Где-то пусто")
        }
    }
    let price = product.price.replace(/[a-z]/gi, "")
  return (
    <section id='admin'>
        <div className="conteiner">
            <input onChange={(e)=>setProduct({...product, [e.target.name]: e.target.value})} 
            value={product.title} type="text" name="title" placeholder='Title'/>

            <input onChange={(e)=>setProduct({...product, [e.target.name]: e.target.value})} 
            value={price} type="text" name="price" placeholder='Price'/>

            <input onChange={(e)=>setProduct({...product, [e.target.name]: e.target.value})} 
            value={product.img} type="text" name="img" placeholder='URL image'/>
            
            <button onClick={handleProduct}>Add</button>
        </div>
    </section>
  )
}
