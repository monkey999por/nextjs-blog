import { useEffect, useState } from "react";
import ErrorBoundary from "../components/ErrorBoundary";

const ErrorComponent = (): JSX.Element => {
  const a = undefined;
  a.hoge = <></>;
  return a.hoge;
};

export default function errorSample() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  });

  return (
    isMounted && (
      <ErrorBoundary fallback={<>エラーが発生しました。</>}>
        <ErrorComponent />
      </ErrorBoundary>
    )
  );
}
