import FormActors from "./FormActors";

export default function EditActor(){
    return (
        <>
            <h3>Edit Actors</h3>
            <FormActors
                model={{name: 'Tom Holland', 
                biography: `# tom
Ha nacido **tom**`,
                birthDate: new Date('1996-06-01T00:00:00'),
                photoURL: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX214_CR0,0,214,317_AL_.jpg' }}
                onSubmit={values => console.log(values)}
            />
        </>

    )
}