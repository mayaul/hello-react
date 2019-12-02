import React, {Component} from 'react';

class UpdateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.data.title
        }
    }
	render() {
	    console.log(this.props.data);
        console.log("content render");
        return (
            <article>
                <h2>Update</h2>
                <form action="/create_process" method="post"
                    onSubmit={function(e) { e.preventDefault(); this.props.onSubmit(e.target.title.value, e.target.desc.value); }.bind(this)}
                >
                    <p><input type="text" name="title" placeholder="title" value={this.state.title} onChange={function (e) {
                        console.log(e.target.value);
                        this.setState({title: e.target.value})
                    }}/></p>
                    <p><textarea name="desc" placeholder="description"/></p>
                    <p><input type="submit"/></p>
                </form>
            </article>
        );
	}
}

export default UpdateContent