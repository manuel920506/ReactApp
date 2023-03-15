import { actorFilmDTO } from "./../actors/actors.model";
import { cinemaDTO } from "./../cinemas/cinemas.model";
import { genreDTO } from "./../genres/genres.model";
import FormFilms from "./../films/FormFilms";

export default function EditFilms() {


    const genresNotSelected: genreDTO[] = [
    {id: 2, name: 'Drama'}] 

    const genresSelected: genreDTO[] = [{id: 1, name: 'Action'}, 
    {id:3, name: 'Comedy'}] 

    const cinemasSelected: cinemaDTO[] = [{id: 2, name: 'Sambil'}]
    const cinemasNotSelected: cinemaDTO[] = [{id: 1, name: 'Agora'}]

    const actorsSelected: actorFilmDTO[] = [
        {
            id: 1, name: 'Felipe', character: '', photo: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX214_CR0,0,214,317_AL_.jpg'
        }
    ]

    return (
        <>
            <h3>Edit Film</h3>

            <FormFilms
            actorsSelected={actorsSelected}
            cinemasSelected={cinemasSelected}
            cinemasNotSelected={cinemasNotSelected}
            genresNotSelected={genresNotSelected}
            selectedGenres={genresSelected}
                model={{
                    title: 'Spider-Man', inCinemas: true, trailer: 'url',
                    launchDate: new Date('2019-01-01T00:00:00')
                }}
                onSubmit={values => console.log(values)}
            />

        </>

    )
}