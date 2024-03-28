'use client'
import Image from 'next/image'
import Input from '@/components/Input/Input'
import classes from "./page.module.css"

export default function ContactPage() {
    return (
        <main className={classes.contact}>
            <div className={classes.imgContact}>
                <Image src='/contact.png' alt='contact' height={500} width={500} />
            </div>
            <div className={classes.formContainer}>
                <form className={classes.form}>
                    <Input id='name' label='Name and Surname' type='text' />
                    <Input id='email' label='Email' type='email' />
                    <Input textarea id='message' label='Message' />
                    <div className={classes.actions}>
                        <button type='submit'>Submit Message</button>
                    </div>
                </form>
            </div>
        </main>
    )
}