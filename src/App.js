import React from 'react'
import Topbar from './Topbar'
import Nodemap from './Nodemap'
import Datacards from './Datacards'
import Datacards_node2 from './Datacards_node2'
function App() {
  return (
    <div className='parent'>
      <Topbar/>
      <Nodemap/>  
      <Datacards/>
      <Datacards_node2/>
    </div>
  )
}

export default App