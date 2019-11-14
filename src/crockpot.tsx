import React from 'react'
import { tagNamesWithGenericProps, tagNamesWithSpecialProps } from './tag-names'
import { Box } from './box'
import { Styled } from './types'

const Crockpot: Styled = (tagNamesWithGenericProps as Readonly<string[]>)
  .concat(tagNamesWithSpecialProps as Readonly<string[]>)
  .reduce<Record<keyof Styled, any>>(
    (acc, elementType) => ({
      ...acc,
      [elementType]: React.forwardRef<any, any>((props, ref) => (
        <Box ref={ref} {...props} as={elementType} />
      )),
    }),
    {} as any,
  )

export { Crockpot, Crockpot as C }
