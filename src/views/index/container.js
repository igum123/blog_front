import React, { useState } from "react";
import PropTypes from 'prop-types';

import styles from './container.module.css';

import Newsletters from "../../components/newsletters";

const propTypes = {
    domaine: PropTypes.string.isRequired
};

const defaultProps = {
};

function Index({ domaine }) {
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <h2>Développe des jeux-vidéo en javascript facilement</h2>
            </div>
            <div className={`${styles.blockContainer} ${styles.intro}`}>
                <div className={styles.part}>
                    <img className={styles.partImg} src={`${domaine}/img/jeux.png`} />
                </div>
                <div className={styles.part}>
                    <p>Plonge dans le monde fascinant du développement de jeux-vidéo en JavaScript et donne vie à tes idées les plus audacieuses !</p>
                    <p>Que tu sois un passionné de jeux-vidéo en herbe ou un développeur chevronné en quête de nouvelles compétences, notre site t'aidera à créer des expériences de jeu captivantes et innovantes.</p>
                </div>
            </div>
            <div className={styles.blackBackground}>
                <div className={`${styles.blockContainer} ${styles.advantage}`}>
                    <div className={styles.block}>
                        <div className={styles.img}><i className="fa-solid fa-gear"></i></div>
                        <p>Découvre les secrets des mécaniques de jeu, maîtrise les technologies les plus avancées et laisse ta créativité s'épanouir.</p>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.img}><i className="fa-solid fa-users"></i></div>
                        <p>Rejoins-nous dès maintenant et embarque pour un voyage passionnant vers l'univers magique du développement de jeux-vidéo en JavaScript.</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.blockContainer} ${styles.whoiam}`}>
                <p className={styles.subtitle}>Qui suis-je ?</p>
                <img className={styles.whoiamImg} src={`${domaine}/img/loic.jpg`} />
                <div>
                    <p>Je m'appelle Loïc, je suis développeur web depuis plus de 8 ans et j'aime les burgers, les jeux de société et les jeux-vidéo.</p>
                    <br />
                    <p>Ma première fois avec un jeu vidéo remonte à mes 6 ans, oui je suis précoce, c'était sur la Super Nintendo de mon père avec Super Mario Bros 3.</p>
                    <p>Mais mon premier coup de foudre fut Pokémon Bleu quelques années plus tard.</p>
                    <br />
                    <p>Bien plus tard, mais vraiment bien plus tard, genre après le bac, j'ai découvert le développement informatique. Et le deuxième coup de foudre.</p>
                    <p>Car oui, je me suis dit "Oh trop bien, je vais pouvoir développer mes propres jeux-vidéo".</p>
                    <p>Aimant toujours Pokémon, j'ai entrepris de faire mon propre jeu Pokémon.</p>
                    <br />
                    <p>Comme on peut s'y attendre, je ne suis pas allé au bout du projet. Ce type de projet est trop complexe lorsque l'on commence seulement le développement de jeux-vidéo.</p>
                    <br />
                    <p>Du coup, je me suis retranché sur des petits jeux du genre Snake et Space Invader, beaucoup plus accessibles pour un développeur débutant.</p>
                    <br />
                    <p>Du coup, tu dois te demander pourquoi je suis développeur web et non développeur dans le jeu vidéo ?</p>
                    <p>Eh bien, c'est assez simple. Quand j'ai commencé à travailler, il n'y avait pas beaucoup de postes de développeur dans le jeu vidéo. Et quand je me suis renseigné, travailler dans le domaine du jeu vidéo est pour les passionnés et quand on est passionné, on est payé une misère, contrairement au développement web.</p>
                    <p>Du coup, le développement de jeux-vidéo est resté une passion pendant mon temps libre.</p>
                </div>
            </div>
            <Newsletters />
        </div>
    );
}

Index.propTypes = propTypes;
Index.defaultProps = defaultProps;

export default Index;