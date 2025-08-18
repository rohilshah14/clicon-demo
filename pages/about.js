import SeoHead from "../components/SeoHead";

export default function AboutPage() {
  return (
    <>
      <SeoHead
        title="About Us"
        description="Learn more about Clicon, our mission, vision, and the team dedicated to helping you find the best products to evolve your lifestyle."
      />

      <div className="about-wrap">
        <div className="container">
          <div className="about">
            <h1>This is an about page</h1>
          </div>
        </div>
      </div>
    </>
  );
}
