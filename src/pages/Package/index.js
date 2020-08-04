import React from 'react'
import PackageBanner from '../Home/components/packageBanner'
import TopPackageBanner from './components/TopPackageBanner'

export default () => (
  <section>
    <TopPackageBanner/>
    <div className="container">
      <PackageBanner/>
    </div>
  </section>
)
