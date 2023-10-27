import 'react'

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style, @typescript-eslint/consistent-type-definitions -- original is a interface
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined
  }
}
