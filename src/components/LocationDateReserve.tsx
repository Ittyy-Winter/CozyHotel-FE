"use client";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

export default function LocationDateReserve({
  onDateChange,
  onLocationChange,
}: {
  onDateChange: Function;
  onLocationChange: Function;
}) {
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
  return (
    <div className="w-full">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="w-full border border-gray-700 rounded-lg px-4 py-2 text-white
          focus:outline-none focus:border-[#52D7F7] focus:ring-1 focus:ring-[#52D7F7]
          hover:border-[#52D7F7]/50 transition-all duration-300"
          value={reserveDate}
          onChange={(value) => {
            setReserveDate(value);
            onDateChange(value);
          }}
          sx={{
            '& .MuiInputBase-root': {
              color: 'white',
              '&:hover': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#52D7F7',
                },
              },
              '&.Mui-focused': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#52D7F7',
                },
              },
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#374151',
            },
            '& .MuiSvgIcon-root': {
              color: '#52D7F7',
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
