import { FC } from 'react'

interface ButtonProps {
	text: string
	onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ text, onClick }) => {
	return (
		<button className='bg-neutral-900 text-stone-100 px-3 py-1 text-2xl rounded-md hover:scale-105 hover:bg-neutral-700 transition-slow' onClick={onClick}>
			{text}
		</button>
	)
}
