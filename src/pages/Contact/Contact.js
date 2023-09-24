import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import "./Contact.css";



import { init } from '@emailjs/browser';
init("user_sw3Id8dB1tRbzmfwsA1sj");


export default function Contact() {
    return (
        <div className="bg-black text-white ">

            <div className="homeContainer paddingContact">
                <ContactForm />
            </div>

        </div>
    );
}
