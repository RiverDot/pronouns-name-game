/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

export type PronounJSON = {
    canonicalName:   string;
    description:     string;
    normative:       boolean;
    morphemes:       Morphemes;
    pronunciations:  Morphemes;
    plural:          boolean[];
    pluralHonorific: boolean[];
    aliases:         string[];
    history:         string;
    pronounceable:   boolean;
    thirdForm:       null;
    smallForm:       null;
    sourcesInfo:     null;
    examples:        string[];
    name:            string;
}

export type Morphemes = {
    pronoun_subject:       string;
    pronoun_object:        string;
    possessive_determiner: string;
    possessive_pronoun:    string;
    reflexive:             string;
}

