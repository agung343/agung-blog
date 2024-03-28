import classes from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={classes.footerContainer}>
            <div className={classes.logo}>Agung</div>
            <p>Agung Wahyudi Blog</p>
        </footer>
    )
}