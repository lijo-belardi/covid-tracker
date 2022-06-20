import React from 'react'
import Header from '../../components/Header'
import ErrorBoundary from '../../components/ErrorBoundary'
import AllDataSection from '../../components/AllDataSection'
import Last30DaysSection from '../../components/Last30DaysSection'

const Home = () => {
  return (
    <div>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <ErrorBoundary>
        <AllDataSection />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Last30DaysSection />
      </ErrorBoundary>
      {/* Footer */}
    </div>
  )
}

export default Home