import Footer from "../Footer/footer.jsx";
import MainHeader from "../Header/main-header.jsx";
import Subscribe from "../Subscribe/subscribe.jsx";

export default function Layout(props) {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
      <Subscribe />
      <Footer />
    </>
  );
}
