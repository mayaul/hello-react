import React, {Component} from 'react';
import Content from './Components/Content'
import Subject from './Components/Subject'
import Navigation from './Components/Navigation'
import Control from './Components/Control'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'welcome',
      selected_content_id: 2,
      subject:{title:'subject', sub:'subject message'},
      welcome:{title:'welcome', sub:'welcome message'},
      contents: [
        {id:1, title: '1 title', desc: '1 desc'},
        {id:2, title: '2 title', desc: '2 desc'},
        {id:3, title: '3 title', desc: '3 desc'}
      ]
    }
  }
  render() {
    console.log("app render");

    var _title, _desc = null;

    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.sub;
    } else if (this.state.mode === 'read') {
      var i = 0;

      while(i < this.state.contents.length) {
        var data = this.state.contents[i];

        if (data.id === this.state.selected_content_id) {

          _title = data.title;
          _desc = data.desc;  
          break;
        }

        i++;
      }
    }
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage={function() { this.setState({mode:'read'}) }.bind(this)}></Subject>
        <Navigation data={this.state.contents} onChangePage={function(id) { this.setState({selected_content_id:Number(id)}) }.bind(this)}></Navigation>
        <Control onChangeMode={function(mode) { this.setState({mode: mode})}.bind(this)}></Control>
        <Content title={_title} sub={_desc}></Content>
      </div>
    );
  }
}

export default App;