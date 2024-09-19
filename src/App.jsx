import { useState } from 'react'
import moodeng from './assets/หมูเด้ง.jpg'
import WaterMelon from './assets/แตงโม.jpg'
import Pumpkin from './assets/ฟักทอง.jpg'
import Grass from './assets/หญ้า.jpg'
import Human from './assets/human.jpg'
import './App.css'

function App() {
  const [level, setLevel] = useState(0);
  const [moodengImage, setmoodengImage] = useState(moodeng);

  if (level >= 100 && moodengImage !== Human) {
    setmoodengImage(Human);
  }
  return (
    <>
      <div>
        <h1>Level is {level}</h1>
      </div>
      <div className='moodengPart'>
        <img src={moodengImage} alt="moodeng" width={level + 300} height={level + 175} />
      </div>
      <img src={WaterMelon} alt="แตงโม" onClick={() => setLevel((level) => level + 5)} style={{ cursor: 'pointer', width: '100px', margin: '10px' }}/>
      <img src={Pumpkin} alt="ฟักทอง" onClick={() => setLevel((level) => level + 10)} style={{ cursor: 'pointer', width: '100px', margin: '10px' }}/>
      <img src={Grass} alt="หญ้า" onClick={() => setLevel((level) => level + 20)} style={{ cursor: 'pointer', width: '100px', margin: '10px' }}/>
    </>
  )
}
export default App;
