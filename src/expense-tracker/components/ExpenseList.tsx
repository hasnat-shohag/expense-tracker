interface Expense {
	id: number;
	description: string;
	amount: number;
	category: string;
}

interface Props {
	expenses: Expense[];
	onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
	if (expenses.length === 0) return null;
	return (
		<table className="border-0 rounded-md ring-1 ring-inset">
			<thead>
				<tr>
					<th className="p-3">Description</th>
					<th className="p-3">Amount</th>
					<th className="p-3">Category</th>
					<th className="p-3"></th>
				</tr>
			</thead>
			<tbody>
				{expenses.map((expense) => (
					<tr key={expense.id} className="border-0 ring-1 ring-inset">
						<td className="p-3">{expense.description}</td>
						<td className="p-3">{expense.amount}</td>
						<td className="p-3">{expense.category}</td>
						<td className="p-3">
							<button
								className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
								onClick={() => onDelete(expense.id)}
							>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
			<tfoot>
				<tr>
					<td className="p-3">Total</td>
					<td className="p-3">
						$
						{expenses
							.reduce((acc, expense) => expense.amount + acc, 0)
							.toFixed(2)}
					</td>
					<td></td>
					<td></td>
				</tr>
			</tfoot>
		</table>
	);
};

export default ExpenseList;
