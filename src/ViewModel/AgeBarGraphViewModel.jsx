import { useMemo } from 'react';
import dashboardData from '../Model/DashboardData';

const AgeBarGraphViewModel = () => {
  const {audienceDemography}=dashboardData;
  const {ageGroups}=audienceDemography;
 
  const ageData = useMemo(() => {
    return Object.entries(dashboardData.audienceDemography.ageGroups).map(([ageGroup, gender]) => ( 
    {
    
      ageGroup,
      male: gender.gender.male,
      female: gender.gender.female,
      other: gender.gender.other
    }));
   
  }, []);

  return ageData;
};

export default AgeBarGraphViewModel;
