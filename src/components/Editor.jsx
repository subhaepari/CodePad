import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

export default function Editor(props) {
  const { language, displayName, value, onChange } = props;

  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className={`editor-container ${isOpen ? "" : "collapsed"}`}>
        <div className="editor-title">
          {displayName}
          <button
            className="btn-expand-collapse"
            onClick={() => setIsOpen((prevOpen) => !prevOpen)}
            type="button"
          >
            <FontAwesomeIcon icon={isOpen ? faCompressAlt : faExpandAlt} />
          </button>
        </div>

        <ControlledEditor
          onBeforeChange={(editor, data, value) => {
            onChange(value);
          }}
          value={value}
          className="code-mirror-wrapper"
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme: "material",
            lineNumbers: true,
          }}
        />
      </div>
    </>
  );
}
