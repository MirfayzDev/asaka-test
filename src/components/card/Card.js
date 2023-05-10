import folder from '../../assests/folder.svg'
import arrow from '../../assests/arrow.svg'
import more from '../../assests/more.svg'

import classes from "./card.module.css";

export function Card() {
    return <div className={classes.container}>
        <div>
            <h3 className={classes['sub-title']}>№</h3>
            <p className={classes.text}>1</p>
        </div>
        <div>
            <h3 className={classes['sub-title']}>Название</h3>
            <p className={classes.text}><span><img src={folder} alt="folder icon"/></span>Mastercard</p>
        </div>
        <div>
            <h3 className={classes['sub-title']}>Очередность</h3>
            <p className={classes.text}>1</p>
        </div>
        <div>
            <h3 className={classes['sub-title']}>Подкатегории</h3>
            <p className={classes.text}>Mastercard (Standart) / Mastercard (World) / Mastercard (Platinum) / Mastercard (Gold) / Master card</p>
        </div>
        <div className={classes.icons}>
            <span className={classes.number}>12</span>
            <span className={classes.arrowIcon}><img src={arrow} alt="arrow icon"/></span>
            <span><img className={classes.moreIcon} src={more} alt="more icon"/></span>
        </div>
    </div>
}