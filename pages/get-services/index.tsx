import React from "react";

import GetServicesLayout from "./layout";
import { ServicesList } from "../../components/get-services";

export default function GetServices() {
  return (
    <GetServicesLayout>
      <ServicesList />
    </GetServicesLayout>
  );
}
