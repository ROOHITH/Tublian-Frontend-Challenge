// DashboardViewModel.js
import React from 'react';
import dashboardData from '../Model/DashboardData';

const DashboardViewModel = () => {
  const calculateAverageEngagementRate = () => {
    const monthlyLikesData = dashboardData.charts.monthlyLikes.data;
    const yearlyCommentsData = dashboardData.charts.yearlyComments.data;

    // Calculate the total engagement for each month
    const totalEngagementPerMonth = monthlyLikesData.map((likes, index) => {
      const comments = yearlyCommentsData[index];
      return likes + comments;
    });

    // Calculate the average engagement rate for each month
    const averageEngagementRatePerMonth = totalEngagementPerMonth.map(total => total / 2);

    return averageEngagementRatePerMonth;
  };

  return calculateAverageEngagementRate();
};

export default DashboardViewModel;
