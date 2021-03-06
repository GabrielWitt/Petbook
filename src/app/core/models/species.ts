export interface Species {
    uid?: string;
    name: string;
    description: string;
    photo?: string;
    breeds?: Breed[]
}

export interface Breed {
    uid?: string;
    specie: string;
    name: string;
    description: string;
}

export interface BreedColor {
    uid?: string;
    name: string;
    color?: string;
    rgbCode: string;
}

export interface Pet {
    uid?: string;
    name: string;
    specie: string;
    breed?: string;
    birthDate: Date;
    color1: BreedColor;
    color2?: BreedColor;
    microchip: boolean;
    photo?: string;
}
