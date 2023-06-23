import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import "./Contact.css";



import { init } from '@emailjs/browser';
init("user_sw3Id8dB1tRbzmfwsA1sj");


export default function Contact() {
    return (
        <div className="bg-black text-white ">


            <Jumbotron title="Contact" />

            <div className="homeContainer paddingContact">
                <ContactForm />
            </div>

        </div>
    );
}
