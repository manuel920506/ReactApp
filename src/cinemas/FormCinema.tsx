import FormGroupText from "./../utils/FormGroupText";
import Button from './../utils/Button'
import { Link } from "react-router-dom";
import FormMap from "./../utils/FormMap";
import { coordinateDTO } from "./../utils/coordinates.model"; 
import { Form, Formik, FormikHelpers } from "formik";
import { cinemaCreateDTO } from "./cinemas.model";
import * as Yup from 'yup';

export default function FormCinema(props: formCinemaProps) {

    function transformCoordinates(): coordinateDTO[] | undefined {
        if (props.model.latitude && props.model.longitude){
            const response: coordinateDTO = {lat: props.model.latitude, 
                lng: props.model.longitude}
            return [response];
        }

        return undefined;
    }

    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required').firstCapitalLetter()
            })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText label="Name" field="name" />

                    <div style={{marginBottom: '1rem'}}>
                        <FormMap fieldLat="latitude" fieldLng="longitude"
                            coordinates={transformCoordinates()}
                        />
                    </div>

                    <Button disabled={formikProps.isSubmitting} type="submit">Save</Button>
                    <Link className="btn btn-secondary" to="/cinemas">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface formCinemaProps {
    model: cinemaCreateDTO;
    onSubmit(values: cinemaCreateDTO, actions: FormikHelpers<cinemaCreateDTO>): void;
}