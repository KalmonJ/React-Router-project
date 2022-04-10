import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3004'
})

export const busca = async(url, setDado) => {
  const resposta = await api.get(url) // recebendo dado da url
  setDado(resposta.data)
}