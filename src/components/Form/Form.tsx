import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	name: z.string().min(3, { message: "Name must be at least 3 characters" }),
	age: z.number({ invalid_type_error: "Age field is required" }).min(18),
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
					<label htmlFor="name" className="form-label">
						Name{" "}
					</label>
					<input
						{...register("name")}
						id="name"
						type="text"
						className="border border-black"
					/>
					{errors.name && <p className="text-red-600">{errors.name.message}</p>}
				</div>
				<div className="mb-5">
					<label htmlFor="age" className="form-label">
						Age{" "}
					</label>
					<input
						{...register("age", { valueAsNumber: true })}
						id="age"
						type="text"
						className="border border-black"
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
