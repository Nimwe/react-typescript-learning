import { useRef } from "react";
import styles from "./DomModificationPage.module.css";

/**
 * Ce composant va vous permettre de vous entraîner à la modification dynamique du DOM.
 * 
 * L'objectif est de :
 * 1. implémenter de boutons qui permettent de changer la couleur d'un titre
 * 2. implémenter un bouton qui permet de changer le style d'un paragraphe
 * 
 * Pour faire référence à un élément du DOM dans un code React vous pourrez utiliser le hook "useRef"
 * 
 * useRef premet de déclarer une variable qui n'a pas pour objectif d'être affiché (ceci est dédié au state pour la réactivité)
 * 
 * useRef permet également de déclarer une référence vers un élément graphique et ainsi manipuler le DOM
 * Lisez la documentation suivante pour en apprendre plus : https://react.dev/reference/react/useRef#manipulating-the-dom-with-a-ref
 * 
 * @returns Le JSX du composant
 */
const DomModificationPage = () => {
    // références pour les éléments du DOM
    // référence vers le titre
    const titleRef = useRef<HTMLHeadingElement>(null);
    // TODO référence vers le paragraphe
    // Quel est le type "TypeScript" a utiliser ?

    /**
     * Change la couleur du titre
     * @param color La couleur concernée
     */
    const changeTitleColor = (color: string) => {
        // Le composant HTML pointé par la référence peut être récupéré grâce à <nom-ref>.current
        let title = titleRef.current;
        // vérification : le titre est-il bien présent ?
        if (title != null) {
            // TODO changement de la couleur
            // il est possible d'accéder au style d'un élément HTML en faisant :
            // title.style
            // ceci provient du JS.
            // plus d'information sur la modification de la couleur en JS : https://www.w3schools.com/jsref/prop_style_color.asp
            
        }
    };

    /**
     * Change la classe du paragaphe.
     * 
     * Deux classes possibles :
     * - normal
     * - highlighted
     * 
     * Attention de bien garder la classe "paragraph"
     */
    const toggleParagraphStyle = () => {
        // tentative de récupération de l'élément HTML paragraphe
        //let paragraph = ?????;

        //if (paragraph != null) {
            // il est possible d'activer ou désactiver une classe en uilisant la méthode JS "toggle"
            // exemple d'utilisation : https://www.w3schools.com/howto/howto_js_toggle_class.asp

            // vérification si classe "highlighted" présente
            //const isHighlighted = paragraph.classList.contains(styles.highlighted);

            //if (isHighlighted) { // si c'est bien "highlighted"
                // TODO insérer un toggle pour passer en normal
                // paragraph.classList.toggle( ????????? )
            //} else {
                // TODO insérer un toggle pour passer en highlighted

           // }
       // }
    };

    return (
        <div className={styles.container}>
            <h1 ref={titleRef} className={styles.title}>
                Titre avec couleur modifiable
            </h1>
            <div className={styles.buttonGroup}>
                <button
                    className={styles.button}
                    onClick={() => changeTitleColor("red")}
                >
                    Rouge
                </button>
                <button
                    className={styles.button}
                    onClick={() => changeTitleColor("blue")}
                >
                    Bleu
                </button>
                <button
                    className={styles.button}
                    onClick={() => changeTitleColor("green")}
                >
                    Vert
                </button>
            </div>
            <p className={styles.paragraph + ' ' + styles.normal}>
                Paragraphe avec style modifiable
            </p>
            <button
                className={styles.button}
                onClick={toggleParagraphStyle}
            >
                Basculer le style du paragraphe
            </button>
        </div>
    );
};

export default DomModificationPage;