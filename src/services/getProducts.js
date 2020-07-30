import { API_URL } from './settings'

const fromApiResponseToProducts = data => {
  if (Array.isArray(data)) {
    return data
  }
  return []
}

const getProducts = ({
  start = 0,
  limit = 11,
  keyword = "frutas"
}) => fetch(`${API_URL}/products?product_type=${keyword}&_start=${start}&_limit=${limit}`)
  .then(res => res.json())
  .then(fromApiResponseToProducts)

export default getProducts
