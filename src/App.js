import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

/*------------------------------------------------------------------------------------------------------*/

const INITIAL_EXPENSES = [
  { id: 1, title: "Toilet Paper", amount: 250, date: new Date(2021, 7, 14) },
  { id: 2, title: "New TV", amount: 750, date: new Date(2020, 6, 2) },
  { id: 3, title: "Car Insurance", amount: 360, date: new Date(2021, 2, 25) },
  {
    id: 4,
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 9, 13),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
