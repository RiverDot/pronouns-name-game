import { useEffect, useState } from "preact/hooks";
import { getPronouns } from "../api/pronounsPage";
import { PronounJSON } from "../vite-env";

type DiscCardProps = {
    pronouns: string;
    startFunc: Function;
}

export function DiscCard({ pronouns, startFunc }: DiscCardProps) {
    const [pronounName, setPronounName] = useState("")
    const [pronounDisc, setPronounDisc] = useState("")
    const [pronounEx, setPronounEx] = useState([""])

    async function loadFunc() {
        const pronounData: PronounJSON = await getPronouns(pronouns)
        setPronounName(pronounData.name)
        setPronounDisc(pronounData.description)
        setPronounEx(pronounData.examples)
    }

    function start() {
        startFunc()
    }

    useEffect(() => {
        loadFunc()
    }, []);

    return (
        <>
            <div class="bg-black bg-opacity-70 p-3 rounded-2xl text-center text-white col-span-3 m-2 flex flex-col md:col-start-2 md:col-end-2 md:m-0">
                <h1>{pronounName}</h1>
                <h2>{pronounDisc}</h2>
                <ul class="">
                    {
                        pronounEx.map(ex => (
                            <li>- {ex}</li>
                        ))
                    }
                </ul>
                <button
                        onClick={start}
                        class="bg-lime-500 hover:bg-lime-600 text-gray-800 font-semibold py-2 px-4 border border-lime-500 rounded shadow mt-4"
                    >
                        Start Game
                    </button>
            </div>
        </>
    )
}