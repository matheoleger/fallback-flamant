import * as React from 'react'
import { useState, useEffect } from "react"
import image from "../assets/img/paysage2.png"
import aggrandissement from "../assets/img/aggrandissement.png"
import "../assets/css/Home.css"
import { Item } from '../components/Item'
import { useNavigate } from 'react-router-dom'
import api from "../utils/axios"

type Article = {
    name: string,
    description: string,
    price: number,
    id_article: number,
}

export const Home = () => {
    let product : Item[] = []
    let title : string[] = []
    let price : number[] = []
    let desc : string[] = []

    // for (let i = 0; i < 25; i++) {
    //     const table = new Item("Table",(i*2)+125,"Il y a 4 pieds",i);
    //     let lenght = product.push(table)
    //      lenght = title.push(table.name)
    //      lenght = price.push(table.price)
    //      lenght = desc.push(table.desc)
    // }

    const [products, setProducts] = useState<Article[]>([]);

    useEffect(() => {
        api.get(`/articles`)
        .then(res => setProducts(res.data))
    }, [])
    
    const navigate = useNavigate();

    const navigateTo = (id ?: number) => {
    String(id)
      navigate('/article/'+id);
    }

    return (
        <body>
            
            <div id='container'>
            {
                products.map((value, index) => (
                    <div id='box' key={value.id_article}>
                        <img src={image}/>
                        <button id='article' onClick={() => navigateTo(value.id_article)}>
                            <img id='aggrandissement' src={aggrandissement}/>
                        </button>
                        <p id='name'>{value.name}</p>
                        <p id='price'>{value.price}€</p>
                        <p id='desc'>{value.description}</p>
                    </div>
                ))
            }
        </div>
    </body>
        
    )
}
