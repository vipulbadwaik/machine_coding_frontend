import { useState } from 'react'

import './App.css'
import Pagination from './Components/Pagination'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <Pagination/>
   </div>
  )
}

export default App
