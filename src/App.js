import React from 'react'
import Topbar from './Topbar'
import Nodemap from './Nodemap'
import Datacards from './Datacards'
function App() {
  return (
    <div className='parent'>
      <Topbar/>
      <Nodemap/>  
      <Datacards/>
    </div>
  )
}

export default App