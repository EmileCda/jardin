import { CKEditor, } from "ckeditor4-react";



export function saveText(){

}

/**
 * this function do ...
 */
export default function Tomate() {

  
  return (
    <>
      <h1>Tomate</h1>
      <CKEditor
		initData={<p>This is a CKEditor 4 WYSIWYG editor instance created by ️⚛️ React.</p>}
	/>




<textarea
					id="editor-editor"
					className="binding-editor"
					
				/>
<button onClick={saveText}>save</button>
    </>
  );
}


