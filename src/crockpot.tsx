import React from 'react'
import { tagNamesWithGenericProps, tagNamesWithSpecialProps } from './tag-names'
import { Box } from './box'
import { CrockpotElementMap } from './types'

const Crockpot: CrockpotElementMap = (tagNamesWithGenericProps as Readonly<
  string[]
>)
  .concat(tagNamesWithSpecialProps as Readonly<string[]>)
  .reduce<Record<keyof CrockpotElementMap, any>>(
    (acc, elementType) => ({
      ...acc,
      [elementType]: React.forwardRef<any, any>((props, ref) => (
        <Box ref={ref} {...props} as={elementType} />
      )),
    }),
    {} as any,
  )

export { Crockpot, Crockpot as C }
