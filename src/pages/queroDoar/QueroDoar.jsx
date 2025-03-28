import iconeLivro from '../../assets/iconeLivro.png'
import s from './queroDoar.module.scss'
import { useState } from 'react'
import axios from 'axios'

export default function QueroDoar(){

    const [titulo,setTitulo] = useState("")
    const [categoria,setCategoria] = useState("")
    const [autor,setAutor] = useState("")
    const [image_url,setImage_url] = useState("")

    const capturaTitulo = (e) =>{
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) =>{
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }

    const capturaImg = (e) =>{
        capturaImage_url(e.target.valeu)
    }

    const envioDados = async() =>{

        const dadosParaEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }
        await axios.post("https://api-3gad.onrender.com", dadosParaEnviar)
    }

    return(
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div>
                    <img src={iconeLivro} alt="Imagem com icone de livro aberto com borda azul" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" placeholder='Título' onChange={capturaTitulo}/>
                <input type="text" placeholder='Categoria'onChance={capturaCategoria}/>
                <input type="text" placeholder='Autor'onChance={capturaAutor}/>
                <input type="text" placeholder='Link da Imagem' onChance={capturaImg}/>
                <button className={s.buttonDoar} onClick={envioDados}>Doar</button>
            </form>
        </section>
    )
}