import logo from './logo.svg';
import './App.css';
import MDEditor from '@uiw/react-md-editor';
import {useState} from "react";


function App() {
    // const fs = require("fs");

    // const data = 'test';
    const [mdInfo, setMdInfo] = useState(null);

    const createMarkDown = () => {
        // fs.writeFileSync("test.txt", data);
    }


  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*</header>*/}
        <div className="markdownDiv" data-color-mode="light" style={{padding:15}}>
            <MDEditor.Markdown
                style={{ padding: 10 }}
                source={mdInfo}
            />
        </div>
        <div className="markarea">
            <div data-color-mode="light">
                <MDEditor
                    height={400}
                    value={mdInfo}
                    onChange={setMdInfo}
                />
                <button onClick={createMarkDown}>
                    생성
                </button>
            </div>
        </div>
    </div>
  );
}

export default App;
