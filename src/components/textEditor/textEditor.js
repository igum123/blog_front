import React, { Component, useCallback, useEffect, useRef, useState } from "react";

import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist.css";

import Styles from "./container.module.css";


const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
);


function TextEditor({ onChange, value, onImageClick }) {
    const ref = useRef();
    const fileInputRef = useRef();
    const [internValue, setInternValue] = useState(null);
    const [showCode, setShowCode] = useState(false);
    const removeAttribute = useCallback((text, toRemove) => {
        let result = "";
        while (text.indexOf(toRemove) > -1) {
            result += text.substr(0, text.indexOf(toRemove));
            text = text.substr(text.indexOf(toRemove) + toRemove.length);
            text = text.substr(text.indexOf(';') + 1);
        }
        result += text;
        return result;
    }, []);

    const update = useCallback((e) => {
        if (onChange && e.target) {
            onChange(ref.current.innerHTML);
        }
    }, [onChange]);

    const commande = useCallback((name, argument) => {
        if (typeof argument === 'undefined') {
            argument = '';
        }
        switch (name) {
            case "createLink":
                argument = prompt("Lien de la redirection");
                break;
            case "video":
                argument = prompt("Code de la vidéo youtube");
                if (!argument) return;
                argument = `<div class="video">${argument}</div>`;
                name = 'insertHTML';
                break;
            case "image":
                let alt = prompt("Description de l'image");
                argument = `<div class="imgContainer"><img crossOrigin="anonymous" src="${argument}" alt="${alt}" /></div>`;
                name = 'insertHTML';
                break;
        }
        document.execCommand(name, false, argument);
    }, []);

    useEffect(() => {
        if (ref.current && value !== ref.current.innerHTML) {
            setInternValue(value);
        }
    }, [value]);

    return (
        <div className={Styles.textEditor}>
            <div className={Styles.tools}>
                <input type="button" disabled={showCode} className={`${Styles.tool} ${Styles.bold}`} value="B" onClick={() => {
                    commande('bold');
                }} />
                <input type="button" disabled={showCode} value="I" className={`${Styles.tool} ${Styles.italic}`} onClick={() => {
                    commande('italic');
                }} />
                <input type="button" disabled={showCode} value="U" className={`${Styles.tool} ${Styles.underline}`} onClick={() => {
                    commande('underline');
                }} />
                <button disabled={showCode} className={Styles.tool} onClick={() => {
                    commande('insertOrderedList');
                }} ><i className="fas fa-list-ol"></i></button>
                <button disabled={showCode} className={Styles.tool} onClick={() => {
                    commande('createLink');
                }} ><i className="fas fa-link"></i></button>

                {onImageClick && (<input
                    ref={fileInputRef}
                    className={Styles.fileInput}
                    type="file"
                    accept="image/jpeg, image/png"
                    onChange={async (e) => {
                        const file = e.target.files[0];
                        console.log(file)
                        const path = await onImageClick(file);
                        commande('image', path);
                    }}
                />)}

                {onImageClick && <button disabled={showCode} className={Styles.tool} onClick={async () => {
                    fileInputRef.current.click();
                }} ><i className="fa-solid fa-image"></i></button>}
                <button disabled={showCode} className={Styles.tool} onClick={() => {
                    commande('video');
                }} ><i className="fa-solid fa-video"></i></button>
                <button className={`${Styles.tool} ${showCode ? Styles.active : ''}`} onClick={() => {
                    setShowCode(!showCode);
                    setInternValue(value);
                }} ><i className="fa-solid fa-code"></i></button>
            </div>
            {!showCode && (
                <div className={Styles.content} id="page_editor"
                    contentEditable="true"
                    onInput={update}
                    suppressContentEditableWarning={true}
                    dangerouslySetInnerHTML={{ __html: internValue }}
                    ref={ref} onPaste={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        let html = e.clipboardData.getData('text/html');
                        html = removeAttribute(html, 'font-family');
                        html = removeAttribute(html, 'color:');
                        html = removeAttribute(html, 'font-size');
                        commande("insertHTML", html);
                    }} />
            )}

            {showCode && (
                <CodeEditor
                    value={internValue}
                    language="html"
                    placeholder="Please enter HTML code."
                    onChange={(evn) => { onChange(evn.target.value) }}
                    padding={15}
                    style={{
                        fontSize: 14,
                        backgroundColor: "transparent",
                        color: 'white'
                    }} />
            )}
        </div>

    );

}

export default TextEditor;