import ReactDOM from "react-dom";
import React from "react";

import FroalaEditor from "react-froala-wysiwyg";

import "froala-editor/css/froala_style.css";

import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";

// Clase EditorTexto para usarlo como componente
class EditorTexto extends React.Component {
    render() {
        return (
            <div>
                <FroalaEditor config={{

'moreText': {

  'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']

},

'moreParagraph': {

  'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']

},

'moreRich': {

  'buttons': ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR']

},

'moreMisc': {

  'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],

  'align': 'right',

  'buttonsVisible': 2

}

}} />
            </div>
        );
    }
}

// Exporta el editor como componente
export default EditorTexto;