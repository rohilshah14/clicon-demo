import FooterBottom from "./footer-bottom.jsx";
import FooterTop from "./footer-top.jsx";
import classes from "./footer.module.css"

export default function Footer() {
    return (
        <div className={classes['footer-wrap']}>
            <FooterTop />
            <FooterBottom />
        </div>
    )
}