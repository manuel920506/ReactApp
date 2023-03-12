import { film } from "./films.model";
import css from './IndividualFilm.module.css' 

export default function IndividualFilm(props: IndividualFilmProps){
    const buildLink = () => `/film/${props.film.id}` 
    return(
        <div className={css.div}>
            <a href={buildLink()}>
                <img src={props.film.poster} alt="Poster" />
            </a>
            <p>
                <a href={buildLink()}>{props.film.title}</a>
            </p>
        </div>
    )
}

interface IndividualFilmProps{
    film: film
}