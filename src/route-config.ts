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

const routes = [
    {path: '/genres/create', component: CreateGenre},
    {path: '/genres/edit', component: EditGenre},
    {path: '/genres', component: GenreIndices},

    {path: '/actors/create', component: CreateActor},
    {path: '/actors/edit', component: EditActor},
    {path: '/actors', component: ActorIndices},

    {path: '/cinemas/create', component: CreateCinema},
    {path: '/cinemas/edit', component: EditCinema},
    {path: '/cinemas', component: CinemaIndices},

    {path: '/films/create', component: CreateFilms},
    {path: '/films/edit', component: EditFilms},
    {path: '/films/filter', component: FilterMovies},
    
    {path: '/', component: LandingPage, exact: true}
];
export default routes;