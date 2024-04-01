import React, { useMemo } from "react";
import * as d3 from "d3";

const MARGIN = { top: -100, right: 30, bottom: 30, left: 10 };

const BAR_PADDING = 2.5;
const COLORS = ["#283350", "#0FA44A", "#FFF854"];

const AgeBarGraphView = ({ width, height, data }) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const yScale = useMemo(() => {
    return d3
      .scaleBand()
      .domain(data.map((d) => d.ageGroup))
      .range([0, boundsHeight])
      .padding(BAR_PADDING);
  }, [data, height]);

  const xScale = useMemo(() => {
    const maxValue = d3.max(data, (d) => d.male + d.female + d.other);
    return d3.scaleLinear().domain([0, maxValue]).range([0, boundsWidth]);
  }, [data, width]);

  const colorScale = d3
    .scaleOrdinal()
    .domain(["male", "female", "other"])
    .range(COLORS);

  return (
    <div style={{ width: "100%", height: "auto" }}>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${10},${-55})`}
        >
          {data.map((d, i) => (
            <g key={i}>
              <rect
                y={yScale(d.ageGroup)}
                height={24}
                x={MARGIN.left}
                width={xScale(d.male)}
                fill={colorScale("male")}
                opacity={1}
              />
              <rect
                y={yScale(d.ageGroup)}
                height={24}
                x={MARGIN.left + xScale(d.male)}
                width={xScale(d.female)}
                fill={colorScale("female")}
                opacity={1}
              />
              <rect
                y={yScale(d.ageGroup)}
                height={24}
                x={MARGIN.left + xScale(d.male + d.female)}
                width={xScale(d.other)}
                fill={colorScale("other")}
                opacity={1}
              />
              {/* <text
                x={MARGIN.left + xScale(d.male) - 7}
                y={yScale(d.ageGroup) + yScale.bandwidth() / 2}
                textAnchor="end"
                alignmentBaseline="central"
                fontSize={12}
                opacity={xScale(d.male) > 90 ? 1 : 0}
              >
                {d.male}
              </text>
              <text
                x={MARGIN.left + xScale(d.male + d.female) + 7}
                y={yScale(d.ageGroup) + yScale.bandwidth() / 2}
                textAnchor="start"
                alignmentBaseline="central"
                fontSize={12}
              >
                {d.female}
              </text>
              <text
                x={MARGIN.left + xScale(d.male + d.female + d.other) + 7}
                y={yScale(d.ageGroup) + yScale.bandwidth() / 2}
                textAnchor="start"
                alignmentBaseline="central"
                fontSize={12}
              >
                {d.other}
              </text> */}
              <text
                x={MARGIN.left + 50}
                y={yScale(d.ageGroup) + 12 + yScale.bandwidth() / 2}
                textAnchor="end"
                alignmentBaseline="central"
                fontSize={12}
                fontFamily="Aeonik"
                color="white"
                fontWeight={500}
                lineheight={14.4}
                fill="#FFFFFF"

              >
                {d.ageGroup}
              </text>
              <text
                x={MARGIN.left + xScale(d.male) + xScale(d.female) + xScale(d.other) + 5} // Adjust position
                y={yScale(d.ageGroup) + 12 + yScale.bandwidth() / 2}
                textAnchor="start"
                alignmentBaseline="central"
                fontSize={12}
                fill="black"
              >
                {((d.male / (d.male + d.female + d.other)) * 100).toFixed(0)} %
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default AgeBarGraphView;
