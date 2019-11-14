import React from 'react'
import { Crockpot } from './crockpot'
import { render, fireEvent } from '@testing-library/react'

test('<Styled.a />', () => {
  const Blub = () => {
    const ref = React.useRef<HTMLButtonElement | null>(null)

    React.useEffect(() => {
      if (ref.current) {
        ref.current.addEventListener('click', () => console.log('BLUBLBULB'))
      }
    }, [])

    return (
      <Crockpot.button ref={ref} onClick={() => console.log('blublu')}>
        blub
        <Crockpot.a href="/hello" bg="red">
          ehueheu
        </Crockpot.a>
        <a href="/heuheu">asdf</a>
      </Crockpot.button>
    )
  }

  const { getByText, debug } = render(<Blub />)

  debug()

  fireEvent.click(getByText('blub'))
})

test.todo('forwards ref')
test.todo('can handle all html elements')
test.todo('can handle all svg elements')
