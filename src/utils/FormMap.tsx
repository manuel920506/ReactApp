import { useFormikContext } from 'formik';
import { coordinateDTO} from './coordinates.model'
import Map from './Map'

export default function FormMap(props: formMapProps){

    const {values} = useFormikContext<any>();

    function updateFields(coordinates: coordinateDTO){
        values[props.fieldLat] = coordinates.lat;
        values[props.fieldLng] = coordinates.lng;
    }

    return (
        <Map 
            coordinates={props.coordinates}
            handleClickMap={updateFields}
        />
    )
}

interface formMapProps{
    coordinates: coordinateDTO[];
    fieldLat: string;
    fieldLng: string;
}

FormMap.defaultProps = {
    coordinates: []
}