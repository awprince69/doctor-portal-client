import React, { useContext, useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import SideBar from '../SideBar/SideBar';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}
const DashBoard = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointment, setAppointment] = useState([])
    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    useEffect(() => {
        fetch('http://localhost:5050/appointmentByDate', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })

        })
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [selectedDate])
    return (
        <section >
            <div style={containerStyle} className="row">
                <div  className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate appointments={appointment}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;
// container-fluid