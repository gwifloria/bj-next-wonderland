import { AuthProvider } from "@/context";
import type { AppProps } from "next/app";
import "../../public/antd.min.css";

const App = ({ Component, pageProps }: AppProps) => (
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
);

export default App;
