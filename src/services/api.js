import axios from 'axios'

const API = axios.create({
  baseURL: 'https://fakestoreapi.com'
})

export const getProducts = () => API.get('/products')
export const getProductById = (id) => API.get(`/products/${id}`)
export const addProduct = (newProduct) => API.post('/products', newProduct)
export const updateProduct = (id, updatedProduct) =>
  API.put(`/products/${id}`, updatedProduct)
export const deleteProduct = (id) => API.delete(`/products/${id}`)