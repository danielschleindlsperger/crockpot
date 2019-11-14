# Crockpot

(Typesafe) styled HTML Elements with design system props.

```tsx
import React from 'react'
import { C } from 'crockpot'


const Component = () => (
  <C.section mt={3}>
    <C.h1 color="white" bg="darkgrey">Hello!</C.h1>
    <C.button onClick={() => alert('BOOH')}>Click me</C.butotn>
  </C.section>
)
```

## TODO

- theming

## Contributing

### Commands

```bash
npm start
npm build
npm t
npm lint
```
