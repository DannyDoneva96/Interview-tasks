import React,{useState} from 'react'
import Card from './Card'
import axios from 'axios'

const Header = () => {
  const [search,setSearch]=useState("");
  const [bookData,setData]=useState([]);
  const searchBook=()=>{
    
    
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBNqg_-FVIMVUDOA9TpfA5JN_uFkMfJZ58'+'&maxResults=40')
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err)) 
    }


  // const searchBook=()=>{
      
  //         axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBNqg_-FVIMVUDOA9TpfA5JN_uFkMfJZ58'+'&maxResults=40')
  //         .then(res=>setData(res.data.items))
  //         .catch(err=>console.log(err))
  //        
  // }
  return (<>
    <div className="header">
      <div className="headline">
        <h1 className="quote">
          A room without books is like <br /> a body without soul.
        </h1>
      </div>


      <div className="search">
        <h2 className="search-h2">Find Your Book</h2>
        <div className="search-field">
          <label htmlFor="search-input"><i className="fa-solid fa-book-open-cover"></i></label>
          <input type="text" name='search-input' className="search-input" placeholder="Enter your Book" 
           value={search} onChange={e=>setSearch(e.target.value)}
           />
        
           
          <button onClick={()=>searchBook()} ><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <img src={require('../assets/Book.jpg')} alt="" />
          
      </div>
    </div>
    <div className="container">
      
      <Card book={bookData}/>
    </div>
  </>
  )
}

export default Header
