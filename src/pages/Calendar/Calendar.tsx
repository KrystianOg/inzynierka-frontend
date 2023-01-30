import { BottomNav } from "components";
import dayjs, { Dayjs } from "dayjs";
import { Box } from "@mui/material";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import { useState } from "react";
// import { useDrag } from "react-dnd";

// interface WeekData {
// 	first: number | undefined;
// 	last: number | undefined;
// }

const Calendar = () => {
	const [date, setDate] = useState<Dayjs | null>(dayjs());
	// const [week, setWeek] = useState<WeekData | null>({
	// 	first: date?.startOf("week").date(),
	// 	last: date?.endOf("week").date(),
	// });

	// const minDate = // join date
	const maxDate = dayjs("2034-01-01T00:00:00.000");

	// const dateChange = (newDate: Dayjs | null) => {
	// 	setDate(newDate);
	// 	setWeek({
	// 		first: newDate?.startOf("w").date(),
	// 		last: newDate?.endOf("w").date(),
	// 	});
	// };

	const handleSetDate = () => (newDate: dayjs.Dayjs | null) => setDate(newDate);

	return (
		<>
			<CalendarPicker
				date={date}
				onChange={handleSetDate()}
				// minDate={minDate}
				maxDate={maxDate}
			/>
			{/* drag & drop custom components */}
			<Box></Box>
			<BottomNav />
		</>
	);
};

export default Calendar;
