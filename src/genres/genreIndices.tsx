import axios , {AxiosResponse} from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom"; 
import { urlGenres } from "../utils/endpoints";
import { genreDTO } from "./genres.model";
export default function GenreIndices(){ 
    useEffect(() => {
        axios.get(urlGenres)
        .then((response: AxiosResponse<genreDTO[]>) => {
            console.log(response.data);
        })

    }, [])
    return (
        <>
            <h3>Genre Indices</h3>   
            <Link to="/genres/create">Create genre</Link>     
        </>
    )
} 