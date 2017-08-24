import React from 'react';
import { render } from 'react-dom';
import ParentComponent from './src/components/ParentComponent';

class App extends React.Component {
    render() {
        return(
            <div className="rootApp">
                <h2>Hello</h2>
                <h3>Children will be rendered below:</h3>
                <ParentComponent />
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));