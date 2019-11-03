import { useState, useEffect } from 'react'
import Router from 'next/router'
import qs from 'qs'

import useDebounce from './useDebounce'

export interface AlgoliaSearchState {
  refinementList?: {
    [facet: string]: string[]
  }
  page?: number
  configure?: {
    hitsPerPage: string // why?
  }
  range?: {
    [facet: string]: {
      min: number
      max: number
    }
  }
  query?: string
}

export const urlToSearchState = (asPathIncludingQueryParams: string) => {
  if (!asPathIncludingQueryParams.includes('?')) return {}

  const searchQueryParams = asPathIncludingQueryParams.replace(/^.+\?/, '')
  const searchState = qs.parse(searchQueryParams) as AlgoliaSearchState

  return searchState
}

export const createSearchQueryParams = (searchState: AlgoliaSearchState) =>
  `?${qs.stringify(searchState)}`

// TODO: Fix big when using back-button
const useAlgoliaURLSync = (
  initialSearchState: AlgoliaSearchState,
  fsPathName: string,
  asPath: string,
  debounceMs = 800,
) => {
  const [searchState, onSearchStateChange] = useState(initialSearchState)
  const debouncedSearchState = useDebounce(searchState, debounceMs)

  const asPathWithoutSearchQueries = asPath ? asPath.replace(/\?\S+/, '') : ''

  useEffect(() => {
    onSearchStateChange(initialSearchState)
  }, [initialSearchState, asPathWithoutSearchQueries])

  useEffect(() => {
    if (Object.keys(debouncedSearchState).length !== 0) {
      const searchQueryParams = createSearchQueryParams(debouncedSearchState)

      const updatedPath = `${asPathWithoutSearchQueries}${searchQueryParams}`
      Router.push(fsPathName, updatedPath, {
        shallow: true,
      })
    }
    // eslint-disable-next-line
  }, [debouncedSearchState, fsPathName])

  return [searchState, onSearchStateChange] as [
    AlgoliaSearchState,
    (nextSearchState: AlgoliaSearchState) => void,
  ]
}

export default useAlgoliaURLSync
