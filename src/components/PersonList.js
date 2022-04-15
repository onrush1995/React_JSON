import React from 'react';
import axios from 'axios';
import './style.css';

export default class PersonList extends React.Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
            const persons = res.data;
            this.setState({ persons });
        });
    }

    render() {
        return (
            <div>
                <main className='deals'>
                    {this.state.persons.map((person) => (
                        <article className='sale-item' key={person.id}>
                            <h1 className='circle'> {person.name.charAt(0)}</h1>
                            <p>{person.name}</p>
                            <p> @{person.username}</p>
                            <p>
                                {' '}
                                <a href='{person.website}'>https://{person.website} </a>
                            </p>
                            <button>View Details</button>
                        </article>
                    ))}
                </main>
            </div>
        );
    }
}
