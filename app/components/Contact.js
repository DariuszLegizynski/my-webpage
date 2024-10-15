"use client"

import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useGoogleReCaptcha, GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

import BaseInput from "@/components/base/Input"

const ContactForm = () => {
	const { executeRecaptcha } = useGoogleReCaptcha()
	const [emailSent, setEmailSent] = useState({ loading: false, success: false, error: false })

	const validationSchema = Yup.object().shape({
		name: Yup.string().required("Name ist erforderlich"),
		email: Yup.string().email("Fehlerhafte E-Mail").required("E-Mail ist erforderlich"),
		phone: Yup.string(),
		message: Yup.string().min(5, "Mindestens 5 Zeichen erforderlich"),
	})

	const initialValues = {
		name: "",
		email: "",
		phone: "",
		message: "",
	}

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		setEmailSent({ loading: true, success: false, error: false })

		if (!executeRecaptcha) {
			setEmailSent({ loading: false, success: false, error: true })
			return
		}

		const token = await executeRecaptcha("contact")

		const response = await fetch("/api/send-email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ...values, token }),
		})

		const data = await response.json()

		if (data.success) {
			setEmailSent({ loading: false, success: true, error: false })
			resetForm()
		} else {
			setEmailSent({ loading: false, success: false, error: true })
		}
		setSubmitting(false)
	}

	return (
		<article>
			<h2 className="mt-12 break-words">Bereit für eine zusammenarbeit?</h2>
			{!emailSent.loading && !emailSent.success && !emailSent.error && (
				<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
					{({ isSubmitting }) => (
						<Form className="p-2 mt-8">
							<div className="mb-6 grid grid-rows-[auto_auto]">
								<Field name="name" type="text" component={BaseInput} text="Name" isRequired />
							</div>
							<div className="mb-6">
								<Field name="email" type="email" component={BaseInput} text="E-mail" isRequired />
							</div>
							<div className="mb-6">
								<Field name="phone" type="text" component={BaseInput} text="Telefon" />
							</div>
							<div className="mb-2 max-w-full">
								<label className="span">Nachricht</label>
								<Field name="message" as="textarea" placeholder="" className="p-1 w-full min-h-36 border border-primary" required />
								<ErrorMessage name="message" component="div" className="text-red-500" />
							</div>
							<button className="flex flex-col items-center mx-auto bg-primary text-white px-12 py-3 mt-8 round" type="submit" disabled={isSubmitting}>
								<strong className="span">Senden</strong>
							</button>
						</Form>
					)}
				</Formik>
			)}
			{emailSent.loading && <div className="h3 mt-8 text-center">Sende...</div>}
			{emailSent.success && (
				<>
					<div className="h3 mt-8 py-4 text-primary text-center">Nachricht wurde gesendet, danke.</div>
				</>
			)}
			{emailSent.error && (
				<div className="text-center">
					<div className="h3 py-4 text-primary">Es ist ein Fehler aufgetreten.</div>
					<div className="h3 pb-4 text-primary">Bitte versuchen Sie es später noch einmal.</div>
				</div>
			)}
		</article>
	)
}

const Contact = () => {
	const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

	return (
		<GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
			<ContactForm />
		</GoogleReCaptchaProvider>
	)
}

export default Contact
