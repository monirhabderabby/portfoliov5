import { Download } from "lucide-react";
import { Button } from "./button";

const CVDownloadButton = () => {
  return (
    <Button
      size="sm"
      className="rounded-full  lg:flex border border-foreground/20"
      asChild
    >
      <a
        target="_blank"
        href="Monir_Hossain_Resume_2025.pdf"
        download="Monir_Hossain_Resume_2025.pdf"
      >
        Download CV
        <Download className="w-4 h-4 ml-1" />
      </a>
    </Button>
  );
};

export default CVDownloadButton;
