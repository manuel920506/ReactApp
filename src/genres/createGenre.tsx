import FormGenres from "./FormGenres";

export default function CreateGenre(){ 
    // const history = useHistory();
    return (
        <>
            <h3>Crear Género</h3>

            <FormGenres model={{name: ''}} 
                 onSubmit={async values => {
                    await new Promise(r => setTimeout(r, 3000))
                    console.log(values);
                 }}
            />
        </>
    )
}