import axios from "axios";
import { useState } from "react";

const Body = () => {
	const [amount, setAmount] = useState<number>(0);
	const [email, setEmail] = useState<string>("");
	const mainAmount = amount * 100;

	console.log(amount);
	console.log(email);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			//add first_mame and last_name to the query param later on
			const response = await axios.get(
				`http://localhost:5000/api/transactions/paystack/initialize?amount=${mainAmount}&email=${email}`
			);

			const data = response.data;

			data && console.log(data?.data?.authorization_url);
			window.location.href = data?.data?.authorization_url;
			// console.log(data.message);

			// if (data.data) {
			// 	console.log(data.data.authorization_url);
			// 	console.log(data.data.access_code);
			// 	console.log(data.data.reference);
			// }
		} catch (error: any) {
			console.error(error);
		}
	}

	return (
		<div className="body">
			<div className="">
				<form onSubmit={handleSubmit} className="flex flex-col">
					<input
						type="text"
						onChange={(e) => setAmount(Number(e.target.value))}
					/>
					<input type="email" onChange={(e) => setEmail(e.target.value)} />
					<button type="submit" className="">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Body;
