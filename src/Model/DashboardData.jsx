// DashboardModel.js

const dashboardData = {
  likes: {
    today: 1500,
    yesterday: 1400,
    change: '+100',
  },
  comments: {
    today: 800,
    yesterday: 750,
    change: '+50',
  },
  followers: {
    total: 50000,
    new: 200,
  },
  charts: {
    monthlyLikes: {
      labels: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
      data: [
        1200, 1400, 1600, 1500, 1700, 1800, 
        1900, 2000, 2200, 2100, 2300, 2400
      ],
    },
    yearlyComments: {
      labels: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
      data: [
        700, 800, 750, 900, 850, 950, 
        1000, 1100, 1050, 1200, 1150, 1300
      ],
    },
  },
  engagementRate: 0.65,
  audienceDemography: {
    gender: {
      male: 35,
      female: 55,
      other: 15,
    },
    ageGroups: {
      '16-25': {
        total: 10, // Adjusted to have the highest total
        gender: {
          male: 4, // 40% of total
          female: 3, // 30% of total
          other: 2, // 20% of total
        }
      },
      '25-35': {
        total: 7, // Adjusted to have a smaller total
        gender: {
          male: 3, // Approximately 42.86% of total
          female: 2, // Approximately 28.57% of total
          other: 2, // Approximately 28.57% of total
        }
      },
      '35-55': {
        total: 5, // Adjusted to have a smaller total
        gender: {
          male: 2, // 40% of total
          female: 2, // 40% of total
          other: 1, // 20% of total
        }
      },
      '55+': {
        total: 3, // Adjusted to have the smallest total
        gender: {
          male: 1, // 33.33% of total
          female: 1, // 33.33% of total
          other: 1, // 33.33% of total
        }
      }
    
    },
    topLocations: [
      { country: 'USA', visitors: 1500, change: '+10%' },
      { country: 'UK', visitors: 1200, change: '-5%' },
      { country: 'Canada', visitors: 1000, change: '+20%' },
      { country: 'Australia', visitors: 900, change: '-8%' },
      { country: 'Germany', visitors: 800, change: '+15%' },
      { country: 'France', visitors: 750, change: '+12%' },
      { country: 'Japan', visitors: 700, change: '+9%' },
      { country: 'Brazil', visitors: 600, change: '-3%' },
      { country: 'India', visitors: 550, change: '+25%' },
      { country: 'China', visitors: 500, change: '-12%' },
    ],
  },
  posts: [
    { id: 1, title: 'Post 1', likes: 300, comments: 150, shares: 50 },
    { id: 2, title: 'Post 2', likes: 250, comments: 120, shares: 40 },
    { id: 3, title: 'Post 3', likes: 200, comments: 100, shares: 30 },
    { id: 4, title: 'Post 4', likes: 180, comments: 90, shares: 25 },
    // Add more posts here...
  ],
  postActivity: [
    { id: 1, text: ' Success can be achieved by being bold enough...', date: 'Mar 30', rate:"1.1k",image: "" },
    { id: 2, text: ' Knowing what to do can never be okay, you have to...', date: 'Mar 21', rate:"3.1k", image: "" },
    { id: 3, text: ' Success can be achieved by being bold enough...', date: 'Mar 22', rate:"3.1k", image: "" },
    // Add more post activity data here...
  ]
};



export default dashboardData;
