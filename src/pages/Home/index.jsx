import React from 'react'
// MY Componets: components/Sections
import ErrorBoundary from '../../components/ErrorBoundary'
import AllDataSection from '../../components/Sections/AllDataSection'
import ContinentsSection from '../../components/Sections/ContinentsSection'
import Last30DaysSection from '../../components/Sections/Last30DaysSection'
import AllCountries from '../../components/Sections/AllCountries'
// Others import
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.6 } }}
      exit={{ opacity: 0 }}
    >
      <ErrorBoundary>
        <AllDataSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <ContinentsSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <Last30DaysSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <AllCountries />
      </ErrorBoundary>

    </motion.div>
  )
}

export default Home