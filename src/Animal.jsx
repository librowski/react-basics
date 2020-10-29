import * as React from 'react';

const Name = (props) => <h1>{ props.name }</h1>;

const Breed = (props) => (
    <p style={ { color: 'red' } }>
        { props.breed }
    </p>
);

export const Animal = (props) => {
    React.useEffect(() => {
        console.log(`Hello, I'm ${props.name}!`);
    });

    return (
        <div>
            <Name name={ props.name } />
            <Breed breed={ props.breed } />
        </div>
    );
}