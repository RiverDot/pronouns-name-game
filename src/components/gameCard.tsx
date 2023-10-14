import { useState } from 'preact/hooks'
import { DiscCard } from './discCard'
import { getPronouns } from '../api/pronounsPage';
import { PronounJSON } from '../vite-env';

type GameCardProps = {
    pronouns: string;
}

export function GameCard({ pronouns }: GameCardProps) {
    const [started, setStarted] = useState(false)
    const [pronounName, setPronounName] = useState("")

    function startFunc() {
        setStarted(true);
        loadFunc()
    }

    async function loadFunc() {
        const pronounData: PronounJSON = await getPronouns(pronouns)
        setPronounName(pronounData.name)
    }

    return (
        <>
            {started
                ? <p>Hello</p>
                : <DiscCard pronouns={pronouns} startFunc={startFunc} />
            }
        </>
    )
}