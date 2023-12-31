import { FieldValues, useForm } from "react-hook-form";
interface FormData {
	name: string;
	age: number;
}

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();
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
					{...register("name", { required: true, minLength: 3 })}
					id="name"
					type="text"
					className="block rounded-md border-0 py-1.5 pl-3 mt-2 text-l ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
				/>
				{errors.name?.type === "required" && (
					<p className="text-red-600">Name Field is required</p>
				)}
				{errors.name?.type === "minLength" && (
					<p className="text-red-600">At least 3 character is required</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="text-xl mb-2">
					Age
				</label>
				<input
					{...register("age")}
					id="age"
					type="number"
					className="block rounded-md border-0 py-1.5 pl-3 pr-2 mt-2 text-l ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
				/>
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
