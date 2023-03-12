export interface film{
    id: number;
    title: string;
    poster: string
}

export interface landingPageDTO{
    onTheBillboard?: film[];
    upcomingFilmReleases?: film[];
}