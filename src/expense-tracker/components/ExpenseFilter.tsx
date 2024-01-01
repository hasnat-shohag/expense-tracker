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
			<option value="Food">Food</option>
			<option value="Office">Office</option>
		</select>
	);
};

export default ExpenseFilter;
