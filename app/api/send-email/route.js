import sendgrid from "@sendgrid/mail"

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

export async function POST(req) {
	try {
		const { name, email, phone, message } = await req.json()

		await sendgrid.send({
			to: `${email}`,
			from: process.env.NEXT_PUBLIC_EMAIL_SENDER,
			template_id: process.env.NEXT_PUBLIC_TEMPLATE_CUSTOMER,
			dynamic_template_data: {
				name,
				email,
				message,
				phone,
			},
		})

		await sendgrid.send({
			to: process.env.NEXT_PUBLIC_EMAIL_RECEIVER,
			from: process.env.NEXT_PUBLIC_EMAIL_SENDER,
			template_id: process.env.NEXT_PUBLIC_TEMPLATE_ME,
			dynamic_template_data: {
				name,
				email,
				message,
				phone,
			},
		})

		return new Response(JSON.stringify({ success: true }), { status: 200 })
	} catch (error) {
		console.error(error)
		return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 })
	}
}
