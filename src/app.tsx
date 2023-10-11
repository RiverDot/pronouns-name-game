import { useState } from 'preact/hooks'
import { BackGround } from './components/backGround'
import { TitleCard } from './components/titleCard'
import './app.css'
import { ReloadPrompt } from './ReloadPrompt'

export function App() {
  const [started, setStarted] = useState(false)



  function StartGame(pronouns: string, name: string) {
    console.log("Game Starting...")
    console.log(pronouns)
    console.log(name)
    getPronouns(pronouns)
    console.log(started)
  }

  async function getPronouns(pronouns: string) {
    const response = await fetch(`https://en.pronouns.page/api/pronouns/${pronouns}`);
    const pronounData = await response.json();
    console.log(pronounData);
    setStarted(true)
  }


  return (
    <>
      <ReloadPrompt />
      <BackGround />
      <div class="h-screen grid grid-cols-3 gap-4 content-center">
        <TitleCard title='Welcome to the Name Game' startFunc={StartGame} />
      </div>
    </>
  )
}
