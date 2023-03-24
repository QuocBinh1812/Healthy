import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { useCallback } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const MyDot = (props) => {
  const { cx, cy } = props;

  return (
    <svg x={cx - 5} y={cy - 5} width={10} height={10}>
      <circle cx={5} cy={5} r={5} fill={props.color} />
    </svg>
  );
};
const SimpleLineChart = ({ data }) => {
  const renderLineChart = () => {
    return (
      <div style={{ width: "100%", height: 316 }}>
        <ResponsiveContainer>
          <LineChart
            className="ml-[-18px]"
            width={680}
            height={316}
            data={data}
          >
            <Tooltip />
            {/* <Legend /> */}
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#FFCC21"
              dot={<MyDot color={"#FFCC21"} />}
            />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8FE9D0"
              dot={<MyDot color={"#8FE9D0"} />}
            />
            {/* <CartesianGrid stroke="#ccc" /> */}

            {data?.map((i) => (
              <ReferenceLine x={i.name} stroke="#777777" />
            ))}
            <XAxis
              dataKey="name"
              stroke="#FFFFFF"
              axisLine={false}
              tick={{ fill: "#FFFFFF" }}
            />
            <YAxis tick={() => null} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };
  return renderLineChart();
};

export default SimpleLineChart;
