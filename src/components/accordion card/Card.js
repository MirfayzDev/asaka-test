import file from "../../assests/file.svg";
import more from "../../assests/more.svg";

import styles from './card.module.css'
import classes from "../card/card.module.css";

export function Card() {
    return (
        <div className={styles.container}>
            <div className={styles['bottom-line']}>
                <div>
                    <h3 className={classes['sub-title']}>№</h3>
                    <p className={classes.text}>2.1</p>
                </div>
                <div>
                    <h3 className={classes['sub-title']}>Название</h3>
                    <p className={classes.text}><span><img src={file} alt="folder icon"/></span>Максимал фойда (Нац. валюта)</p>
                </div>
                <div className={classes.icons}>
                    <span><img className={classes.moreIcon} src={more} alt="more icon"/></span>
                </div>
            </div>
        </div>
    )
}