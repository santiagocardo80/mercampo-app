import { API_URL } from './settings'

const fromApiResponseToProducts = data => {
  if (Array.isArray(data)) {
    return data
  }
  return []
}

const searchProducts = keyword => {
  const apiURL = `${API_URL}/products?name_contains=${keyword}`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToProducts)
}

export default searchProducts
