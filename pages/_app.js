import '../styles/globals.css';

// Swiper styles need to be imported globally
import 'swiper/css';
import 'swiper/css/pagination';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
