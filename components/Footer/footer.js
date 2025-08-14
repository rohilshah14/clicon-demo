import FooterBottom from "./footer-bottom";
import FooterTop from "./footer-top";
import classes from "./footer.module.css"

export default function Footer() {
    return (
        <div className={classes['footer-wrap']}>
            <FooterTop />
            <FooterBottom />
        </div>
    )
}