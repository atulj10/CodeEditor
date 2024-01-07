import { useCallback, useState } from 'react';
import './index.css'
import CodeMirror from "@uiw/react-codemirror";


function Editor(props) {
    const{
        title,
        language,
        value,
        onChange
    }=props
    
    const handleChange=useCallback((value)=>{
        onChange(value)
    },[])

    console.log(value)

    return (
        <div>
            <div class="title">
               {title} 
            </div>
            <div class="edit-card">
                <CodeMirror
                    value={value}
                    theme="dark"
                    extensions={[language(true)]}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default Editor