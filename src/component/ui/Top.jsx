import react from "react";
import styles from "./Ui.module.css";
import Logo from '../../img/Logo.svg';

function TopUi(props){
    return(
        <div className={styles.TopUi}>
            <div className={styles.Flex}>
                <img src={Logo} alt="BigCo Inc. logo"/>
                <div className={styles.Menu}>
                    <span>ABOUT</span>
                    <span>PROJECTS</span>
                    <span>DESIGNERS</span>
                    <span>GUESTBOOK</span>
                </div>
            </div>
        </div>
    )
}

export default TopUi;