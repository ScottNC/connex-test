import { BrowserRouter as Router } from 'react-router-dom';
import { Title } from './components/Title'
import { EpochTime } from './components/EpochTime';
import { Metrics } from './components/Metrics';

function App() {

  return (
    <>
      <Router>
        <Title></Title>
        <EpochTime></EpochTime>
        <Metrics></Metrics>
      </Router>
    </>
  )
}

export default App
