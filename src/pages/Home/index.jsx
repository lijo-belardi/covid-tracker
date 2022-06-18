import React from 'react'
import Header from '../../components/Header'
import ErrorBoundary from '../../components/ErrorBoundary'

const Home = () => {
  return (
    <div>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      {/* Dashboard */}
      {/* Footer */}
    </div>
  )
}

export default Home