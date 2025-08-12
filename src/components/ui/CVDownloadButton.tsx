import { Download } from "lucide-react";
import { Button } from "./button";

const CVDownloadButton = () => {
  return (
    <Button
      size="sm"
      className="rounded-full lg:flex border border-foreground/20"
      asChild
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
