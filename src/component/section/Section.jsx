import react from "react";
import styles from "./section.module.css";
import Video from "../ui/Video";

function Section(props){
    return(
        <div>
            <div className={styles.Section_title}>
                <span>{props.text}</span>
            </div>
        </div>
    )
}

export default Section;

//https://fontawesome.com/icons/bars?f=classic&s=solid