import { Field, Form, Formik } from "formik";
import { genreDTO } from "./../genres/genres.model";
import Button from "./../utils/Button";

export default function filterMovies() {

    const initialValue: filterMoviesForm = {
        title: '',
        genreId: 0,
        nextReleases: false,
        inCinemas: false
    }

    const genres: genreDTO[] = [{ id: 1, name: 'Action' }, { id: 2, name: 'Comedy' }]

    return (
        <>
            <h3>Filter Movies</h3>

            <Formik initialValues={initialValue}
                onSubmit={values => console.log(values)}
            >
                {(formikProps) => (
                    <Form>
                        <div className="form-inline">
                            <div className="form-group mb-2">
                                <label htmlFor="title" className="sr-only">Título</label>
                                <input type="text"
                                    className="form-control" id="title"
                                    placeholder="Movie title"
                                    {...formikProps.getFieldProps('title')}
                                />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <select className="form-control"
                                    {...formikProps.getFieldProps('genreId')}
                                >
                                    <option value="0">--Select a genre--</option>
                                    {genres.map(genre => <option key={genre.id}
                                        value={genre.id}>{genre.name}</option>)}
                                </select>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <Field className="form-check-input" id="nextReleases"
                                name="nextReleases" type="checkbox" />
                                <label className="form-check-label"
                                htmlFor="nextReleases">Next Releases</label>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <Field className="form-check-input" id="inCinemas"
                                name="inCinemas" type="checkbox" />
                                <label className="form-check-label"
                                htmlFor="inCinemas">In Cinemas</label>
                            </div>
                            <Button
                            className="btn btn-primary mb-2 mx-sm-3"
                             onClick={() => formikProps.submitForm()}
                            >Filter</Button>
                            <Button
                                className="btn btn-danger mb-2"
                                onClick={() => formikProps.setValues(initialValue)}
                            >Clean</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>

    )
}

interface filterMoviesForm {
    title: string;
    genreId: number;
    nextReleases: boolean;
    inCinemas: boolean;
}
