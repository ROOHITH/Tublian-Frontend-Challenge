// import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";

// const AudienceDemographyChart = ({ width, height, data }) => {
//   const svgRef = useRef();

//   // Function to handle mouseover event
//   function handleMouseOver(d, i) {
//     d3.select(this).select("path").transition().duration(100).attr("opacity", 0.7);
//   }

//   // Function to handle mouseout event
//   function handleMouseOut(d, i) {
//     d3.select(this).select("path").transition().duration(100).attr("opacity", 1);
//   }
//   useEffect(() => {

//     const svg = d3.select(svgRef.current);

//     // Remove existing elements before rendering
//     svg.selectAll("*").remove();

//     // Define the radius
//     const radius = Math.min(width, height) / 5;

//     // Create a pie generator
//     const pie = d3.pie().value((d) => d.percentage); // Use data.percentage

//     // Create an arc generator
//     const arc = d3.arc().innerRadius(radius * 0.8).outerRadius(radius);

//     // Generate pie chart data
//     const pieData = pie(data); // Use the passed data directly

//     // Append a group element for the pie chart
//     const pieGroup = svg.append("g").attr("transform", `translate(${105},${85})`);

//     const Tooltip = svg.append("div")
//     .style("opacity", 0)
//     .attr("class", "tooltip")
//     .style("background-color", "white")
//     .style("border", "solid")
//     .style("border-width", "2px")
//     .style("border-radius", "5px")
//     .style("padding", "5px");

//   const mouseover = function (d) {
//     Tooltip.style("opacity", 1);
//     d3.select(this).style("stroke", "black").style("opacity", 1);
//   };

//   const mousemove = function (d) {
//     Tooltip.html(`The exact value of<br>this cell is: ${d.value}`)
//       .style("left", `${d3.event.pageX + 70}px`)
//       .style("top", `${d3.event.pageY}px`);
//   };

//   const mouseleave = function (d) {
//     Tooltip.style("opacity", 0);
//     d3.select(this).style("stroke", "none").style("opacity", 0.8);
//   };
//     // Append arcs for each slice of the pie chart
//     const arcs = pieGroup.selectAll(".arc").data(pieData).enter().append("g").attr("class", "arc").on("mouseover", handleMouseOver)
//     .on("mouseover", mouseover)
//     .on("mousemove", mousemove)
//     .on("mouseleave", mouseleave);
//       ;

//     // Render each arc
//     arcs
//       .append("path")
//       .attr("d", arc)
//       .attr("fill", (d, i) => {
//         // Use a color scale or array of colors for different genders
//         const colors = ["#283350", "#0FA44A", "#FFF854"]; // Example colors
//         return colors[i];
//       })
//       .attr("stroke", "")
//       .style("stroke-width", "1px");

//     // Append text labels
//     arcs
//       .append("text")
//       .attr("transform", function (d) {
//         var pos = arc.centroid(d);
//         var midangle = d.startAngle + (d.endAngle - d.startAngle) / 3;
//         pos[0] = radius * 0.95 * (midangle < Math.PI ? 1.2 : -1.5);
//         return "translate(" + pos + ")";
//       })
//       .attr("dy", "0.45em")
//       .attr("dx", "0.60em")
//       .style("text-anchor", "middle")
//       .text((d, i) => {
//         // Format the percentage labels
//         const percentage = ((d.endAngle - d.startAngle) / (2 * Math.PI)) * 100;
//         return `${percentage.toFixed(0)}%`;
//       });



//   }, [data, height, width]);

//   return (
//     <svg ref={svgRef} width="auto" height="auto">
//       {/* Render the chart components */}
//     </svg>
//   );
// };

// export default AudienceDemographyChart;

// import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";

// const AudienceDemographyChart = ({ width, height, data }) => {
//   const svgRef = useRef();

//   // Function to handle mouseover event
//   function handleMouseOver(d, i, event) {
//     d3.select(event.currentTarget).select("path").transition().duration(100).attr("opacity", 0.7);
//   }

//   // Function to handle mouseout event
//   function handleMouseOut(d, i, event) {
//     d3.select(event.currentTarget).select("path").transition().duration(100).attr("opacity", 1);
//   }

//   useEffect(() => {
//     const svg = d3.select(svgRef.current);

//     // Remove existing elements before rendering
//     svg.selectAll("*").remove();

//     // Define the radius
//     const radius = Math.min(width, height) / 5;

//     // Create a pie generator
//     const pie = d3.pie().value((d) => d.percentage); // Use data.percentage

//     // Create an arc generator
//     const arc = d3.arc().innerRadius(radius * 0.8).outerRadius(radius);

//     // Generate pie chart data
//     const pieData = pie(data); // Use the passed data directly

//     // Append a group element for the pie chart
//     const pieGroup = svg.append("g").attr("transform",  `translate(${105},${85})`);

//     const Tooltip = d3.select("body")
//       .append("div")
//       .style("opacity", 0)
//       .attr("class", "tooltip")
//       .style("background-color", "white")
//       .style("border", "solid")
//       .style("border-width", "0px")
//       .style("border-radius", "5px")
//       .style("padding", "5px");

//     const mouseover = (d) => {
//       Tooltip.style("opacity", 1);
//       d3.select(event.currentTarget).style("stroke", "").style("opacity", 1);
//     };

//     const mousemove = (d) => {
//       Tooltip.html(`The exact value of<br>this cell is: ${d.value}`)
//         .style("left", `${d3.event.pageX + 70}px`)
//         .style("top", `${d3.event.pageY}px`);
//     };

//     const mouseleave = () => {
//       Tooltip.style("opacity", 0);
//       d3.select(event.currentTarget).style("stroke", "none").style("opacity", 0.8);
//     };

//    // Append arcs for each slice of the pie chart
//    const arcs = pieGroup.selectAll(".arc")
//      .data(pieData)
//      .enter()
//      .append('g')
//      .attr('class', 'arc')
//      .on('mouseover', (d, i, event) => handleMouseOver(d, i, event)) 
//      .on('mouseout', (d,i,event)=>handleMouseOut(d,i,event))
//      .on('mouseover', mouseover)
//      .on('mousemove', mousemove)
//      .on('mouseleave', mouseleave);

//    arcs.append('path')
//       	.attr('fill',(d,i)=>['#283350','#0FA44A','#FFF854'][i])
//       	.attr('stroke','')
//        	.attr('d',arc);

//    arcs.append('text')
//       	.attr('transform', function (d) {
//                   var pos = arc.centroid(d);
//                   var midangle = d.startAngle + (d.endAngle - d.startAngle) / 3;
//                   pos[0] = radius * 0.95 * (midangle < Math.PI ? 1.2 : -1.5);
//                   return "translate(" + pos + ")";
//                 })
//                 .attr("dy", "0.45em")
//                 .attr("dx", "0.60em")
//                 .style("text-anchor", "middle")
//       	.text((d)=>`${Math.round(d.data.percentage)}%`);

//  }, [data]);

//  return (
//    <svg ref={svgRef}width="auto" height="auto"></svg>
//  );
// };

// export default AudienceDemographyChart;

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const AudienceDemographyChart = ({ width, height, data }) => {
  const svgRef = useRef();

  // // Function to handle mouseover event
  // const handleMouseOver = (event, d) => {
  //   d3.select(event.target).select("path").transition().duration(100).attr("opacity", 0.7);
  // };

  // // Function to handle mouseout event
  // const handleMouseOut = (event) => {
  //   d3.select(event.target).select("path").transition().duration(100).attr("opacity", 1);
  // };

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Remove existing elements before rendering
    svg.selectAll("*").remove();

    // Define the radius
    const radius = Math.min(width, height) / 5;

    // Create a pie generator
    const pie = d3.pie().value((d) => d.percentage); // Use data.percentage

    // Create an arc generator
    const arc = d3.arc().innerRadius(radius * 0.8).outerRadius(radius);

    // Generate pie chart data
    const pieData = pie(data); // Use the passed data directly

    // Append a group element for the pie chart
    const pieGroup = svg.append("g").attr("transform", `translate(${105},${85})`);

    const Tooltip = d3.select("body")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "0px")
      .style("border-radius", "5px")
      .style("padding", "5px");

    // Append arcs for each slice of the pie chart
    const arcs = pieGroup.selectAll(".arc")
      .data(pieData)
      .enter()
      .append("g")
      .attr("class", "arc")
      // .on("mouseover", (event, d) => handleMouseOver(event, d))
      // .on("mousemove", (event, d) => {
      //   Tooltip.html(`The exact value of<br>this cell is: ${d.value}`)
      //     .style("left", `${d3.event.pageX + 70}px`)
      //     .style("top", `${d3.event.pageY}px`);
      // })
      // .on("mouseleave", (event) => handleMouseOut(event));

    arcs.append("path")
      .attr("fill", (d, i) => ["#283350", "#0FA44A", "#FFF854"][i])
      .attr("stroke", "")
      .attr("d", arc);

    arcs.append("text")
      .attr(
        "transform",
        function(d) {
          var pos = arc.centroid(d);
          var midangle = d.startAngle + (d.endAngle - d.startAngle) / 3;
          pos[0] =
            radius * 0.95 * (midangle < Math.PI ? 1.2 : -1.5);
          return "translate("+pos+")";
        }
       )
       .attr('dy', '0.45em')
       .attr('dx', '0.60em')
       .style('text-anchor', 'middle')
       .text((d) => `${Math.round(d.data.percentage)}%`);

   }, [data]);

   return (
     <svg ref={svgRef} width="auto" height="auto"></svg>
   );
};

export default AudienceDemographyChart;
