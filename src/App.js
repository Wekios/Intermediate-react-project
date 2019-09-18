import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './components/Pet';

const App = () => {
    return (
        <div>
            <div></div>
            <h1 id="something-important">Adopt me</h1>
            <Pet name="Luna" animal="Dog" breed="Havanese" />
            <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
            <Pet name="Doink" animal="Cat" breed="Mixed" />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
