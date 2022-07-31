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
    status?: string;
    breed?: string;
    birthDate: any;
    deceaseDate?: any;
    color1: BreedColor;
    color2?: BreedColor;
    microchip: boolean;
    photo?: string;
    ownerUid: string;
}

export interface shortPet {
    uid?: string;
    name: string;
    status?: string;
    photo?: string;
    ownerUid: string;
    color1: BreedColor;
    color2?: BreedColor;
    microchip: boolean;
    specie: string;
}


