import { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import BannerSlick from "../../config/slider";
import { getProducts } from "../../services/service";
import classes from "./banner.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function BannerSlider() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setError(null);
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (err) {
        setError("Failed to load products");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <section className={classes["banner-wrap"]}>
      <div className="container">
        <div className={classes.banner}>
          {isLoading && (
            <div className={classes.loading}>
              <div className={classes.spinner}></div>
            </div>
          )}

          {error && <p className={classes.error}>{error}</p>}

          {!isLoading && !error && (
            <Slider {...BannerSlick}>
              {products.map((product) => (
                <div key={product.id} className={classes.content}>
                  <div className={classes.left}>
                    <div className={classes.quote}>
                      The Smart Choice for Smart Living
                    </div>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <div className="cta">
                      <Link href="/" className="btn">
                        Shop now
                        <Image
                          alt="arrow-img"
                          width={24}
                          height={24}
                          src="/images/ArrowRight.svg"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className={classes.right}>
                    <Image
                      src={
                        product.image ||
                        product.images?.[0] ||
                        "/images/fallback.png"
                      }
                      alt={product.title}
                      width={368}
                      height={408}
                    />
                    <div className={classes["price-wrap"]}>
                      <div className={classes.price}>${product.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </section>
  );
}
