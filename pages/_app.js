// Import global CSS
import "../styles/main.css"; // Adjust the path to your CSS file as necessary

function MyApp({ Component, pageProps }) {
  // This function takes two props:
  // Component - the active page, so whenever you navigate between routes, Component will change to the new page.
  // pageProps - an object with the initial props that were preloaded for your page by one of Next.js' data fetching methods, if they were used.

  return <Component {...pageProps} />;
}

export default MyApp;
