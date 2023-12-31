import react from "react";
import styles from "./section.module.css";
import Section from "./Section";
import Logo from '../../img/Logo.svg';
import grid from '../../img/grid.svg';

function Typography(props){
    return(
        <div className={`${styles.Section} ${styles.typo}`}>
            <Section text={'TYPOGRAPHY'}></Section>
            <h5 className={styles.sectionTitle}>18회 졸업전시의 메인 단어인 ‘유연'의 물결을 형상화 한 타이포를 제작하였습니다.</h5>
            <div className={styles.images}>
                <img src={Logo} alt="" />
                <img src={grid} alt="" />
            </div>
        </div>
    )
}

export default Typography;

//https://fontawesome.com/icons/bars?f=classic&s=solid