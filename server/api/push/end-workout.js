/* 

	Notifiy all users when someone has done a workout.

	@user - user that has performed the workout
	@workout - details on that workout?

*/

import { createNotification } from "../../push";

export default function(req, res) {
	const { item, fromUser, toUsers } = req.body;

	const msg = `${fromUser.displayName ||
		fromUser.email} loggade precis en ${item.emoji} ${item.name} och fick ${item.points} poäng!`;

	createNotification(msg, toUsers)
		.then(response => {
			res.json({
				msg: "success"
			});
		})
		.catch(error => {
			console.log(error);
		});
}
