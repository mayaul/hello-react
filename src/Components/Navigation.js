import React, {Component} from 'react';

class Navigation extends Component {
    render() {
        console.log("content render");
        return (
            <nav>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </nav>
        );
    }
}

export default Navigation