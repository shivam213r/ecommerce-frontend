import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import withUpFadeIn from '../components/withupfade'

const Home = () => {
  return (
    <div className='home'>
    <section className='hero-img'>

    </section>
    <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard stock={3} productid='hahahha' photo='https://m.media-amazon.com/images/I/51jov6ONQJL._SY300_SX300_QL70_FMwebp_.jpg' price={400000} productname='Modern Sofa'/>
        <ProductCard stock={3} productid='hahahha' photo='https://m.media-amazon.com/images/I/51jov6ONQJL._SY300_SX300_QL70_FMwebp_.jpg' price={400000} productname='Modern Sofa'/>
        <ProductCard stock={3} productid='hahahha' photo='https://m.media-amazon.com/images/I/51jov6ONQJL._SY300_SX300_QL70_FMwebp_.jpg' price={400000} productname='Modern Sofa'/>
        
      </main>
    </div>
  )
}

export default withUpFadeIn(Home)