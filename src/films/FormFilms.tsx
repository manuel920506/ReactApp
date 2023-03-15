import { Form, Formik, FormikHelpers } from "formik";
import { filmCreateDTO } from "./films.model";
import * as Yup from 'yup'
import FormGroupText from "./../utils/FormGroupText";
import FormGroupCheckbox from "./../utils/FormGroupCheckbox";
import FormGroupDate from "./../utils/FormGroupDate";
import FormGroupImage from "./../utils/FormGroupImage";
import Button from "./../utils/Button";
import { Link } from "react-router-dom";
import SelectorMultiple, { selectorMultipleModel } from "./../utils/MultipleSelector";
import { genreDTO } from "./../genres/genres.model";
import { useState } from "react";
import { cinemaDTO } from "./../cinemas/cinemas.model";
import TypeAheadActors from "./../actors/TypeAheadActors";
import { actorFilmDTO } from "./../actors/actors.model";

export default function FormFilms(props: formFilmsProps) {
    const [selectedGenres, setSelectedGenres] = 
    useState(maping(props.selectedGenres));
    const [genresNotSelected, setGenresNotSelected] = 
    useState(maping(props.genresNotSelected));

    const [cinemasSelected, setCinemasSelected] =
    useState(maping(props.cinemasSelected));
    const [cinemasNotSelected, setCinemasNotSelected] =
    useState(maping(props.cinemasNotSelected));

    const [actorsSelected, setActorsSelected] = 
    useState<actorFilmDTO[]>(props.actorsSelected)
    
    function maping(arrangement: {id: number, name: string}[]): selectorMultipleModel[]{
        return arrangement.map(value => {
            return {key: value.id, value: value.name}
        })
    }

    return (
        <Formik
            initialValues={props.model}
            onSubmit={(values, actions) => {
                values.genresIds = selectedGenres.map(valor => valor.key);
                values.cinemasIds = cinemasSelected.map(valor => valor.key);
                values.actors = actorsSelected;
                props.onSubmit(values, actions);
            }}
            validationSchema={Yup.object({
                titulo: Yup.string().required('This field is required').firstCapitalLetter()
            })}
        >
            {formikProps => (
                <Form>
                    <FormGroupText label="Título" field="titulo" />
                    <FormGroupCheckbox label="In Cinemas" field="inCinemas" />
                    <FormGroupText label="Trailer" field="trailer" />
                    <FormGroupDate field="releaseDate" label="Release Date" />
                    <FormGroupImage field="poster" label="Poster"
                        imgURL={props.model.posterURL} />

                    <div className="form-group">
                        <label>Géneros:</label>
                        <SelectorMultiple selected={selectedGenres}
                            notSelected={genresNotSelected}
                            onChange={(selected, notSelected) => {
                                setSelectedGenres(selected)
                                setGenresNotSelected(notSelected);
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label>Cines:</label>
                        <SelectorMultiple selected={cinemasSelected}
                            notSelected={cinemasNotSelected}
                            onChange={(selected, notSelected) => {
                                setCinemasSelected(selected)
                                setCinemasNotSelected(notSelected);
                            }}
                        />
                    </div>

                    <div className="form-group">
                            <TypeAheadActors 
                                onAdd={actors => {
                                    setActorsSelected(actors);
                                }}
                                onRemove={actor => {
                                    const actors = actorsSelected.filter(x => x !== actor);
                                    setActorsSelected(actors);
                                }}
                                actors={actorsSelected}
                                listUI={(actor: actorFilmDTO) => 
                                <>
                                    {actor.name} / <input placeholder="Character" 
                                    type="text" value={actor.character} 
                                    onChange={e => {
                                        const index = actorsSelected
                                        .findIndex(x => x.id === actor.id);

                                        const actors = [...actorsSelected];
                                        actors[index].character = e.currentTarget.value;
                                        setActorsSelected(actors);
                                    }}
                                    />
                                </>}
                            />
                    </div>

                    <Button disabled={formikProps.isSubmitting} type="submit">Send</Button>
                    <Link className="btn btn-secondary" to="/">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface formFilmsProps {
    model: filmCreateDTO;
    onSubmit(values: filmCreateDTO, actions: FormikHelpers<filmCreateDTO>): void;
    selectedGenres: genreDTO[];
    genresNotSelected: genreDTO[];
    cinemasSelected: cinemaDTO[];
    cinemasNotSelected: cinemaDTO[];
    actorsSelected: actorFilmDTO[];
}