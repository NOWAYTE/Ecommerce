import React from 'react'
import {Product, Footer, HeroBanner, FooterBanner} from '../components'
import { client } from '@/lib/client'

const Home = ({ products, bannerData }) => {
  return (
    <>
    <HeroBanner heroBannner={bannerData[0]}/>
    {console.log(bannerData[0])}

    <div className='products-heading'>
      <h2>Best selling prodct</h2>
      <p>Speakers of many variations</p>

    </div>

    <div className='products-container'>
      {products?.map(
        (product) => <Product key={product._id} product={product} />
      )}
    </div>

    <FooterBanner footerBanner={bannerData[0]} />

    <Footer />

    </>
  ) 
}

export default Home


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery)


  return {
    props: { products, bannerData }
  }
}