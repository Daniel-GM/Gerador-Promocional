import HomePage from "./HomePage"
import { AppProvider } from "./AppContext"

function App() {

  return (
    <AppProvider>
      <HomePage />
    </AppProvider>
  )
}

export default App
