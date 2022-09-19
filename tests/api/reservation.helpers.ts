type IReservation = {
	date: Date;
	email: string;
	name: string;
	quantity: number;
};

export async function postReservationAPI(baseURL: string | undefined, reservation: IReservation) {
	return await fetch(`${baseURL}/api/reservations`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(reservation)
	});
}

const fakeDb = () => {
	const reservations: IReservation[] = [
		{
			date: new Date('2023-03-10 19:00'),
			email: 'katinka@example.com',
			name: 'Katinka Ingabogovinanana',
			quantity: 2
		}
	];
	return reservations;
};

export function postReservation() {
	return fakeDb();
}
