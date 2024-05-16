import Navbar from "@/components/Navbar";
import Filter from "@/components/Filter";

import { LayoutContainer } from "@/components/styles";

const Layout = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P) => (
    <>
      <LayoutContainer>
        <Navbar />
        <Filter />
      </LayoutContainer>
      <Component {...props} />
    </>
  );
};

export default Layout;
