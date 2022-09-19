type IReservation = {
	date: string;
	email: string;
	name: string;
	quantity: number;
};

export async function postReservation(baseURL: string | undefined, reservation: IReservation) {
	return await fetch(`${baseURL}/api/reservations`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(reservation)
	});
}
