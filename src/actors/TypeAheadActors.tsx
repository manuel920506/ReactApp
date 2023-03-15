import { ReactElement, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { actorFilmDTO } from "./actors.model";

export default function TypeAheadActors(props: typeAheadActoresProps) {

    const actores: actorFilmDTO[] = [
        {
            id: 1, name: 'Felipe', character: '', photo: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX214_CR0,0,214,317_AL_.jpg'
        },
        {
            id: 2, name: 'Fernando', character: '', photo: 'https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX214_CR0,0,214,317_AL_.jpg'
        },
        {
            id: 3, name: 'Roberto', character: '', photo: 'https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg'
        }
    ]

    const selection: actorFilmDTO[] = []

    const [draggedItem, setDraggedItem] = 
        useState<actorFilmDTO | undefined>(undefined)

    function handleDragStart(actor: actorFilmDTO) 
    {
        setDraggedItem(actor);
    }

    function handleDragOver(actor: actorFilmDTO)
    {
        if (!draggedItem){
            return;
        }

        if (actor.id !== draggedItem.id){
            const indexDraggedItem = 
                props.actors.findIndex(x => x.id === draggedItem.id);
            const indexActor = 
                props.actors.findIndex(x => x.id === actor.id);

            const actors = [...props.actors];
            actors[indexActor] = draggedItem;
            actors[indexDraggedItem] = actor;
            props.onAdd(actors);

        }
    }

    return (
        <>
            <label>Actors</label>
            <Typeahead
                id="typeahead"
                onChange={actors => {
                    if (props.actors.findIndex(x => x.id === actors[0].id) === -1) {
                        props.onAdd([...props.actors, actors[0]]);
                    }
                }}
                options={actores}
                labelKey={actor => actor.name}
                filterBy={['name']}
                placeholder="Write the actor's name..."
                minLength={2}
                flip={true}
                selected={selection}
                renderMenuItemChildren={actor => (
                    <>
                        <img alt="actor" src={actor.photo}
                            style={{
                                height: '64px',
                                marginRight: '10px',
                                width: '64px'
                            }}
                        />
                        <span>{actor.name}</span>
                    </>
                )}
            />

            <ul className="list-group">
                {props.actors.map(actor => <li
                    draggable={true}
                    onDragStart={() => handleDragStart(actor)}
                    onDragOver={() => handleDragOver(actor)}
                    className="list-group-item list-group-item-action"
                    key={actor.id}>
                    {props.listUI(actor)}
                    <span className="badge badge-primary badge-pill pointer"
                        style={{ marginLeft: '0.5rem' }}
                        onClick={() => props.onRemove(actor)}
                    >
                        X
                    </span>
                </li>)}
            </ul>
        </>
    )
}

interface typeAheadActoresProps {
    actors: actorFilmDTO[];
    onAdd(actors: actorFilmDTO[]): void;
    listUI(actor: actorFilmDTO): ReactElement;
    onRemove(actor: actorFilmDTO): void;
}