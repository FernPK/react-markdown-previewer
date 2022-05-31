import './App.css';
import React from 'react';
import {marked} from 'marked';

const initialText = `# Heading #1
---
## Heading #2
---
This is __BOLD__ text.

> Blockquotes is here!

* List 1
* List 2
* List 3

create variable in JavaScript \`const num = 10;\`

\`\`\`
function addNumber(a, b) {
  return a + b;
}
\`\`\`
![cake icons](https://cdn-icons.flaticon.com/png/512/2682/premium/2682446.png?token=exp=1653894583~hmac=c2bde1307ab38cf2bb17548868fb1b0a)

[Cake icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/cake)`;

class Editor extends React.Component{
  constructor(){
    super();
    this.state = {
      input: initialText
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event){
    this.setState({
      input: event.target.value
    })
  }
  handleClick(){
    this.setState({
      input: ''
    });
  }
  render(){
    return (
      <div id='wrapper'>
        <div className='section' id='editor-section'>
          <div className='toolbar' id='editor-bar'>
            <h4>Editor</h4>
            <button onClick={this.handleClick} id='clear'>clear</button>
          </div>
          <textarea id='editor' value={this.state.input} onChange={this.handleChange}></textarea>
        </div>
        <Previewer input={this.state.input}/>
      </div>
    );
  }
}

class Previewer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    // const myRegex = new RegExp('\n|\r', 'g');
    // const returnSplit = this.props.input.split(myRegex);
    // //console.log(returnSplit);
    // for(let i=0; i<returnSplit.length; i++){
    //   if(returnSplit[i]===''){
    //     returnSplit[i] = '<br>';
    //   }
    //   else{
    //     returnSplit[i] = marked.parse(returnSplit[i]);
    //     //returnSplit[i] =returnSplit[i].replace(myRegex, '');
    //   }
    // }
    // console.log(returnSplit);
    // const html2 = returnSplit.join('');
    // console.log(html2);
    const html = marked.parse(this.props.input);
    //console.log(html);
    return (
      <div className='section' id='preview-section'>
        <div className='toolbar' id='preview-bar'>
          <h4>Preview</h4>
        </div>
        <div id='preview' dangerouslySetInnerHTML={{__html: html}}></div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Editor />
    </div>
  );
}

export default App;
