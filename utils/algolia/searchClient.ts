import algoliasearch from 'algoliasearch/lite'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const searchClient = algoliasearch(
  publicRuntimeConfig.ALGOLIA_SEARCH_APPID,
  publicRuntimeConfig.ALGOLIA_SEARCH_SEARCH_KEY,
)

export default searchClient
