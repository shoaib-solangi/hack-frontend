"use client";

import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function MonthlyLoanChart() {
  const [monthlyData, setMonthlyData] = useState({
    labels: [], // Month names
    datasets: [
      {
        label: "Loan Requests",
        data: [], // Loan request count for each month
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchMonthlyData = async () => {
      try {
        // Fetch data from API (replace this endpoint with your backend API)
        const response = await axios.get("/api/admin/applications");
        const data = response.data;

        // Prepare data for the last 4 months
        const now = new Date();
        const lastFourMonths = Array.from({ length: 4 }, (_, i) => {
          const month = new Date(now.getFullYear(), now.getMonth() - i, 1);
          return month.toLocaleString("default", { month: "long", year: "numeric" });
        }).reverse();

        const counts = lastFourMonths.map((monthName) => {
          return data.filter((loan) => {
            const loanDate = new Date(loan.createdAt);
            const formattedLoanMonth = loanDate.toLocaleString("default", { month: "long", year: "numeric" });
            return formattedLoanMonth === monthName;
          }).length;
        });

        // Update chart state
        setMonthlyData({
          labels: lastFourMonths,
          datasets: [
            {
              label: "Loan Requests",
              data: counts,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching monthly data:", error);
      }
    };

    fetchMonthlyData();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="font-bold text-lg mb-2">Loan Requests (Last 4 Months)</h3>
      <Bar
        data={monthlyData}
        options={{
          responsive: true,
          plugins: {
            legend: { display: true },
            tooltip: { enabled: true },
          },
          scales: {
            x: { title: { display: true, text: "Months" } },
            y: { title: { display: true, text: "Number of Loans" }, beginAtZero: true },
          },
        }}
      />
    </div>
  );
}

export default MonthlyLoanChart;
