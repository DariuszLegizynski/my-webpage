import Benefit from "./Benefit"

const Benefits = async () => {
	return (
		<article>
			<h1>Ich heiße Bsc Ing Dariusz Legizynski, ein Programmier mit über 10 Jahren Erfahrung. Ich bin da um zu helfen.</h1>
			<Benefit
				title="title 1"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam nec purus gravida interdum. Donec sit amet odio vel nunc ultricies malesuada."
			/>
			<Benefit
				title="title 2"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam nec purus gravida interdum. Donec sit amet odio vel nunc ultricies malesuada."
			/>
			<Benefit
				title="title 3"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam nec purus gravida interdum. Donec sit amet odio vel nunc ultricies malesuada."
			/>
		</article>
	)
}

export default Benefits
