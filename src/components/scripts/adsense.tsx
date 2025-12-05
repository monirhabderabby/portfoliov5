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

export const InfoLinks = () => {
  return (
    <>
      <Script type="text/javascript">
        {" "}
        var infolinks_pid = 3441994; var infolinks_wsid = 0;{" "}
      </Script>{" "}
      <Script
        type="text/javascript"
        src="//resources.infolinks.com/js/infolinks_main.js"
      ></Script>
    </>
  );
};
