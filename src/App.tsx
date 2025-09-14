import { useState } from 'react'

import './App.css'
import ProfileComponent from './components/ProfileComponent'
import InformationComponent from './components/InformationComponent'

function App() {

  return (
<>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 gap-5 pt-5">
        <div className="md:col-span-1 flex ">
          <ProfileComponent />
        </div>

        <div className="md:col-span-2 flex ">
          <InformationComponent />
        </div>
      </div>
    </>
  )
}

export default App
