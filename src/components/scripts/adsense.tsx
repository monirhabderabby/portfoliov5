import Script from "next/script";

interface Props {
  pid: string;
}

const Adsense = ({ pid }: Props) => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pid}`}
      crossOrigin="anonymous"
    ></Script>
  );
};

export default Adsense;
