import React from 'react';
import ReactDOM from 'react-dom/client';

let players = [
    {firstName: 'Nikolai', lastName: 'Raahauge', playerHCP: 52},
    {firstName: 'Ronni', lastName: 'Raahauge', playerHCP: 14}
]

function MyComponent(props) {
    return <ul>{players.map(player => <li>{player.firstName} {player.lastName} - {player.playerHCP}</li>)}</ul>
}

function Main () {
    return (
        <main>
            <MyComponent/>
            <h1>Hello there</h1>
            <h2>General Kenobi</h2>
            <p>How you doin</p>
        </main>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);