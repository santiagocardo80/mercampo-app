import { useState, useContext, useCallback } from 'react'

import CartContext from '../context/cartContext'

const useCart = () => {
  const { cart, setCart } = useContext(CartContext)
  const [loading, setLoading] = useState(false)

  const addProduct = useCallback(({ id, quantity, total, ...rest }) => {
    setLoading(true)
    setCart(prevProducts => ({
      ...prevProducts,
      [id]: {
        id,
        quantity: prevProducts[id] ? prevProducts[id].quantity + quantity : quantity,
        total: prevProducts[id] ? prevProducts[id].total + total : total,
        ...rest
      }
    }))
    setLoading(false)
  }, [setCart])

  const changeProductQuantity = useCallback(({ id, quantity, price, total, sum = false, ...rest }) => {
    setLoading(true)
    setCart(prevProducts => ({
      ...prevProducts,
      [id]: {
        id,
        price,
        quantity: sum
          ? quantity + 1
          : (quantity > 1) ? quantity - 1 : 1,
        total: sum
          ? total + price
          : (quantity > 1) ? total - price : total,
        ...rest
      }
    }))
    setLoading(false)
  }, [setCart])

  const removeProduct = useCallback(id => {
    setLoading(true)
    setCart(({ [id]: _, ...restProducts }) => restProducts)
    setLoading(false)
  }, [setCart])

  return {
    cart,
    addProduct,
    removeProduct,
    changeProductQuantity,
    loading
  }
}

export default useCart
