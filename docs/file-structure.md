# File structure of React components

The goal of this document is goal is to unify the structure &amp; order of imports of all components, so developers can easily find specific things at fixed locations in a component file.

```js
// 3rd party modules
import React from 'react'
import Link from 'next/link'

// Context
import AppContext from '../context/AppContext'

// Custom components
import Button from '../components/Button'

// Hooks
import useToggle from '../hooks/useToggle'

// Utils
import isBrowser from '../utils/isBrowser'

// Hard coded data
import countryCodes from '../utils/countries'

// Typings
import Product from '../typings/Product'

// Local variables
const i18nNamespace = 'product'

// Actual component
const Example = ({ foo }: Props) => {
  return <div>{foo}</div>
}

// PropTypes
interface Props {
  foo: string;
}

// Export statement
export default Example
```
