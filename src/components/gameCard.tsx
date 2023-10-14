import { useState } from 'preact/hooks'
import { DiscCard } from './discCard'

type GameCardProps = {
    pronouns: string;
}

export function GameCard({ pronouns }: GameCardProps) {
    const [started, setStarted] = useState(false)

    function startFunc() {
        setStarted(true);
        loadFunc()
    }

    async function loadFunc() {
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