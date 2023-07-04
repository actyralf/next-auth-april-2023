import GlobalStyles from "../styles/GlobalStyles";
import {StyledContainer} from "../components/StyledContainer";
import {SessionProvider} from "next-auth/react";

function MyApp({Component, pageProps: {session, ...pageProps}}) {
  return (
    <>
      <GlobalStyles />
      <StyledContainer>
        <h1>🐟 Next Auth Demo 🐟</h1>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </StyledContainer>
    </>
  );
}

export default MyApp;
