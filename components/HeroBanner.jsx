import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'

const HeroBanner = ({ heroBannner })  => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBannner?.smallText}</p>
        <h3>{heroBannner?.midText}</h3>
        <h1>{heroBannner?.largeText1}</h1>
        <img src={urlFor(heroBannner?.image)} alt='headphones' className='hero-banner-image' />
      </div>

      <div>
        <Link href={`/product/${heroBannner.product}`}>
          <button type='button'>{heroBannner.buttonText}</button>
        </Link>
        <div className='desc'>
          <h5>Description</h5>
          <p>{heroBannner.desc}</p>

        </div>
      </div>

    </div>
  )
}

export default HeroBanner