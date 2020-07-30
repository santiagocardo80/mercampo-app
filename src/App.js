import React from 'react'
import { Router } from '@reach/router'

import { CartContextProvider } from './context/cartContext'
import { ProductsContextProvider } from './context/productsContext'
import Home from './pages/Home'
import Products from './pages/Products'
import Details from './pages/Details'
import SearchResults from './pages/SearchResults'
import Header from './components/Header'
import Footer from './components/Footer'
import ShoppingList from './components/ShoppingList'

const App = () => {
  return (
    <>
      <CartContextProvider>
        <Header />
        <ProductsContextProvider>
          <Router>
            <Home path="/" />
            <Products path="/verduras" title="Verduras 🥬" />
            <Products path="/frutas" title="Frutas 🥝" />
            <Details path="/verduras/:id" />
            <Details path="/frutas/:id" />
            <ShoppingList path="/lista" />
            <SearchResults path="/busqueda/:keyword" />
          </Router>
        </ProductsContextProvider>
      </CartContextProvider>
      <Footer />
    </>
  )
}

export default App
