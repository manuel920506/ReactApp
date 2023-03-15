import { Form, Formik, FormikHelpers } from "formik";
import { createActorDTO } from "./actors.model";
import FormGroupText from './../utils/FormGroupText'
import Button from './../utils/Button'
import { Link } from "react-router-dom";
import * as Yup from 'yup'
import FormGroupDate from './../utils/FormGroupDate'
import FormGroupImage from './../utils/FormGroupImage'
import FormGroupMarkdown from './../utils/FormGroupMarkdown'

export default function FormActors(props: formActorsProps) {
    
    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}  
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required').firstCapitalLetter(),
                birthDate: Yup.date().nullable().required('This field is required')
            })}
            >
            {(formikProps) => (
                <Form>
                    <FormGroupText field="name" label="Name" />
                    <FormGroupDate label="Birth Date" field="birthDate" />
                    <FormGroupImage field="photo" label="Photo" imgURL={props.model.photoURL} />
                    <FormGroupMarkdown field="biography" label="Biography" />

                    <Button disabled={formikProps.isSubmitting}
                        type="submit"
                    >Save</Button>
                    <Link className="btn btn-secondary" to="/actors">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface formActorsProps {
    model: createActorDTO;
    onSubmit(valores: createActorDTO, acciones: FormikHelpers<createActorDTO>): void;
}