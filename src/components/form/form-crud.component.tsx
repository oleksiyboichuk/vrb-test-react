import { FC, FormEvent } from 'react';
import { Button } from '../button/button.component';

interface FormCrudProps {
	active: boolean;
	setActive: (value: boolean) => void;
}

export const FormCrud: FC<FormCrudProps> = ({ active, setActive }) => {

	let handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setActive(false)
	}

	return (
		<div className='fixed top-0 left-0 bg-black/50 w-full h-full z-50 flex justify-center items-center'>

			<form className='relative w-[90%] md:w-[40%] bg-neutral-300 px-5 py-10 flex flex-col items-center mx-auto rounded-md' onSubmit={handleSubmit}>
				<input type="text" className='m-2 w-[50%] px-2' placeholder='Author...' />
				<input type="text" className='m-2 w-[50%] px-2' placeholder='Title...' />
				<textarea className='m-2 w-[50%] px-2' placeholder='Description...' />
				<input type="text" className='m-2 w-[50%] px-2' placeholder='Image URL...' />
				<Button text='Create' />

				<div className='absolute z-50 text-red-500 text-2xl font-bold right-[2%] top-[2%] cursor-pointer' onClick={() => setActive(false)}>X</div>
			</form>

		</div>
	)
}
