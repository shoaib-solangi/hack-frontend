"use client";
// import { useAuth } from "@/app/auth.context/authContext";

import { PiggyBank, ReceiptText, Wallet } from "lucide-react";
import React from "react";

function CardInfo() {
  // interface Budget {
  //   id: string;
  //   docName: string;
  //   budgetName: string;
  //   Amount: number;
  //   totalSpend: number;
  // }

  // interface Expense {
  //   expenseAmount: number ;
  // }
  // const db = getFirestore(app);
  // const [budgets, setBudgets] = useState<Budget[]>([]);
  // const [totalBudget, setTotalBudget] = useState<number>(0);
  // const [totalSpend, setTotalSpend] = useState<number>(0);

  // useEffect(() => {
  //   if (user) {
  //     const fetchData = async () => {
  //       const querySnapshot = await getDocs(collection(db, `k${user}`));
  //       const budgetData: Budget[] = [];
  //       let totalBudgetAmount = 0;
  //       let totalSpendAmount = 0;

  //       await Promise.all(
  //         querySnapshot.docs.map(async (doc) => {
  //           const budget = {
  //             id: doc.id,
  //             docName: doc.id,
  //             budgetName: doc.data().budgetName,
  //             Amount: Number(doc.data().Amount),
  //           };
  //           totalBudgetAmount += budget.Amount;


  //           // Fetch expenses for this budget
  //           const expensesSnapshot = await getDocs(
  //             collection(db, `expense/${user}/${doc.id}`)
  //           );

  //           const expenses = expensesSnapshot.docs.map(
  //             (expenseDoc) => expenseDoc.data() as Expense
  //           );

  //           // Calculate total spend
  //           const totalSpend = expenses.reduce(
  //             (sum, expense) =>
  //               sum +
  //               (typeof expense.expenseAmount === "number"
  //                 ? Number(expense.expenseAmount)
  //                 : Number(expense.expenseAmount || 0)),
  //             0
  //           );
  //           totalSpendAmount += totalSpend;


  //           budgetData.push({
  //             ...budget,
  //             totalSpend,
  //           });
  //         })
  //       );

  //       setBudgets(budgetData);
  //       console.log(budgets);
  //       setTotalBudget(totalBudgetAmount); 
  //       console.log(totalBudgetAmount);
  //       // Set total budget state
  //       setTotalSpend(totalSpendAmount); // Set total spend state
  //     };

  //     fetchData();
  //   }
  // }, [db, user]);

  return (
    <div>
      <div>
        <h2 className="text-sm font-bold py-2">Hi user</h2>
      </div>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2">
        <div className="p-7 border rounded-lg flex justify-between items-center">
          <div>
            <h2>Total budget</h2>
            <h2></h2>
          </div>
          <PiggyBank className="bg-primary p-3 h-12 w-12 rounded-full text-white" />
        </div>
        <div className="p-7 border rounded-lg flex justify-between items-center">
          <div>
            <h2>No of Budget</h2>
            <h2></h2>
          </div>
          <ReceiptText className="bg-primary p-3 h-12 w-12 rounded-full text-white" />
        </div> <div className="p-7 border rounded-lg flex justify-between items-center">
          <div>
            
            <h2>Total Spend</h2>
            <h2></h2>
          </div>
          <Wallet className="bg-primary p-3 h-12 w-12 rounded-full text-white" />
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
