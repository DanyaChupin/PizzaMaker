import React, { FC } from 'react'
import SinglePizza from './SinglePizza'
import Pizza from '../models/Pizza'

interface DispayPizzasProps {
	pizzasList: Pizza[]
	upDatePizza: (newPizza: Pizza) => void
	deletePizza: (id: number) => void
}
const DisplayPizzas: FC<DispayPizzasProps> = ({
	pizzasList,
	upDatePizza,
	deletePizza,
}) => {
	return (
		<div className='container'>
			{pizzasList.map(pizza => {
				return (
					<SinglePizza
						deletePizza={deletePizza}
						pizza={pizza}
						upDatePizza={upDatePizza}
						key={pizza.id}
					/>
				)
			})}
		</div>
	)
}

export default DisplayPizzas
