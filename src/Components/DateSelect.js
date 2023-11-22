import React, { useEffect, useState } from 'react';
import './css/Global.css';
import { DatePicker } from '@mui/x-date-pickers-pro';
import dayjs from 'dayjs';

function DateSelect({ storeData, getData, errors }) {
    const [data, setData] = useState({ start: '', end: '' });
    useEffect(() => {
        setData({ ...storeData })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storeData])
    return (
        <div styles={{ display: "flex", flexDirection: "column" }} onBlurCapture={() => getData(data)} >
            <label className="main-label">Course duration</label>
            <section className="item">
                <label>Start Date:</label>
                <DatePicker
                    disableFuture
                    value={dayjs().year(Number(data.start))}
                    views={["year"]}
                    onChange={(val) => setData(prevData => {
                        const updates = { ...prevData };
                        updates.start = val.$y;
                        return updates;
                    })}
                />
            </section>
            <section className="item">
                <label>End Date:</label>
                <DatePicker
                    value={dayjs().year(Number(data.end))}
                    minDate={data.start ? dayjs().year(data.start) : dayjs().year(1950)}
                    views={["year"]}
                    onChange={(val) => setData(prevData => {
                        const updates = { ...prevData };
                        updates.end = val.$y;
                        return updates;
                    })}
                />
            </section>
        </div>
    )
}

export default DateSelect