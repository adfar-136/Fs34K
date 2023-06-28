import React from 'react'
import Counter from './component/ErrorBoundary/Counter'
import Errorboundary from './component/ErrorBoundary/Errorboundary'
import TodoTask from "./component/CustomHooks/TodoTask"

export default function App() {
  return (
    <div>
      <h1>Hello welcome</h1>
      <Errorboundary>
        <Counter/>
      </Errorboundary>
      <Errorboundary>
        <Counter/>
      </Errorboundary>
      
      <TodoTask/>
    </div>
  )
}
