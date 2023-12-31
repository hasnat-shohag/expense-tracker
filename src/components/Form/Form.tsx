import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	name: z.string().min(3, { message: "Name must be at least 3 characters" }),
	age: z
		.number({ invalid_type_error: "Age field is required" })
		.min(18, { message: "Age field must be at least 18 characters" }),
});
type FormData = z.infer<typeof schema>; // { name: string; age: number; }

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: FormData) => {
		console.log(data);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-3">
					<label htmlFor="name" className="text-xl">
						Name{" "}
					</label>
					<input
						{...register("name")}
						id="name"
						type="text"
						className="block w-half rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 
						ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
						sm:text-sm sm:leading-6 mt-2"
					/>
					{errors.name && <p className="text-red-600">{errors.name.message}</p>}
				</div>
				<div className="mb-5">
					<label htmlFor="age" className="text-xl">
						Age{" "}
					</label>
					<input
						{...register("age", { valueAsNumber: true })}
						id="age"
						type="number"
						className="block w-half rounded-md border-0 py-1.5 pl-3 pr-2 text-gray-900 ring-1 
						ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
						sm:text-sm sm:leading-6 mt-2"
					/>
					{errors.age && <p className="text-red-600">{errors.age.message}</p>}
				</div>
				<button
					type="submit"
					className="px-2 py-1 border border-black rounded  bg-white hover:bg-gray-200	"
				>
					Submit
				</button>
			</form>
		</>
	);
};

export default Form;
