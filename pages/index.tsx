import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/product/[slug]" as="/product/awesome-product">
        <a>Awesome product</a>
      </Link>
    </div>
  )
}

export default HomePage
