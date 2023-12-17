// import { z } from "zod";

const Form = () => {
	return (
		<>
			<form>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<input id="name" type="text" className="border-black" />
				</div>
				<div>
					<label htmlFor="name" className="form-label">
						Age
					</label>
					<input id="name" type="text" className="border-black" />
				</div>
				<button type="submit" className="p-5">
					Submit
				</button>
			</form>
		</>
	);
};

export default Form;
