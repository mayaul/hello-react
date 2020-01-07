import React, {Component} from 'react';
import Subject from './Components/Subject'
import Navigation from './Components/Navigation'
import Control from './Components/Control'
import ReadContent from './Components/ReadContent'
import CreateContent from "./Components/CreateContent";
import UpdateContent from "./Components/UpdateContent";

class App extends Component {
  constructor(props) {
    super(props);
    // UI 영향을 주지 않는 값, 이 값이 state에 있다면 변경이 되었을때 불필요한 렌더링이 발생 할 수 있다.
    this.max_content_id = 3;
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
  getReadContent() {
    var i = 0;

    while(i < this.state.contents.length) {
      var data = this.state.contents[i];

      if (data.id === this.state.selected_content_id) {
        return data;
      }

      i++;
    }
  }
  getContent() {
    var _title, _desc, _article = null;
    var _content = this.getReadContent();

    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.sub;
      _article = <ReadContent title={_title} sub={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
      _article = <ReadContent title={_content.title} sub={_content.desc}></ReadContent>
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function (_title, _desc) {
        this.max_content_id = this.max_content_id + 1;
        var _contents = this.state.contents.concat({id:this.max_content_id, title:_title, desc: _desc});
        this.setState({contents: _contents})
      }.bind(this)}></CreateContent>
    } else if (this.state.mode === 'update') {
      _article = <UpdateContent data={_content} onSubmit={function (_title, _desc) {
        this.max_content_id = this.max_content_id + 1;
        var _contents = this.state.contents.concat({id:this.max_content_id, title:_title, desc: _desc});
        this.setState({contents: _contents})
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }
  render() {
    console.log("app render");

    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage={function() { this.setState({mode:'read'}) }.bind(this)}></Subject>
        <Navigation data={this.state.contents} onChangePage={function(_id) { this.setState({selected_content_id:Number(_id)}) }.bind(this)}></Navigation>
        <Control onChangeMode={function(_mode) {

          if (_mode === 'delete') {
            if (window.confirm("really?")) {
              var _contents = Array.from(this.state.contents)
              var i = 0;

              while(i < _contents.length) {

                if (_contents[i].id === this.state.selected_content_id) {
                  _contents.splice(i, 1);
                  break;
                }
                i++;
              }

              this.setState({
                mode: 'welcome',
                contents: _contents
              })
            }
          } else {
            this.setState({mode: _mode})
          }
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
