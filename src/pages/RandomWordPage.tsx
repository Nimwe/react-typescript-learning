import { useEffect, useState } from "react";

/**
 * Page d'entraînement permettant de comprendre l'utilisation des "useEffect"
 * 
 * Plus d'informations : https://fr.legacy.reactjs.org/docs/hooks-effect.html
 * 
 * Ce type de hook peut être considéré comme un déclencheur appelant une fonction donnée suivant l’état d’un composant.
 * Le cycle de vie d’un composant est composé de trois étapes :
 * - Mount : le montage. Il intervient quand une instance du composant est créée dans le DOM.
 * - Update : la mise à jour. Cette phase est déclenchée par un changement d'état du composant.
 * - Unmount : le démontage. C’est étape a lieu quand un composant est retiré du DOM.
 * 
 * 
 * TODO : 
 * Etudiez le code suivant et ajoutez des message utilisateurs en « alert() » à plusieurs niveaux (et uniquement en modifiant le code des fonctions anonymes passées aux « useEffect ».
 * Ajoutez l’affichage des messages suivants aux bon endroits du code :
 * - « Clic sur le bouton de génération de mot 1 »
 * - « Clic sur le bouton de génération de mot 2 »
 * - « Clic sur un des boutons de génération de mot »
 * 
 * ATTENTION : Veillez à ne pas afficher les alertes au chargement de la page.
 */
const RandomWordPage = () => {
    console.log("Rendering component...");
    const [firstWord, setFirstWord] = useState<string>("");
    const [secondWord, setSecondWord] = useState<string>("");

    useEffect(() => {
        // TODO mettre quelque chose ici
        // Question, quand se déclenche la fonction associée à ce "useEffect" ?
    }, [firstWord]);

    useEffect(() => {
        // TODO mettre quelque chose ici
        // Question, quand se déclenche la fonction associée à ce "useEffect" ?
    }, [secondWord]);

    useEffect(() => {
        // TODO mettre quelque chose ici
        // Question, quand se déclenche la fonction associée à ce "useEffect" ?
    }, []) // tableau de dépendances à des variables d'état vide ! Qu'est ce ça fait ?

    useEffect(() => {
        // TODO mettre quelque chose ici
        // Question, quand se déclenche la fonction associée à ce "useEffect" ?


        // Si dans une lambda de useEffect nous avons un "return" alors nous pouvons renvoyer une fonction de démontage
        // Cette fonction sera déclenchée lorsque le composant sera retiré du DOM (par exemple si nous changeons de page)
        return () => {
            // TODO : Mettre ici le code à exécuter lors du démontage
            // Par exemple : ajoutez un appel à la fonction Javascript « alert() » permettant d'indiquer un message particulier
        };
    });

    /**
     * Fonction utilisée pour générer un mot aléatoire lors du clic sur le bouton 1
     */
    const handleClick1 = () => {
        setFirstWord(generateRandomWord());
    };

    /**
     * Fonction utilisée pour générer un mot aléatoire lors du clic sur le bouton 1
     */
    const handleClick2 = () => {
        setSecondWord(generateRandomWord);
    };

    /**
     * Génère un mot aléatoire
     */
    const generateRandomWord = (): string => {
        return Math.random().toString(36).replace(/[^a-z]+/g, '');
    }

    return (<>
                <div> {firstWord} - {secondWord} </div>
                <button onClick={handleClick1}>Changer premier mot</button>
                <button onClick={handleClick2}>Changer second mot</button>
            </>
    );
}

export default RandomWordPage;