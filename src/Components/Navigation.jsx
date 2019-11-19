import React, {Component} from 'react';

class Navigation extends Component {
    render() {
        console.log("content render");
        var lists = [];
        var data = this.props.data;
        var i = 0;
        
        while(i < data.length) {

            lists.push(
                <li key={data[i].id} title={data[i].desc}>
                    <a href={"/content/"+data[i].id} data-id={data[i].id} onClick={function(e) { e.preventDefault(); this.props.onChangePage(e.target.dataset.id); }.bind(this)}>
                        {data[i].title}
                    </a>
                </li>
            )
            i++;
        }

        return (
            
            <nav>
                <ul>
                   {lists}
                </ul>
            </nav>
        );
    }
}

export default Navigation