import FormGenres from "./FormGenres";

export default function EditGenre(){
     // const { id }: any = useParams();

     return (
        <>
            <h3>Edit Genre</h3>
            <FormGenres model={{name: 'Action'}} 
                 onSubmit={async values => {
                    await new Promise(r => setTimeout(r, 3000))
                    console.log(values);
                 }}
            />
        </>

    )
}