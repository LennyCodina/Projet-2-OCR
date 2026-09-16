import {type FC} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {Country} from './pages/Country'
import { NotFound } from './pages/NotFound'

export const App: FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
