"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Download, Loader2 } from "lucide-react";
import { useState } from "react";

export const DownloadResumeButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    const resume = document.getElementById("resume");
    if (!resume || isDownloading) return;

    setIsDownloading(true);

    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);

      const host = document.createElement("div");
      host.setAttribute("aria-hidden", "true");
      host.style.position = "fixed";
      host.style.left = "0";
      host.style.top = "0";
      host.style.width = "210mm";
      host.style.zIndex = "-1";
      host.style.pointerEvents = "none";
      host.style.background = "#ffffff";

      const clone = resume.cloneNode(true) as HTMLElement;
      clone.id = "resume-pdf";
      clone.style.boxShadow = "none";
      clone.style.width = "210mm";
      clone.style.maxWidth = "210mm";
      clone.style.height = "auto";
      clone.style.aspectRatio = "auto";
      clone.style.margin = "0";
      clone.style.fontWeight = "400";
      host.appendChild(clone);
      document.body.appendChild(host);

      try {
        await new Promise((resolve) =>
          requestAnimationFrame(() => requestAnimationFrame(resolve))
        );

        const canvas = await html2canvas(clone, {
          scale: 2,
          backgroundColor: "#ffffff",
          useCORS: true,
          width: clone.offsetWidth,
          height: clone.scrollHeight,
          windowWidth: clone.offsetWidth,
          windowHeight: clone.scrollHeight,
        });

        const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
        const pageWidth = 210;
        const pageHeight = 297;
        let imgWidth = pageWidth;
        let imgHeight = (canvas.height * imgWidth) / canvas.width;
        let offsetX = 0;

        if (imgHeight > pageHeight) {
          const fitted = pageHeight / imgHeight;
          imgWidth *= fitted;
          imgHeight = pageHeight;
          offsetX = (pageWidth - imgWidth) / 2;
        }

        pdf.addImage(canvas.toDataURL("image/jpeg", 0.92), "JPEG", offsetX, 0, imgWidth, imgHeight);
        pdf.save("Kushal-Nandwani-Resume.pdf");
      } finally {
        host.remove();
      }
    } catch (error) {
      console.error("Failed to download resume", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="inline-flex">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={handleDownload}
            disabled={isDownloading}
            aria-label="Download resume"
            className="liquid-glass size-12 rounded-full opacity-90 hover:opacity-100"
          >
            {isDownloading ? (
              <Loader2 className="size-5 animate-spin opacity-70" />
            ) : (
              <Download className="size-5 opacity-70" />
            )}
          </Button>
        </span>
      </TooltipTrigger>
      <TooltipContent sideOffset={8}>
        Download PDF
        <TooltipArrow />
      </TooltipContent>
    </Tooltip>
  );
};
