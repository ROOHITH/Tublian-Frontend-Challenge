import React from 'react';
import arrowicon from "../assets/arrow.svg";
import uparrow from "../assets/uparrow.svg";
import bar_graph from "../assets/bar_graph.svg";
import filterArraow from "../assets/filterArraow.svg";
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


import FilterArrowIcon from '../components/icons/FilterArrowIcon';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

import BarGraph from "../components/Chartjs/BarGraph";
import PostActivityComponent from "../components/PostActivityComponent";
import AudienceDemographyChart from '../components/Chartjs/AudienceDemographyChart';

import AudienceDemographyViewModel from '../ViewModel/AudienceDemographyChartViewModel';

import TableView from "../components/TableView";
import AgeBarGraphView from "../components/Chartjs/AgeBarGraphView";

import dashboardData from '../Model/DashboardData';
import AgeBarGraphViewModel from '../ViewModel/AgeBarGraphViewModel';


import { getPostActivityData } from '../ViewModel/postActivityViewModal';
const DashboardContent = () => {

    const ageData = AgeBarGraphViewModel();
    const [visibleItems, setVisibleItems] = useState(5);

    const handleSeeMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 5);
    };
    const { audienceDemography } = dashboardData;
    const genderData = AudienceDemographyViewModel({ data: audienceDemography });

    const postActivityData = getPostActivityData();

    const [selectedWeek, setselectedWeek] = useState('');

    const handleChange = (event) => {
        setselectedWeek(event.target.value);
    };
    return <>
        <div className='performance-metric-box'>
            <div className='performance-box-1'>
                <span className='performance-box-text'>Performance Metrics</span>
            </div>
            <div className='performance-box-2'>
                <button className="download-button">Download Summary</button>

            </div>
        </div>
        <div className='main-box-followers-like-comments'>
            <div className='main-box-sub-box followers-box'>
                <div className='sub-box-1'>
                    <span className='sub-box-text'>followers</span>
                    <img src={arrowicon} alt="followers expand Image" className='followers-expand-icon'></img>
                </div>
                <div className='sub-box-2'>
                    <span className='sub-box-text-2'>93.2k</span>
                </div>
                <div className='sub-box-3'>
                    <span className='sub-box-text-3'> <img src={uparrow} className='up-arraow'></img><span className='sub-box-percentage'>0.8%</span><span className='remain-text'>in the last 7 days </span></span>
                    <div className='sub-box-small-bar-graph'><img src={bar_graph} className='bar_graph'></img></div>
                </div>
            </div>
            <div className='main-box-sub-box like-box'>
                <div className='sub-box-1'>
                    <span className='sub-box-text'>Likes</span>
                    <img src={arrowicon} alt="followers expand Image" className='followers-expand-icon'></img>
                </div>
                <div className='sub-box-2'>
                    <span className='sub-box-text-2'>400k</span>
                </div>
                <div className='sub-box-3'>
                    <span className='sub-box-text-3'> <img src={uparrow} className='up-arraow'></img><span className='sub-box-percentage'>1.21%</span><span className='remain-text'>in the last 7 days </span></span>
                    <div className='sub-box-small-bar-graph'><img src={bar_graph} className='bar_graph'></img></div>
                </div>
            </div>
            <div className='main-box-sub-box comments-box'>
                <div className='sub-box-1'>
                    <span className='sub-box-text'>Comments</span>
                    <img src={arrowicon} alt="followers expand Image" className='followers-expand-icon'></img>
                </div>
                <div className='sub-box-2'>
                    <span className='sub-box-text-2'>289.1k</span>
                </div>
                <div className='sub-box-3'>
                    <span className='sub-box-text-3'> <img src={uparrow} className='up-arraow'></img><span className='sub-box-percentage'>2.7%</span><span className='remain-text'>in the last 7 days </span></span>
                    <div className='sub-box-small-bar-graph'><img src={bar_graph} className='bar_graph'></img></div>
                </div>
            </div>
        </div>
        <div className='main-container-2 container'>
            <div className='sub-container container-1'>
                <div class="filter-box">

                    <span className='filter-box-text'>Engagement Rates</span>

                    <FormControl variant="filled" sx={{ m: 1, minWidth: 120, margin: "0px" }} size="small">

                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-small"
                            value={selectedWeek}
                            onChange={handleChange}
                            classes={{ root: 'select-root' }} // Override default styles
                            IconComponent={FilterArrowIcon}
                            sx={{
                                '& .MuiSelect-filled': {
                                    borderRadius: '4px',

                                    width: '100px',
                                    fontFamily: "Aeonik",
                                    fontSize: "16px",
                                    fontWeight: "400",
                                    lineHeight: "19px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                    color: "black",
                                    padding: "8px 36px 8px 13px", // Adjust padding here (36px for the icon width)
                                    // Ensure that the selected value is visible
                                    '& option': {
                                        color: 'black',
                                    },
                                },
                                // Adjust padding for the input element inside the select box
                                '& .css-1gzkxga-MuiSelect-select-MuiInputBase-input-MuiFilledInput-input': {
                                    paddingRight: '36px', // Adjust this value as needed
                                },
                            }}
                        // Customize filled select
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>Weekly</MenuItem>
                            <MenuItem value={2}>Weekly</MenuItem>
                            <MenuItem value={3}>Weekly</MenuItem>
                            <MenuItem value={4}>Weekly</MenuItem>
                        </Select>
                    </FormControl>

                </div>
                <div className='sub-container sub-container-1'>

                    <BarGraph />
                </div>
                <div className='sub-container sub-container-2'>

                    <span className='sub-head'>Post Activity</span>
                    <List className='post-acivity-main-box' sx={{ width: '100%', }}>
                        {postActivityData.map(post => (
                            <PostActivityComponent key={post.id} text={post.text} date={post.date} rate={post.rate} />
                        ))}

                    </List>

                </div>
            </div>
            <div className='sub-container container-1'>
                <div class="filter-box">
                    <span className='sub-head' sx={{ marginTop: "10px !important" }}>Audience Demography</span>
                </div>

                <div className='sub-container sub-container-1'>
                    <Box sx={{ paddingTop: "16px", paddingRight: "32px", display: 'flex', flexDirection: 'row', gap: "20px", alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Box>
                            <span className="circle" style={{ backgroundColor: '#283350' }}></span>
                            <span className="label">Male</span>
                        </Box>
                        <Box>
                            <span className="circle" style={{ backgroundColor: '#0FA44A' }}></span>
                            <span className="label">Female</span>
                        </Box>
                        <Box>
                            <span className="circle" style={{ backgroundColor: '#FFF854' }}></span>
                            <span className="label">Other</span>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row ", marginTop: "39px" }}>
                        <Box sx={{ flex: 1, paddingLeft: "20px" }}><span className='legend-head-span'>Gender</span></Box>
                        <Box sx={{ flex: 1 }}><span className='legend-head-span'>Age Group</span></Box>
                    </Box>
                    <Box className="Audience-container-box"
                    sx={{ display: "flex", flexDirection: "row" }}>

                        <AudienceDemographyChart width={320} height={400} data={genderData} />
                        <AgeBarGraphView data={ageData} width={300} height={200} />
                    </Box>


                    <div className='sub-container sub-container-4' sx={{ padding: "32px" }}>
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: " space-between", alignItems: "flex-start" }}>
                            <span className='location-text'>Top Locations</span>
                            <Button variant="outlined" className='see-more'>See More</Button>
                        </Box>
                        <TableView itemsPerPage={visibleItems} />
                    </div>
                </div>

            </div>
            {/* <div className='sub-container container-2 demograph-box'>
                <div className='sub-container container-1'>
                    <div class="filter-box">
                        <span className='sub-head' sx={{ marginTop: "10px !important" }}>Audience Demography</span>
                    </div>
                </div>
                <div className='sub-container sub-container-3'>
                    <Box sx={{ paddingTop: "16px", display: 'flex', flexDirection: 'row', gap: "20px", alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Box>
                            <span className="circle" style={{ backgroundColor: '#283350' }}></span>
                            <span className="label">Male</span>
                        </Box>
                        <Box>
                            <span className="circle" style={{ backgroundColor: '#0FA44A' }}></span>
                            <span className="label">Female</span>
                        </Box>
                        <Box>
                            <span className="circle" style={{ backgroundColor: '#FFF854' }}></span>
                            <span className="label">Other</span>
                        </Box>
                    </Box>
                    <div className="doughnut-graph-container">
                        <AudienceDemographyChart data={audienceDemography} />
                
                        <AgeBarGraphView  />
                    </div>


                </div>
                <div className='sub-container sub-container-4' sx={{ padding: "32px" }}>
                    <Box sx={{ display: "flex", flexDirection: "row" ,justifyContent:" space-between",alignItems: "flex-start" }}>
                        <span className='location-text'>Top Locations</span>
                        <Button variant="outlined"className='see-more'>See More</Button>
                    </Box>
                    <TableView itemsPerPage={visibleItems} />
                </div>

            </div> */}
        </div>
    </>;
};
export default DashboardContent;