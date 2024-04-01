import { useMemo } from "react";

const AudienceDemographyViewModel = ({ data }) => {
    console.log(data)
  const genderData = useMemo(() => {
    return Object.entries(data.gender).map(([gender, percentage]) => ({
      gender,
      percentage
    }));
  }, [data]);

  return genderData;
};

export default AudienceDemographyViewModel;
