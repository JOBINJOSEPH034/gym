import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { Home, AboutPage, ProgramsPage, PricingPage, SchedulePage, TrainersPage } from './pages'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="trainers" element={<TrainersPage />} />
        <Route path="schedule" element={<SchedulePage />} />
      </Route>
    </Routes>
  )
}

export default App
