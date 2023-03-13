import ActorIndices from "./actors/actorIndices";
import CreateActor from "./actors/createActor";
import EditActor from "./actors/editActor";
import CinemaIndices from "./cinemas/cinemaIndices";
import CreateCinema from "./cinemas/createCinema";
import EditCinema from "./cinemas/editCinema";
import CreateFilms from "./filterMovies/createFilms";
import EditFilms from "./filterMovies/editFilms";
import FilterMovies from "./filterMovies/filterMovies";
import CreateGenre from "./genres/createGenre";
import EditGenre from "./genres/editGenre";
import GenreIndices from "./genres/genreIndices";
import LandingPage from "./LandingPage";
import RedirectLandingPage from "./utils/redirectLandingPage";

const routes = [
    {path: '/genres/create', component: CreateGenre},
    {path: '/genres/edit:id(\\d+)', component: EditGenre, exact: true},
    {path: '/genres', component: GenreIndices},

    {path: '/actors/create', component: CreateActor},
    {path: '/actors/edit:id(\\d+)', component: EditActor, exact: true},
    {path: '/actors', component: ActorIndices},

    {path: '/cinemas/create', component: CreateCinema},
    {path: '/cinemas/edit:id(\\d+)', component: EditCinema, exact: true},
    {path: '/cinemas', component: CinemaIndices},

    {path: '/films/create', component: CreateFilms},
    {path: '/films/edit:id(\\d+)', component: EditFilms, exact: true},
    {path: '/films/filter', component: FilterMovies},
    
    {path: '/', component: LandingPage, exact: true},
    {path: '*', component: RedirectLandingPage}
];
export default routes;