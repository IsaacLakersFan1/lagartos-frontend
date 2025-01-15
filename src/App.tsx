import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Dashboard/Home/Home'
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
