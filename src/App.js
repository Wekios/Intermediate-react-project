import React from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './components/SearchParams';

const App = () => {
    return (
        <div>
            <h1 className="something-important">Adopt me!</h1>
            <SearchParams />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
