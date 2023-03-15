export interface createActorDTO {
    name: string;
    birthDate?: Date;
    photo?: File;
    photoURL?: string;
    biography?: string;
}

export interface actorFilmDTO {
    id: number;
    name: string;
    character: string;
    photo: string;
}