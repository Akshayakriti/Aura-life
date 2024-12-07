import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { HobbyHub } from './pages/HobbyHub';
import { MentalHealth } from './pages/MentalHealth';
import { Journal } from './pages/Journal';
import { LessonPage } from './pages/LessonPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hobby-hub" element={<HobbyHub />} />
          <Route path="/hobby-hub/:hobbyId/lessons/:lessonId" element={<LessonPage />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;