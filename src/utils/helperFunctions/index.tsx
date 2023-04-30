import { useEffect, useState } from "react";

export const randomArrayOfNumbers = (count: number) => {
  const randomNumbers: any = Array.from({ length: count }, () =>
    Math.floor(Math.random() * 100)
  );
  return randomNumbers(count);
};

export const randomIntNumbers = () => {
  const value = Math.floor(Math.random() * 100);

  return value;
};

export default function ClientOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  // State / Props
  const [hasMounted, setHasMounted] = useState(false);

  // Hooks
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Render
  if (!hasMounted) return null;

  return <div>{children}</div>;
}
// export function useScreenWidth() {
//   if (window !== undefined) {
//     const [screenWidth, setScreenWidth] = useState(window?.innerWidth);

//     useEffect(() => {
//       function handleResize() {
//         setScreenWidth(window?.innerWidth);
//       }
//       window.addEventListener("resize", handleResize);
//       return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     return screenWidth;
//   }
// }
