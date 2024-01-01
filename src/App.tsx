// import Form from "./components/Form";

import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

const App = () => {
	const [expenses, setExpenses] = useState([
		{
			id: 1,
			description: "Groceries",
			amount: 100,
			category: "Food",
		},
		{
			id: 2,
			description: "New desk",
			amount: 200,
			category: "Office",
		},
	]);

	return (
		<div className="m-10">
			<ExpenseList
				expenses={expenses}
				onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
			/>
		</div>
	);
};
export default App;
