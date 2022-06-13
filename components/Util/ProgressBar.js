import { useEffect, useState } from "react";
// next
import { useRouter } from "next/router";
import LoadingScreen from "./LoadingScreen";

// ----------------------------------------------------------------------

export default function ProgressBar() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    const handleStop = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return <>{loading && <LoadingScreen />}</>;
}
