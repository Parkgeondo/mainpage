import react from "react";
import styles from "./section.module.css";
import Section from "./Section";
import color from '../../img/color.svg';

import mock1 from '../../img/mock1.png';
import mock2 from '../../img/mock2.png';
import mock3 from '../../img/mock3.png';
import mock4 from '../../img/mock4.png';
import mock5 from '../../img/mock5.png';
import mock6 from '../../img/mock6.png';

function Mockup(props){
    return(
        <div className={`${styles.Section} ${styles.moc}`}>
            <Section text={'MOCKUP'}></Section>
            <div className={styles.grid}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Mockup;

//https://fontawesome.com/icons/bars?f=classic&s=solid