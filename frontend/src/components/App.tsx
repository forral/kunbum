import React from 'react'

interface AppProps {
  message?: string
}

function App({ message = 'hello world' }: AppProps) {
  return <div>{message}</div>
}

export default App
