import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "", price: 0 },
  { name: "MON", price: 5000 },
  { name: "TUE", price: 7500 },
  { name: "WED", price: 5000 },
  { name: "THU", price: 7800 },
  { name: "FRI", price: 5300 },
  { name: "SAT", price: 8345.5 },
  { name: "Sun", price: 5000 },
];

function CustomToolTip({ payload, active }) {
  if (active) {
    return <div className="custom_tooltip">$ {payload[0].value}</div>;
  }
  return null;
}

export default function LineGraph() {
  return (
    <ResponsiveContainer width={"99%"} height={239}>
      <LineChart
        width={748}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="price" stroke="#2FCA72" />
        <CartesianGrid stroke="#E8E8E8" strokeDasharray="2 2" />
        <XAxis dataKey="name" />
        <YAxis dataKey="price" />
        <Tooltip content={<CustomToolTip />} />
      </LineChart>
    </ResponsiveContainer>
  );
}
