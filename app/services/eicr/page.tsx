import type { Metadata } from "next"; import { serviceBySlug } from "../../service-data"; import ServicePage from "../service-page";
export const metadata:Metadata={title:"Commercial EICR Reports | Commercial EPC Direct",description:serviceBySlug.eicr.description}; export default function Page(){return <ServicePage service={serviceBySlug.eicr}/>}
