import React from 'react'
import { useAppSelector } from '../../hooks/redux-hooks'
import { TypeProduct } from '../../types/types'

export default function Home() {
    let {products} = useAppSelector(state=> state.todo)
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
