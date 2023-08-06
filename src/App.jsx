import { useState } from 'react'
import DataProvider from './components/DataProvider'

function App() {

  return (
    <div>
      <h1>Datos desde el data provider</h1>
      <DataProvider
        render={(data) => (
          <ul>
            {
              data.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            }
          </ul>
        )}
      />
    </div>
  )
}

export default App
