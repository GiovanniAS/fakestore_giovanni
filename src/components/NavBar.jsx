import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import ProductItem from './ProductItem';

const NavBar = () => {
  //setear los hooks useState
  const [ products, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

  //función para traer los datos de la API
  const URL = 'https://fakestoreapi.com/products'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    //console.log(data)
    setUsers(data)
  }   
   //función de búsqueda
  const searcher = (e) => {
      setSearch(e.target.value)   
  }
   //metodo de filtrado 1 
   /*  let results = []
   if(!search)
   {
       results = products
   }else{
        results = products.filter( (dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
   } */

   //metodo de filtrado 2   
   const results = !search ? products : products.filter((dato)=> dato.title.toLowerCase().includes(search.toLocaleLowerCase()))
  
   useEffect( ()=> {
    showData()
  }, [])
  
  //renderizamos la vista
  return (
    <div>
      <nav className="h-20 w-full bg-black p-4 flex justify-between text-white items-center">
        <Link to="/">
          <span>FakeStore</span>
        </Link>
        <Link to="/carrito">
          <span>Carrito</span>
        </Link>
        <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control text-black'/>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {results.map((product) => (
            <ProductItem key={product.id} product={product} />
            
          ))}
        </div>
    </div>


  )
}
export default NavBar;