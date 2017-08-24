import React from 'react';

export default class ChildComponent extends React.Component {
    
    // constructor() {
    //     super(props);
    // }

    render() {
        return (
           <div>
                <h2>Child 1</h2>
                <h2>Child 2</h2>
                <h2>Child 3</h2>
           </div>
        )
    }
}