export interface film{
    id: number;
    title: string;
    poster: string
}

export interface filmCreateDTO {
    title: string;
    inCinemas: boolean;
    trailer: string;
    launchDate?: Date;
    poster?: File;
    posterURL?: string;
    genresIds?: number[];
    cinemasIds?: number[];
    actors?: actorFilmDTO[];
}

export interface landingPageDTO{
    onTheBillboard?: film[];
    upcomingFilmReleases?: film[];
}