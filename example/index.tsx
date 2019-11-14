import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Crockpot } from '../.'

const App = () => {
  return (
    <div>
      <Crockpot.section
        height={200}
        bg="blue"
        mt="200px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Crockpot.h1 color="white" fontFamily="sans-serif">
          Hello world
        </Crockpot.h1>
      </Crockpot.section>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
