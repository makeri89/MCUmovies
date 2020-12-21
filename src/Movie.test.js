/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import MovieForm from './MovieForm'

test('renders a movie', () => {
  const movie = {
    id: 1,
    title: 'Iron Man',
    release_date: '2008-05-02',
    phase: 1,
    // eslint-disable-next-line quotes
    overview: "2008's Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man.",
    directed_by: 'Jon Favreau',
    cover_url: 'https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/iron-man.jpg'
  }

  const component = render(
    <MovieForm movie={movie} />,
  )

  expect(component.container).toHaveTextContent(
    'Iron Man'
  )

  const button = component.getByText('Show more')
  fireEvent.click(button)

  expect(component.container).toHaveTextContent(
    'Part of phase 1'
  )
})