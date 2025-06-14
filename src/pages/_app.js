import { Analytics } from "@vercel/analytics/next"

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default App;
