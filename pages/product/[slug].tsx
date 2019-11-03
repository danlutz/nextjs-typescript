import React from 'react'
import { useRouter } from 'next/router'
// import { NextPageContext } from 'next'

import { Product } from '../../typings/Product'

const product = {
  name: 'Awesome product',
  slug: '',
  priceEuroCents: 40000,
}

const ProductPage = (/*{ product }: Props*/) => {
  const { name, priceEuroCents } = product

  // Line below is not needed when product is fetched in getInitialProps
  const {
    query: { slug },
  } = useRouter()

  return (
    <div>
      <h1>{name}</h1>
      <span>Slug: {slug}</span>
      <br />
      <span>Price: {priceEuroCents / 100} €</span>
    </div>
  )
}

// ProductPage.getInitialProps = async (ctx: NextPageContext) => {
//   const { slug } = ctx.query as { slug: string }

//   const product = {
//     name: 'Awesome product',
//     slug,
//     priceEuroCents: 40000,
//   }

//   return {
//     product,
//   }
// }

interface Props {
  product: Product
}

export default ProductPage
