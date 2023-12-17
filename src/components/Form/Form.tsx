// import { z } from "zod";

const Form = () => {
	return (
		<>
			<form>
				<div className="mb-3">
					<label htmlFor="name" className="mb-3">
						Name
					</label>
					<br />
				</div>
				<div>
					<input name="Name" id="name" className="border-black" />
				</div>
				<button type="submit" className="p-10">Submit</button>
			</form>
		</>
	);
};

export default Form;
