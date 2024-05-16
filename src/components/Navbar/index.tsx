import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Logo } from "@/components/Navbar/styles";

const Navbar = () => {
  const navigate = useNavigate();

  const redirectToHome = useCallback(() => {
    return navigate("/");
  }, [navigate]);

  return (
    <Container>
      <Logo onClick={redirectToHome}>Movie library - Future Mind</Logo>
    </Container>
  );
};

export default Navbar;
