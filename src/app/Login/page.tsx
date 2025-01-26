"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import MonthlyLoanChart from "../UserDashboard/components/MonthlyChart";

function Page() {
  const [loanRequests, setLoanRequests] = useState([]);
  const [totalLoans, setTotalLoans] = useState(0);
  const [dateFilteredLoans, setDateFilteredLoans] = useState(0);

  // Fetch loan data
  useEffect(() => {
    const fetchLoanData = async () => {
      try {
        const response = await axios.get("/admin/applications"); // Replace with your actual API endpoint
        const data = response.data;

        // Set data in state
        setLoanRequests(data);
        setTotalLoans(data.length);

        // Filter loans by date (e.g., last 7 days)
        const filtered = data.filter((loan) => {
          const loanDate = new Date(loan.createdAt); // Assuming loan data has 'createdAt' field
          const today = new Date();
          const sevenDaysAgo = new Date(today.setDate(today.getDate() - 7));
          return loanDate >= sevenDaysAgo;
        });
        setDateFilteredLoans(filtered.length);
      } catch (error) {
        console.error("Error fetching loan data:", error);
      }
    };

    fetchLoanData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="font-bold text-2xl">Admin Dashboard</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Loan Requests Overview and Monthly Loan Chart */}
        <div className="p-4 bg-white rounded-lg shadow-md w-[60%]">
          <h3 className="font-bold text-lg mb-2">Loan Requests Overview</h3>
          <div>
            <p className="text-sm">
              Total Loan Requests: <span className="font-bold">{totalLoans}</span>
            </p>
            <p className="text-sm">
              Loans in Last 7 Days: <span className="font-bold">{dateFilteredLoans}</span>
            </p>
          </div>
          {/* Monthly Loan Chart */}
          <div className="mt-5">
            <MonthlyLoanChart />
          </div>
        </div>

        {/* View All Loans Table Section */}
        <div className="mt-5 p-4 bg-white rounded-lg shadow-md w-full">
          <h3 className="font-bold text-lg mb-2">View All Loans</h3>
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border">Loan ID</th>
                <th className="px-4 py-2 border">User</th>
                <th className="px-4 py-2 border">Amount</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {loanRequests.map((loan) => (
                <tr key={loan._id}>
                  <td className="px-4 py-2 border">{loan._id}</td>
                  <td className="px-4 py-2 border">{loan.user?.name || "N/A"}</td>
                  <td className="px-4 py-2 border">${loan.amount}</td>
                  <td className="px-4 py-2 border">{loan.status}</td>
                  <td className="px-4 py-2 border">{new Date(loan.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Page;
