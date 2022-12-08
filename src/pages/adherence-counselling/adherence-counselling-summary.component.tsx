import React from "react";
import { EmptyStateComingSoon } from "@ohri/openmrs-esm-ohri-commons-lib";

const AdherenceSummary: React.FC<{ patientUuid: string }> = ({
  patientUuid,
}) => {
  const pageTitle = "Adherence Counselling Summary";

  return (
    <EmptyStateComingSoon displayText={pageTitle} headerTitle={pageTitle} />
  );
};

export default AdherenceSummary;
