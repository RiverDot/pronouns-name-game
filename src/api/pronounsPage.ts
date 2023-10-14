import { PronounJSON } from "../vite-env";

export async function getPronouns(pronouns: string): Promise<PronounJSON> {
    const response = await fetch(`https://en.pronouns.page/api/pronouns/${pronouns}`);
    const pronounData = await response.json();
    console.log(pronounData);
    return pronounData
}