import { useEffect, useState, useRef } from "react";

import styles from "./ClockPage.module.css";

/**
 * Page présentant une horloge interactive
 */
const ClockPage = () => {

    // Déclarer un state permettant de stocker la date et l'heure actuelle
    // (Indice sur ce qu'il faudrait stocker : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
    const [time, setTime] = useState(new Date());
    const intervalRef = useRef<number | null>(null);


    /**
     * Fonction permettant de démarrer l'horloge
     */
    function handleStartClick() {
        if (!intervalRef.current) { // Vérification pour ne pas relancer un interval déjà actif
            intervalRef.current = setInterval(() => {
                setTime(new Date());

            }, 1000); // Toutes les secondes
        }
    }


    /**
     * Fonction permettant de stopper l'horloge
     */
    function handleStopClick() {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

    }

    /**
     * Rendu sur l'interface graphique
     */
    useEffect(() => {
        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current)
            }
        };
    }, []);

    return (
        <div className={styles.clockContainer}>
            <h1>Horloge intéractive</h1>
            <p>{time.toLocaleTimeString()}</p>

            <div className={styles.buttons}>
                <button onClick={handleStartClick}>Démarrer</button>
                <button onClick={handleStopClick}>Arrêter</button>

            </div>
        </div>
    );
}

export default ClockPage;