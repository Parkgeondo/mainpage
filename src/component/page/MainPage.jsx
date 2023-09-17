import react, {useState, useEffect} from "react";
import styles from "./Page.module.css";
import { useNavigate } from "react-router-dom";

import Video from '../ui/Video';
import MainBottom from "../ui/MainBottom";
import Concept from "../section/Concept";
import Typography from "../section/TYPOGRAPHY";
import Designsystem from "../section/DESIGN_SYSTEM";
import Symbol from "../section/SYMBOL";
import Variation from "../section/VARIATION";
import Mockup from "../section/MOCKUP";
import Credit from "../section/CREDIT";
import Footer from "../ui/footer";


function MainPage(props){
    const [showMainBottom, setShowMainBottom] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            // 현재 스크롤 위치가 0보다 크면 MainBottom을 숨기고, 0이면 다시 표시
            if (window.scrollY > 10) {
                setShowMainBottom(100);
                console.log(window.scrollY)
            } else {
                setShowMainBottom(0);
                console.log("올라옴")
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return(
        <div className={styles.Page_Wrapper}>
            <Video></Video>
            <MainBottom move={showMainBottom}></MainBottom>
            <Concept></Concept>
            <Typography></Typography>
            <Designsystem></Designsystem>
            <Symbol></Symbol>
            <Variation></Variation>
            <Mockup></Mockup>
            <Credit></Credit>
            <Footer></Footer>
        </div>
    )
}

export default MainPage;