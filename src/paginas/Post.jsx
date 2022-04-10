import React, { useEffect, useState } from 'react'
import { busca } from '../api/api'
import '../assets/css/post.css'
import { useParams } from 'react-router-dom'

export const Post = () =>{
  const {id} = useParams()
  const [postagem, setPostagem] = useState({})


  useEffect(() => {
    busca(`/posts/${id}`, setPostagem)
  }, [id])

  return(
    <main className='container flex flex--centro'>
      <article className='cartao post'>
        <h2 className='cartao__titulo'>{postagem.title}</h2>
        <p className='cartao__texto'>{postagem.body}</p>
      </article>
    </main>
  )
}