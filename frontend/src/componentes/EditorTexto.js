import ReactDOM from "react-dom";
import React from "react";

import FroalaEditor from "react-froala-wysiwyg";

import "froala-editor/css/froala_style.css";

import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <FroalaEditor config={{
          toolbarButtons: ['bold', 'italic', 'underline'],

        }} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);