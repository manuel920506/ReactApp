import { Formik, Form, FormikHelpers } from "formik"; 
import { Link } from "react-router-dom";
import * as Yup from 'yup'
import FormGroupText from '../utils/FormGroupText'
import Button from '../utils/Button'
import { genreCreateDTO } from "./genres.model";

export default function FormGenres(props: formGenresProps){
    return(
        <Formik initialValues={props.model}
            onSubmit={props.onSubmit}

            validationSchema={Yup.object({
                name: Yup.string().required('This field is required')
                    .firstCapitalLetter()
            })}

        >
            {(formikProps) => (
                <Form>
                    <FormGroupText field="name" label="Name" />

                    <Button disabled={formikProps.isSubmitting} 
                        type="submit">Save</Button>
                    <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                </Form>
            )}

        </Formik>
    )
}

interface formGenresProps{
    model: genreCreateDTO;
    onSubmit(values: genreCreateDTO, action: FormikHelpers<genreCreateDTO>): void;
}