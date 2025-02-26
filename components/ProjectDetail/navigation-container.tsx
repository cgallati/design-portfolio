import styled from "@emotion/styled";
import { responsiveValues, tokens } from "../../lib/theme";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const NavigationContainer = ({ children }) => {
    const  {ref} = useScrollAnimation({
        translateY: 0,
        duration: 1000,
        delay: 1000,
    });

  return (
    <StyledNavigationContainer ref={ref}>
      {children}
    </StyledNavigationContainer>
  );
};

const StyledNavigationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${responsiveValues("margin", {
      s: `${tokens.spacing[4]} 0`,
      m: `${tokens.spacing[6]} 1rem`,
      l: `${tokens.spacing[8]} 2rem`,
      xl: `${tokens.spacing[10]} 3rem`,
    })};
    gap: ${tokens.spacing[4]};

    a {
      text-decoration: none;
    }
  `;