import { sendGTMEvent } from "@next/third-parties/google";
import { Download } from "lucide-react";
import { Button } from "./button";

const CVDownloadButton = () => {
  const onDownloadClick = async () => {
    const userAgent = navigator.userAgent;
    const pageUrl = window.location.href;
    const referrer = document.referrer;
    const timestamp = new Date().toISOString();

    // Get IP and location info
    const ipData = await fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .catch(() => ({ ip: "unknown", country: "unknown", city: "unknown" }));

    // Send event to GTM
    sendGTMEvent({
      event: "CVDownload",
      ip: ipData.ip,
      country: ipData.country_name,
      city: ipData.city,
      userAgent,
      pageUrl,
      referrer,
      timestamp,
    });
  };
  return (
    <Button
      size="sm"
      className="rounded-full lg:flex border border-foreground/20"
      asChild
      onClick={onDownloadClick}
    >
      <a
        target="_blank"
        href="https://drive.google.com/uc?export=download&id=1e-1vgUY1l5Zy7DPHkVRJ4vBC811JEidn"
        download="Monir_Hossain_Resume_2025.pdf"
      >
        Download CV
        <Download className="w-4 h-4 ml-1" />
      </a>
    </Button>
  );
};

export default CVDownloadButton;

// added: resume
