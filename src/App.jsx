import './App.css'
import Challenge from './Components/Challenge'

const testChallengeData = {
  id: 1,
  name: 'Challenge 1:',
  description: 'Fill an array with the following objects...',
}

function App() {

  return (
    <>
      <Challenge challengeData={testChallengeData}></Challenge>
    </>
  )
}

export default App
