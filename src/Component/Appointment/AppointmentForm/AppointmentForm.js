import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')
const AppointmentForm = ({ modalIsOpen, closeModal, bookingTitle, date }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service = bookingTitle
        data.date = date
        data.created = new Date()

        fetch('http://localhost:5050/addAppointment', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    closeModal()
                    alert('Appointment Created Successfully')
                }
            })
    };
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h5 className='text-center text-brand mb-3'>{bookingTitle}</h5>
                <p className='test-secondary text-center'><small>On {date.toDateString()}</small></p>
                <div style={{ width: '500px' }} className='p-3'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='form-control mb-2' {...register("name", { required: true })} placeholder='Your name' />
                        {errors.name && <span className="text-danger">This field is required</span>}
                        <input className='form-control mb-2' {...register("phoneNumber", { required: true })} placeholder='Phone Number' />
                        {errors.phoneNumber && <span className="text-danger">This field is required</span>}
                        <input className='form-control mb-2' {...register("email", { required: true })} placeholder='Email' />
                        {errors.email && <span className="text-danger">This field is required</span>}
                        <div className="form-group row">
                            <div className="col-4">

                                <select className="form-control" name="gender" {...register("gender", { required: true })} >
                                    <option disabled={true} value="Not set">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Not set">Other</option>
                                </select>
                                {errors.gender && <span className="text-danger">This field is required</span>}

                            </div>
                            <div className="col-4">
                                <input {...register("age", { required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                                {errors.age && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-4">
                                <input {...register("weight", { required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                                {errors.weight && <span className="text-danger">This field is required</span>}
                            </div>
                        </div>

                        <div className="form-group text-right">
                            <button type="submit" className="btn btn-brand">Send</button>
                        </div>
                    </form>
                </div>

            </Modal>
        </div>
    );
};

export default AppointmentForm;