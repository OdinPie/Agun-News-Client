import React from 'react';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useStats from '../../../Hooks/useStats';
import { Chart } from "react-google-charts";
import useUserStats from '../../../Hooks/useUserStats'
const AdminStats = () => {
    const [stats] = useStats();
    const [usercount] = useUserStats();
    const data = [
        ["Publication", "Articles"],
        ["Khan Publications", stats.khan],
        ["Binary Publications", stats.binary],
        ["Chronicals Publications", stats.chron],
        ["ABC Publications", stats.abc],
        
      ];
        const databar = [
        ["Publication", "2023 Articles", "2020 Articles"],
        ["Khan Publications", stats.khan, 8],
        ["Binary Publications", stats.binary, 5],
        ["Chronicals Publications", stats.chron, 2],
        ["ABC Publications", stats.abc, 3],
      ];

      const columndata = [
        ["Category", "Quantity", { role: "style" }],
        ["Total User", usercount.total, "#b87333"], // RGB value
        ["Normal User", usercount.normal, "silver"], // English color name
        ["Premium User", usercount.premium, "gold"],
      ];
      const columnOption = {
        title: "User Count"
      }
      const options = {
        title: "Articles published per Publication",
      };

      const optionsbar = {
        title: "Articles count from 2020",
        chartArea: { width: "50%" },
        colors: ["#b0120a", "#ffab91"],
        hAxis: {
          title: "Total Articles",
          minValue: 0,
        },
        vAxis: {
          title: "Publications",
        },
      };
    return (
        <div>
            <h1 className='text-4xl font-bold font-play pt-40 text-center'>Admin Statistics</h1><br />
            <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
            />

            <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={databar}
                options={optionsbar}
                />
            
            <Chart chartType="ColumnChart" width="100%" height="400px" options={columnOption} data={columndata} />
        </div>
    );
};

export default AdminStats;