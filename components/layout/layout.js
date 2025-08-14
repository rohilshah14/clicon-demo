import MainHeader from "./Header/main-header";

export default function Layout(props) {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
}
