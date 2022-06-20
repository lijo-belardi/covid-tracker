import React from 'react'
import Header from '../../components/Header'
import ErrorBoundary from '../../components/ErrorBoundary'
import AllDataSection from '../../components/AllDataSection'

const Home = () => {
  return (
    <div>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <ErrorBoundary>
        <AllDataSection />
      </ErrorBoundary>
      {/* Dashboard */}
      {/* Footer */}
    </div>
  )
}

export default Home