import { ServicesList } from "@/components/get-services";
import { BLACK } from "@/src/styles/constants";
import { Header } from "@/components/shared/header";
import { Meta } from "@/components/meta";
import { metadata } from "@/src/app/metadata";

export default function GetServices() {
  return (
    <>
      <Meta
        title={metadata.GetServices.title}
        description={metadata.GetServices.description}
      />
      <Header
        layout={{
          mobileHeight: "150px",
          tabletHeight: "150px",
          desktopHeight: "150px",
          isHeaderTop: true,
        }}
        background={{
          backColor: BLACK,
        }}
        content={{
          titleStart: "GET OUR SERVICES",
        }}
      />

      <ServicesList />
    </>
  );
}
