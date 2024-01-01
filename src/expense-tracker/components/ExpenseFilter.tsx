import categories from "../ExpenseCategory";

interface Props {
	onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
	return (
		<select
			className="p-2"
			onChange={(event) => onSelectCategory(event.target.value)}
		>
			<option value="">All Categories</option>
			{categories.map((cat) => (
				<option value={cat}>{cat}</option>
			))}
		</select>
	);
};

export default ExpenseFilter;
