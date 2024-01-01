import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	name: z.string().min(3, { message: "Name must be at least 3 characters" }),
	age: z
		.number({ invalid_type_error: "Age must be at least 18" })
		.min(18, { message: "Age must be at least 18" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormData>({ resolver: zodResolver(schema) });

	const onSubmit = (data: FieldValues) => {
		console.log(errors);
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-3">
				<label htmlFor="name" className="text-xl mb-2">
					Name
				</label>
				<input
					{...register("name")}
					id="name"
					type="text"
					className="block rounded-md border-0 py-1.5 pl-3 mt-2 text-l ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
				/>
				{errors.name && <p className="text-red-600">{errors.name.message}</p>}
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="text-xl mb-2">
					Age
				</label>
				<input
					{...register("age", { valueAsNumber: true })}
					id="age"
					type="number"
					className="block rounded-md border-0 py-1.5 pl-3 pr-2 mt-2 text-l ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
				/>
				{errors.age && <p className="text-red-600">{errors.age.message}</p>}
			</div>
			<button
				type="submit"
				disabled={!isValid}
				className={
					isValid
						? "text-xl px-5 py-2 border-0 mt-2 rounded-lg ring-1 ring-inset ring-gray-300 hover:bg-cyan-400 hover:text-white"
						: "text-xl px-5 py-2 border-0 mt-2 rounded-lg ring-1 ring-inset ring-gray-300 bg-gray-200 text-gray-400"
				}
			>
				Submit
			</button>
		</form>
	);
};

export default Form;
