import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Style from "./Barchart.module.css"

const Barchart = () => {
  let [data, setdata] = useState([
    {month: "JAN",ern: 100},
    {month: "Feb",ern: 90},
    {month: "MAR",ern: 20},
    {month:"APR",ern: 46},
    {month: "MAY",ern: 56},
    {month: "JUN",ern: 67},
    {month: "JUL",ern: 78},
    {month: "AUG",ern: 100},
    {month: "SEP",ern: 10},
    {month: "OCT",ern: 49},
    {month: "NOV",ern: 75},
    {month: "DEC", ern: 100}
  ]);

  return (
    <div className={Style.bar_section}>
        <div className={Style.bar_heading}>
            <div className={Style.head_left}>
                <h4>Overview</h4>
                <p>Monthly Earning</p>
            </div>
            <div className={Style.head_right}>
                <select name="" id="">
                    <option value="">Quality</option>
                </select>
            </div>
        </div>

     <div className={Style.barchart}>
        <ResponsiveContainer width={620} height={250}>
      <BarChart width={600} height={250} data={data} >
        <XAxis dataKey="month" spacing={12}/>
        <Tooltip wrapperStyle={{width:100, backgroundColor:"#ccc"}}/>
        <Legend width={100} wrapperStyle={{top:40,right:20,backgroundColor:"white",border:"1px solid, green",borderRadius:16, lineHeight:"40px"}}/>
        <Bar dataKey="ern" fill="#85A5FF" strokeWidth={100} radius={10} />
      </BarChart>
      </ResponsiveContainer>
    </div>
    </div>

  );
};

export default Barchart;
