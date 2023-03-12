import GenericList from "../utils/genericList";
import { film } from "./films.model";
import IndividualFilm from "./individualFilm";
import css from './listFilms.module.css' 

export default function ListFilms(props: listFilmsProps){
return(
    <GenericList list={props.films}>
        <div className={css.div}>
            {props.films?.map(film => <IndividualFilm film={film}  
                                                        key = {film.id}   />)}
        </div> 
    </GenericList>
    )
 
}
interface listFilmsProps{
    films?: film[]
}