import React, { useEffect, useState } from "react";

import Styles from './container.module.css';

import Button from '../../../components/inputs/button';
import Text from '../../../components/inputs/text';
import Api from '../../../services/api';
import DateService from '../../../services/date';

import TextEditor from "../../../components/textEditor/textEditor";

const propTypes = {
};

const defaultProps = {
};

function Article() {
    const nowPlusOneWeek = new Date();
    nowPlusOneWeek.setDate(nowPlusOneWeek.getDate() + 7);
    nowPlusOneWeek.setHours(7, 0, 0, 0);
    const [articleToShow, setArticleToShow] = useState({
        title: '',
        description: '',
        url: '',
        content: '',
        visibledDate: nowPlusOneWeek
    });
    const [file, setFile] = useState(null);
    const [messageBtn, setMessageBtn] = useState('Sauvegarder');
    const [error, setError] = useState('');
    useEffect(() => {
        const urlArticle = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
        if (urlArticle) {
            Api.get(`/api/v1/blog/article/${urlArticle}`).then((result) => {
                if (result.response.data.visibledDate) {
                    result.response.data.visibledDate = new Date(result.response.data.visibledDate);
                    console.log(result.response.data)
                    setArticleToShow(result.response.data);
                } else {

                }
            });
        }
    }, []);
    return (
        <div className={Styles.container}>
            <Button onClick={() => {
                window.history.back();
            }}>Retour</Button>
            <div className={Styles.split}>
                <div className={Styles.part}>
                    <p className={Styles.label}>Titre affiché dans les moteurs de recherche</p>
                    <Text value={articleToShow.title || ''} onChange={(value) => {
                        setArticleToShow({ ...articleToShow, title: value });
                    }} />
                    <p className={Styles.label}>Description affiché dans les moteurs de recherche</p>
                    <Text value={articleToShow.description || ''} onChange={(value) => {
                        setArticleToShow({ ...articleToShow, description: value });
                    }} />
                    <p className={Styles.label}>Date de diffusion de l'article</p>
                    <Text type="datetime-local" value={DateService.convertToInput(articleToShow.visibledDate)} onChange={(value) => {
                        console.log(value)
                        const date = new Date(value);
                        date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
                        setArticleToShow({ ...articleToShow, visibledDate: date });
                    }} />
                </div>
                <div className={Styles.part}>
                    <p className={Styles.label}>URL de l'article</p>
                    <Text value={articleToShow.url || ''} onChange={(value) => {
                        console.log(articleToShow)
                        setArticleToShow({ ...articleToShow, url: value });
                    }} />
                    <input
                        id="upload"
                        className={Styles.fileInput}
                        type="file"
                        onChange={(e) => {
                            setFile(e.target.files[0]);
                        }}
                    />
                    {file && (<img className={Styles.img} src={URL.createObjectURL(file)} />)}
                    {!file && articleToShow.img && (<img className={Styles.img} crossOrigin="anonymous" src={`${Api.apiUrl}/api/img/${articleToShow.img}`} />)}
                </div>
            </div>
            <p className={Styles.label}>Contenue de l'article</p>
            <TextEditor
                value={articleToShow.content || ''}
                onImageClick={async (file) => {
                    const response = await Api.upload('/api/v1/blog/img', [file]);
                    return `${Api.apiUrl}/api/img/${response.response.data}`;
                }}
                onChange={(value) => {
                    setArticleToShow({ ...articleToShow, content: value });
                }} />
            <p className={Styles.error}>{error}</p>
            <Button onClick={async () => {
                if (articleToShow.title && articleToShow.description && articleToShow.url && articleToShow.content) {
                    setError('');
                    let result;
                    const files = [];
                    if (file) {
                        files.push(file);
                    }
                    result = await Api.upload('/api/v1/blog/articles', files, articleToShow);
                    console.log(result)
                    if (!articleToShow.id) {
                        setArticleToShow(result.response.data);
                    }
                    setFile(null);
                    setMessageBtn('Sauvegardé !');
                    setTimeout(() => {
                        setMessageBtn('Sauvegarder');
                    }, 1000 * 3);
                } else {
                    setError('Vous devez au moins remplir le title, la description, l\'url et le contenu !');
                }
            }}>{messageBtn}</Button>
        </div>
    );
}

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default Article;