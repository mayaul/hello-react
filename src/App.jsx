import React, {Component} from 'react';
import Subject from './Components/Subject'
import Navigation from './Components/Navigation'
import Control from './Components/Control'
import ReadContent from './Components/ReadContent'
import CreateContent from "./Components/CreateContent";

class App extends Component {
  constructor(props) {
    super(props);
    // UI 영향을 주지 않는 값, 이 값이 state에 있다면 변경이 되었을때 불필요한 렌더링이 발생 할 수 있다.
    this.max_content_id = 3;
    this.state = {
      mode:'create',
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

    var _title, _desc, _article = null;

    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.sub;
      _article = <ReadContent title={_title} sub={_desc}></ReadContent>
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
      _article = <ReadContent title={_title} sub={_desc}></ReadContent>
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function (_title, _desc) {
        this.max_content_id = this.max_content_id + 1;
        var _contents = this.state.contents.concat({id:this.max_content_id, title:_title, desc: _desc});
        this.setState({contents: _contents})
      }.bind(this)}></CreateContent>
    }
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage={function() { this.setState({mode:'read'}) }.bind(this)}></Subject>
        <Navigation data={this.state.contents} onChangePage={function(id) { this.setState({selected_content_id:Number(id)}) }.bind(this)}></Navigation>
        <Control onChangeMode={function(mode) { this.setState({mode: mode})}.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;