import { useState } from "preact/hooks";

type TitleCardProps = {
    title: string;
    startFunc: Function;
}

export function TitleCard({ title, startFunc }: TitleCardProps) {
    const [pronouns, setPronouns] = useState("")
    const [name, setName] = useState("")

    function onChange(e: any) {
        setPronouns(e.target.value);
    }

    function onSubmit(e: any) {
        startFunc(pronouns, name)
        e.preventDefault();
    }

    function onNameInput(e: any) {
        setName(e.target.value);
    }

    return (
        <>
            <div class="bg-black bg-opacity-70 p-3 rounded-2xl text-center text-white col-span-3 m-2 flex flex-col md:col-start-2 md:col-end-2 md:m-0">
                <h1 class="mb-4">{title}</h1>
                <form onSubmit={onSubmit} class="flex flex-col">
                    <label for="pronouns" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Select a pronoun set
                    </label>
                    <select name="pronouns" id="pronouns" class="dropdown" onChange={onChange}>
                        <option value="he">He/Him</option>
                        <option value="she">She/Her</option>
                        <option value="they">They/Them</option>
                        <option value="it">it</option>
                    </select>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Input a name
                    </label>
                    <input id="name" type="text" class="textInput" value={name} onInput={onNameInput} placeholder="Name"/>
                    <button
                        type="submit"
                        class="bg-lime-500 hover:bg-lime-600 text-gray-800 font-semibold py-2 px-4 border border-lime-500 rounded shadow mt-4"
                    >
                        Start Game
                    </button>
                </form>
            </div>
        </>
    )
}