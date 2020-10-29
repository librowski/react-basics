import * as React from 'react';

const Name = (props) => <h1>{ props.name }</h1>;

const Breed = (props) => (
    <p style={ { color: 'red' } }>
        { props.breed }
    </p>
);

const randomJokeURL = 'https://api.chucknorris.io/jokes/random';

export const Animal = (props) => {
    const [joke, setJoke] = React.useState('Loading joke...');

    React.useEffect(() => {
        const fetchJoke = async () => {
            setTimeout(async () => {
                const joke = await fetch(randomJokeURL);
                const { value } = await joke.json();

                setJoke(value);
            }, 1000)
        }

        fetchJoke();
    }, []);

    return (
        <div>
            <Name name={ props.name } />
            <Breed breed={ props.breed } />
            <span style={{ fontSize: 12 }}>{ joke }</span>
        </div>
    );
}