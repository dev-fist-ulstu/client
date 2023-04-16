import React from 'react';
import {useField, useFormikContext} from "formik";
import ReactQuill, {Quill} from "react-quill";
import ImageResize from 'quill-image-resize-module-react';
import 'react-quill/dist/quill.snow.css';
import {Tooltip} from "antd";

Quill.register('modules/imageResize', ImageResize);

const modules = {
    toolbar: [
        [{'header': [1, 2, 3, 4, 5, 6, false]}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
    ],
    imageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize']
    }
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

const ArdEditor = (props) => {
    const {handleChange} = useFormikContext();
    const [field, meta, helpers] = useField(props.name);
    return (
        <Tooltip title={meta.error}>
            <ReactQuill
                style={{marginTop: "1rem"}}
                modules={modules}
                formats={formats}
                onChange={(content, delta, source, editor) => {
                    const text = editor.getText();
                    handleChange({target: {name: props.name, value: content}});
                    handleChange({target: {name: props.name + "Text", value: text.replaceAll("\n", " ").replaceAll(/[ ]+/g, " ")}});
                }}
                theme={"snow"}
                {...props}
            />
        </Tooltip>
    );
};

export default ArdEditor;
