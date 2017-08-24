import React from 'react';
import ChildComponent from './ChildComponent'

export default class ParentComponent extends React.Component {

    render() {
        return (
            <div className="exampleClass">
                <ChildComponent />                
            </div>
        )
    }
}