import "@/styles/globals.scss";
import { Exo_2, Montserrat, Roboto } from "next/font/google";
const montserrat = Exo_2({
  subsets: ["latin"],
  adjustFontFallback: false,
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={montserrat.className}>
      <Component {...pageProps} />
    </div>
  );
}
