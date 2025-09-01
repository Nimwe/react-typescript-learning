
// TODO import du module CSS propre à ce composant
// Plus d'informations sur le CSS modulaire : https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
import styles from './UserCard.module.css'; // Import css modules stylesheet as styles

// TODO ajouter toutes les interface nécessaire à la représentation des données utilisateur de la web API suivante : https://jsonplaceholder.typicode.com/users
// Plus d'information sur comment faire des objets imbriqués en Typescript : https://www.geeksforgeeks.org/how-to-define-interfaces-for-nested-objects-in-typescript/
export interface Coordinates {
    lat: string,
    lng: string
}

// TODO ajouter les interfaces manquantes

export interface User {
    // TODO compléter cette interface
    // techniquement, elle doit contenir des informations similaires à ce qui est renvoyé par l'API utilisée
    // le endpoint utilisé est le suivant : https://jsonplaceholder.typicode.com/users
}

export const UserCard = ({ user } : { user: User }) => {

    return (
        <div className={ styles.userCard }>
            {/* TODO compléter le code pour interface graphique */}
        </div>
    )
}
