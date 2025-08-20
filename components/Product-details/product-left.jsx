import Image from "next/image";
import classes from "./product-details.module.css";

export default function ProductLeft(props) {
    const {title, images} = props;
    return (
        <div className={classes.left}>
            <Image src={images} alt={title} width={616} height={584} />
        </div>
    )
}