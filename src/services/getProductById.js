import { API_URL } from './settings'

const fromApiResponseToProducts = data => {
  if (Array.isArray(data)) {
    return data
  }
  return []
}

const getProductById = id => {
  const apiURL = `${API_URL}/products?id=${id}`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToProducts)
}

export default getProductById
