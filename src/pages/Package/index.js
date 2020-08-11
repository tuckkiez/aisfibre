import React from 'react'
import PackageBanner from '../Home/components/packageBanner'
import TopPackageBanner from './components/TopPackageBanner'
import Promotions from '../Home/components/promotions'

export default () => (
  <section>
    <TopPackageBanner/>
    <div className="container">
      <div><Promotions/></div>
      <PackageBanner/>
    </div>
  </section>
)
