import { SOCIALS_DATA } from "@/data";
import { permanentRedirect } from "next/navigation";

const ResumePage = () => {
    return permanentRedirect(SOCIALS_DATA.find((social) => social.label === "Resume")?.href as string);
};

export default ResumePage;