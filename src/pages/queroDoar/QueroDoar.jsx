import iconeLivro from '../../assets/iconeLivro.png'
import s from './queroDoar.module.scss'
import { useState } from 'react'
import axios from 'axios'

export default function QueroDoar() {

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [image_url, setImage_url] = useState("")
    const [mensagemSucesso, setMensagemSucesso] = useState(false)

    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }

    const capturaImg = (e) => {
        setImage_url(e.target.value)
    }

    const envioDados = async () => {
        const dadosParaEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }

        console.log(dadosParaEnviar)
        await axios.post("https://api-3gad.onrender.com/doar", dadosParaEnviar)

        setMensagemSucesso(true)

        setTimeout(() => {
            setMensagemSucesso(false)
        }, 3000)

        setTitulo("")
        setCategoria("")
        setAutor("")
        setImage_url("")
    }

    return (
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>

            {/* Exibir mensagem de sucesso se for true */}
            {mensagemSucesso && <div className={s.mensagemSucesso}>📚 Livro cadastrado com sucesso! ✅</div>}

            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <img src={iconeLivro} alt="Imagem com icone de livro aberto com borda azul" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" placeholder='Título' value={titulo} onChange={capturaTitulo} required />
                <input type="text" placeholder='Categoria' value={categoria} onChange={capturaCategoria} required />
                <input type="text" placeholder='Autor' value={autor} onChange={capturaAutor} required />
                <input type="url" placeholder='Link da Imagem' value={image_url} onChange={capturaImg} required />
                <button className={s.buttonDoar} onClick={envioDados}>Doar</button>
            </form>
        </section>
    )
}