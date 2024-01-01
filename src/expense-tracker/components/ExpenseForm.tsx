import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../ExpenseCategory";

const schema = z.object({
	description: z
		.string()
		.min(3, { message: "Name must be at least 3 characters" })
		.max(50, { message: "Description must be within 50 characters" }),
	amount: z
		.number({ invalid_type_error: "Amount is required" })
		.min(1, { message: "Amount must be at least 1" }),
	category: z.enum(categories, {
		errorMap: () => ({ message: "Category is required" }),
	}),
});

type FormData = z.infer<typeof schema>;

interface Props {
	onSubmit: (data: FormData) => void;
}

const Form = ({ onSubmit }: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>({ resolver: zodResolver(schema) });

	return (
		<form
			onSubmit={handleSubmit((data) => {
				onSubmit(data);
				reset();
			})}
		>
			<div className="mb-3">
				<label htmlFor="description" className="text-xl mb-2">
					Description
				</label>
				<input
					{...register("description")}
					id="description"
					type="text"
					className="block rounded-md border-0 py-1.5 pl-3 mt-2 text-l ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
				/>
				{errors.description && (
					<p className="text-red-600">{errors.description.message}</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="amount" className="text-xl mb-2">
					amount
				</label>
				<input
					{...register("amount", { valueAsNumber: true })}
					id="amount"
					type="number"
					className="block rounded-md border-0 py-1.5 pl-3 pr-2 mt-2 text-l ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
				/>
				{errors.amount && (
					<p className="text-red-600">{errors.amount.message}</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="category" className="text-xl mb-2">
					category
				</label>
				<select {...register("category")} className="p-2 block mt-3">
					<option value="">Select Categories</option>
					{categories.map((category) => (
						<option value={category}>{category}</option>
					))}
				</select>
				{errors.category && (
					<p className="text-red-600">{errors.category.message}</p>
				)}
			</div>
			<button
				type="submit"
				className="text-xl px-5 py-2 border-0 mt-2 rounded-lg ring-1 ring-inset ring-gray-300 hover:bg-cyan-400 hover:text-white"
			>
				Submit
			</button>
		</form>
	);
};

export default Form;
