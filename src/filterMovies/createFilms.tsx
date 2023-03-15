import { cinemaDTO } from "./../cinemas/cinemas.model";
import { genreDTO } from "./../genres/genres.model";
import FormFilms from "./../films/FormFilms";

export default function CreateFilms() {

    const generos: genreDTO[] = [{id: 1, name: 'Acción'}, 
    {id: 2, name: 'Drama'},
    {id:3, name: 'Comedy'}] 

    const cines: cinemaDTO[] = [{id: 1, name: 'Agora'}, {id: 2, name: 'Sambil'}]

    return (
        <>
            <h3>Create Films</h3>

            <FormFilms
            actorsSelected={[]}
            cinemasNotSelected={cines}
            cinemasSelected={[]}
            genresNotSelected={generos}
            selectedGenres={[]}
                model={{ title: '', inCinemas: false, trailer: '' }}
                onSubmit={values => console.log(values)}
            />
        </>
    )
}