import Authentication from "@/modules/authentication/authentication";
import NavigationHeader from "@/themes/components/navigation-header/navigation-header";
import React from "react";

function page() {
  return (
    <div style={{ height: "100%" }}>
      <div style={{position:"absolute", top: "0px", width: "100%"}}>
      <NavigationHeader />
      </div>
      <Authentication />
    </div>
  );
}

export default page;
