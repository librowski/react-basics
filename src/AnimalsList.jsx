import * as React from 'react';
import { Animal } from './Animal';

const AnimalInput = ({ handleAddAnimal }) => {
    const [name, setName] = React.useState('');
    const [breed, setBreed] = React.useState('');

    const onClick = () => {
        handleAddAnimal(name, breed);
        setName('');
        setBreed('');
    }

    return (
        <div>
            <h3>Name</h3>
            <input
                value={ name }
                onChange={ (e) => setName(e.target.value) }
            />
            <h3>Breed</h3>
            <input
                value={ breed }
                onChange={ (e) => setBreed(e.target.value) }
            />
            <button onClick={ onClick }>
                Add animal
            </button>
        </div>
    );
}
export const AnimalsList = () => {
    const [animals, setAnimals] = React.useState([]);

    const handleAddAnimal = (name, breed) => setAnimals(
        [
            ...animals,
            { name, breed },
        ]
    );

    return (
        <div>
            <AnimalInput handleAddAnimal={handleAddAnimal} />
            <h1>Animals</h1>
            {
                animals.map(({ name, breed }) => (
                    <Animal name={name} breed={breed} /> 
                ))
            }
        </div>
    )
}