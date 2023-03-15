import FormCinema from "./FormCinema";

export default function CreateCinema(){
    return (
        <>
            <h3>Create Cinema</h3>
            <FormCinema
                model={{name: ''}}
                onSubmit={values => console.log(values)}
            />
        </>

    )
}