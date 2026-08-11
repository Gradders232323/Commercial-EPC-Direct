import type { Metadata } from "next"; import { serviceBySlug } from "../../service-data"; import ServicePage from "../service-page";
export const metadata:Metadata={title:"TM44 Air Conditioning Inspections | Commercial EPC Direct",description:serviceBySlug["tm44-inspection"].description}; export default function Page(){return <ServicePage service={serviceBySlug["tm44-inspection"]}/>}
