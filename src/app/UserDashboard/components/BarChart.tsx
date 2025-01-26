"use client"
// import { useAuth } from '@/app/auth.context/authContext';
// import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import React, { useEffect, useState } from 'react'
import { Bar } from 'recharts';
import { BarChart as RechartBarChart,  XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts'; 


function BarChart() {
    interface Budget {
        id: string;
        docName: string;
        budgetName: string;
        Amount: number;
        totalSpend: number;
      }
    
      interface Expense {
        expenseAmount: number ;
      }
     
      // const db = getFirestore(app);
      const [budgets, setBudgets] = useState<Budget[]>([]);
    
      // useEffect(() => {
      //   if (user) {
          // const fetchData = async () => {
            // const querySnapshot = await getDocs(collection(db, `k${user}`));
            // const budgetData: Budget[] = [];
    
            // await Promise.all(
            //   querySnapshot.docs.map(async (doc) => {
            //     const budget = {
            //       id: doc.id,
            //       docName: doc.id,
            //       budgetName: doc.data().budgetName,
            //       Amount: doc.data().Amount,
            //     };
    
                // Fetch expenses for this budget
      //           const expensesSnapshot = await getDocs(
      //             collection(db, `expense/${user}/${doc.id}`)
      //           );
    
      //           const expenses = expensesSnapshot.docs.map(
      //             (expenseDoc) => expenseDoc.data() as Expense
      //           );
    
      //           // Calculate total spend
      //           const totalSpend = expenses.reduce(
      //             (sum, expense) => sum + (typeof expense.expenseAmount === 'string' ? parseFloat(expense.expenseAmount) : expense.expenseAmount || 0),
      //             0
      //           );
    
      //           budgetData.push({
      //             ...budget,
      //             totalSpend,
      //           });
      //         })
      //       );
    
      //       setBudgets(budgetData);
          
            
      //     };
    
      //     fetchData();
      //   }
      // }, [db, user]);


  return (
    <div className='mt-5'>
   
        {/* Use Rechart's BarChart */}
        <RechartBarChart width={600} height={300} data={budgets}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="budgetName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Amount" fill="#2563eb" radius={4} />
          <Bar dataKey="totalSpend" fill="#60a5fa" radius={4} />
        </RechartBarChart>
    

    </div>
  )
}

 export default BarChart
