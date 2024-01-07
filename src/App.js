import './App.css';
import Editor from './components/Editor';
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { useState, useEffect } from "react";
import useLocalStorage from './hook/useLocalStorage';

function App() {
  const [state1, setState1] = useState(true)
  const [state2, setState2] = useState(true)
  const [state3, setState3] = useState(true)
  const [html_edit, setHtml] = useLocalStorage('html', '')
  const [css_edit, setCss] = useLocalStorage('css', '')
  const [js_edit, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html_edit}</body>
          <style>${css_edit}</style>
          <script>${js_edit}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html_edit, css_edit, js_edit])

  function handleClick1() {
    setState1(!state1)
  }
  function handleClick2() {
    setState2(!state2)
  }
  function handleClick3() {
    setState3(!state3)
  }
  

  return (
    <div class="main-container">
      <div class="project-name">Code Editor &nbsp; &nbsp; &nbsp; &nbsp;  &lt;&gt; unlease your imagination&lt;/&gt;</div>
      <div class="Editor-section">
        <div class={`Editor ${state1 ? null : "collapsed"}`}>
          <button onClick={handleClick1}><i class={`fa fa-${state1? "minus":"plus"}`}></i> </button>
          <Editor
            title="HTML"
            language={html}
            value={html_edit}
            onChange={setHtml} />
        </div>
        <div class={`Editor ${state2 ? null : "collapsed"}`}>
          <button onClick={handleClick2} > <i class={`fa fa-${state2? "minus":"plus"}`}></i></button>
          <Editor
            title="CSS"
            language={css}
            value={css_edit}
            onChange={setCss}
          />
        </div>
        <div class={`Editor ${state3 ? null : "collapsed"}`}>
          <button onClick={handleClick3} > <i class={`fa fa-${state3? "minus":"plus"}`}></i></button>
          <Editor
            title="JAVASCRIPT"
            language={javascript}
            value={js_edit}
            onChange={setJs}
          />
        </div>
      </div>
      <div class="output">
        <iframe
          srcDoc={srcDoc}
          title='Output'
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
