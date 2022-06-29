import React from 'react'
// components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// components/Sections
import ErrorBoundary from '../../components/ErrorBoundary'
import AllDataSection from '../../components/Sections/AllDataSection'
import ContinentsSection from '../../components/Sections/ContinentsSection'
import Last30DaysSection from '../../components/Sections/Last30DaysSection'
import AllCountries from '../../components/Sections/AllCountries'

const Home = () => {
  return (
    <div>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <ErrorBoundary>
        {/* TODO aggiungere animazioni */}
        <AllDataSection />
      </ErrorBoundary>

      <ErrorBoundary>
        {/* TODO aggiungere animazioni */}
        <ContinentsSection />
      </ErrorBoundary>

      <ErrorBoundary>
        {/* TODO aggiungere animazioni */}
        <Last30DaysSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <AllCountries />
      </ErrorBoundary>

      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  )
}

export default Home