import classes from "./title.module.css";

export function Title() {
    return <div className={classes.container}>
        <div className={classes.wrapper}>
            <h2 className={classes.title}>Список тем обращения и продуктов</h2>
            <span className={classes.badge}>Найдено: 3</span>
        </div>
    </div>
}