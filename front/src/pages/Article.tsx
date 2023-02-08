import * as React from 'react'
import { useEffect, useState } from 'react';
import image from "../assets/img/paysage2.png"
import "../assets/css/Article.css"
import { PlusSquareIcon } from '@chakra-ui/icons'
import { useParams } from 'react-router-dom'
import api from '../utils/axios'

type Article = {
    name: string,
    description: string,
    price: number
}

export const Article = () => {    
    const { id } = useParams();

    const [currentArticle, setCurrentArticle] = useState<Article>({name: "", description: "", price: 0});

    useEffect(() => {
        console.log({id})
        api.get(`/articles/${id}`)
        .then(res => setCurrentArticle(res.data))
    }, [])

    return (
        <body>
        <div id='containerArticle'>
            <div id='photo'>
                <img id='img'src={image}/>
            </div>
            <div id='card'>
                <p id='title'>{currentArticle.name}</p>
                <p id='prix'>{currentArticle.price}€</p>
                <p id='description'>{currentArticle.description}</p>
                <button id='cartAdd' ><PlusSquareIcon h={10} w={10}/></button>
            </div>
        </div>
        </body>
    )
}