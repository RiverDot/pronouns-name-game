import { useState } from 'preact/hooks'
import { BackGround } from './components/backGround'
import { TitleCard } from './components/titleCard'
import { GameCard } from './components/gameCard'
import './app.css'
import { ReloadPrompt } from './ReloadPrompt'
import { logAna } from './api/firebase'

export function App() {
  const [started, setStarted] = useState(false)
  const [pronouns, setPronouns] = useState('')



  function StartGame(pronouns: string, name: string) {
    console.log("Game Starting...")
    logAna("Starting")
    console.log(pronouns)
    setPronouns(pronouns)
    console.log(name)
    setStarted(true)
  }


  return (
    <>
      <ReloadPrompt />
      <BackGround />
      <div class="h-screen grid grid-cols-3 gap-4 content-center">
        {started
          ? <GameCard pronouns={pronouns}/>
          : <TitleCard title='Welcome to the Name Game' startFunc={StartGame} />
        }
      </div>
    </>
  )
}
