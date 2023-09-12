import React from 'react';
import list from '../data';
import '../css/home.css';
import Cards from './Card';


const Home = ({handleClick}) => {
  return (
    <section>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
                
            ))  
        }
    
    </section>
  )
}

export default Home