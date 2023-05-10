import edit from "../../assests/edit.svg"
import deleteIcon from "../../assests/delete.svg"

import classes from "./options.module.css";

export function Options() {
    return <div className={classes.container}>
        <div className={`${classes.option} ${classes['option-active']}`}>
            <img src={edit} alt="edit icon"/>
            <p>Редактировать</p>
        </div>
        <div className={classes.option}>
            <img src={deleteIcon} alt="delete icon"/>
            <p>Удалить</p>
        </div>
    </div>
}