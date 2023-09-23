import { BrowserRouter as Router } from 'react-router-dom';
import { Title } from './components/Title'
import { EpochTime } from './components/EpochTime';

function App() {

  return (
    <>
      <Router>
        <Title></Title>
        <EpochTime></EpochTime>
      </Router>
    </>
  )
}

export default App
