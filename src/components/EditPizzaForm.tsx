import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import Pizza from '../models/Pizza'
import './styles.css'

interface EditPizzaFormProps {
	data: Pizza
	upDatePizza: (newPizza: Pizza) => void
	handleToggleEdit: () => void
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({
	data,
	upDatePizza,
	handleToggleEdit,
}) => {
	const [editPizza, setEditPizza] = useState<Pizza>(data)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setEditPizza({
			...editPizza,
			[name]: value,
		})
	}
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { title, price, img } = editPizza
		if (title && price && img) {
			upDatePizza(editPizza)
			handleToggleEdit()
		}
	}
	return (
		<form className='edit-form' onSubmit={handleSubmit}>
			<input
				type='text'
				name='title'
				placeholder='Название'
				onChange={handleChange}
				value={editPizza.title}
			/>
			<input
				type='text'
				name='price'
				placeholder='Стоимость'
				onChange={handleChange}
				value={editPizza.price}
			/>
			<input
				type='text'
				name='img'
				placeholder='Изображение'
				onChange={handleChange}
				value={editPizza.img}
			/>
			<button type='submit'>Потвердить</button>
		</form>
	)
}

export default EditPizzaForm
