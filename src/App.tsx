import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import Form from "./expense-tracker/components/ExpenseForm";

const App = () => {
	const [selectedCategory, setSelectedCategory] = useState("");
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
		{
			id: 3,
			description: "abs",
			amount: 300,
			category: "Office",
		},
		{
			id: 4,
			description: "Honey",
			amount: 400,
			category: "Food",
		},
	]);
	const setVisibility = selectedCategory
		? expenses.filter((exp) => exp.category === selectedCategory)
		: expenses;

	return (
		<div className="m-10">
			<div className="mb-5">
				<Form />
			</div>
			<div className="mb-3">
				<ExpenseFilter
					onSelectCategory={(category) => setSelectedCategory(category)}
				></ExpenseFilter>
			</div>
			<ExpenseList
				expenses={setVisibility}
				onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
			/>
		</div>
	);
};
export default App;
