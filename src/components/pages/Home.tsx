import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { TypeProduct } from '../../types/types'
import { removeProduct } from '../../redux_components/reducers/todo'

export default function Home() {
    let {products} = useAppSelector(state=> state.todo)
    let dispatch = useAppDispatch()
  return (
    <section id='home'>
        <div className="conteiner">
{
    products.length > 0 ? (
        products.map((el: TypeProduct, id:number)=>(
            <div className='product'>
                <img src={el.img} alt="image product" />
                <h2>{el.title}</h2>
                <p>${el.price}</p>
                <button onClick={()=>dispatch(removeProduct(el.id))}>Remove</button>
            </div>
        ))
    ): (
        <center><h2>Загрузка..</h2></center>
    )
}
        </div>
    </section>
  )
}
