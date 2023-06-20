import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import {MDEditorProps} from "@uiw/react-md-editor";

const MDEditor = dynamic<MDEditorProps>(() => import("@uiw/react-md-editor"), {
    ssr: false,
});

const Markdown = ({...rest}: MDEditorProps) => {
    return (
        <MDEditor {...rest}/>
    )
}
export default Markdown;