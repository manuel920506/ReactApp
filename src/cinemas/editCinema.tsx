import FormCinema from "./FormCinema";

export default function EditCinema(){
    return (
        <>, 
            <h3>Editar cine</h3>
            <FormCinema
                model={{name: 'Sambil', latitude: 18.471210, longitude: -69.933270}}
                onSubmit={values => console.log(values)}
            />
        </>

    )
}