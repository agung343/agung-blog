import classes from './Features.module.css'

export default function Features({title, description}) {
    return (
        <article className={classes.feature}>
            <h1>{title}</h1>
            <p>{description}</p>
        </article>
    )
}