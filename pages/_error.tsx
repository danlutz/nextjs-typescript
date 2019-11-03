import React from 'react'
import { NextPageContext } from 'next'

const NotFoundPage = () => {
  return <div>Not found!</div>
}

const GenericErrorPage = ({ statusCode, err }: Props) => {
  console.error({ statusCode, err })
  return <div>Error!</div>
}

const ErrorPage = ({ statusCode, err }: Props) => {
  const isPageNotFoundError = statusCode === 404

  return isPageNotFoundError ? (
    <NotFoundPage />
  ) : (
    <GenericErrorPage statusCode={statusCode} err={err} />
  )
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null
  return { statusCode, err }
}

interface Props {
  statusCode?:
    | NextPageContext['res']['statusCode']
    | NextPageContext['err']['statusCode']
  err?: NextPageContext['err']
}

export default ErrorPage
