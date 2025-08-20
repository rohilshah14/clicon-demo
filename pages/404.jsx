import Link from "next/link";
import Image from "next/image";
import Button from "../components/UI/button";

export default function NotFoundPage() {
  return (
    <div className="not-found-wrap">
      <div className="container">
        <div className="not-found">
          <Image
            src="/images/404.png"
            width={500}
            height={327}
            alt="404 page"
          />
          <div className="not-found-content">
            <h1 className="h3">404, Page not founds</h1>
            <p>
              Something went wrong. It’s look that your requested could not be
              found. It’s look like the link is broken or the page is removed.
            </p>
            <Button
              name="Go Back"
              left={true}
              right={false}
              cart={false}
              href="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
