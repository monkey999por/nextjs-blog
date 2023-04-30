import global from "../styles/global.css";
import ErrorBoundary from "../components/ErrorBoundary";

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary fallback={<>エラーが発生してErrorBoundaryでキャッチ</>}>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
