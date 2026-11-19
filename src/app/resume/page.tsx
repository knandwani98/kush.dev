import { SOCIALS_DATA } from "@/data";
import { permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
// import { DownloadResumeButton } from "@/components/DownloadResumeButton";
// import { Layout } from "@/components/Layout";
// import { Resume } from "@/components/Resume";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Kushal Nandwani, a React Native and full-stack engineer.",
  alternates: {
    canonical: "https://kushalnandwani.vercel.app/resume",
  },
};

const ResumePage = () => {
  return permanentRedirect(SOCIALS_DATA.find((social) => social.label === "Resume")?.href as string);
  // return (
    // <Layout title="my resume." actions={<DownloadResumeButton />}>
    //   <Resume />
    // </Layout>
  // );
};

export default ResumePage;
