import { useRouter } from "next/router";

export default function FilteredProductPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  const filterData = router.query.slug;
  console.log(filterData);

  return <div>Hello Every One</div>;
}
