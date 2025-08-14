import Footer from "../Footer/footer";
import MainHeader from "../Header/main-header";
import Subscribe from "../Subscribe/subscribe";

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
