export interface Species {
    uid?: string;
    name: string;
    description: string;
    breeds?: Breed[]
}

export interface Breed {
    uid?: string;
    name: string;
    description: string;
    breedColors: breedColor[]
}

export interface breedColor {
    uid?: string;
    name: string;
    description: string;
    breedColors: breedColor[]
}
