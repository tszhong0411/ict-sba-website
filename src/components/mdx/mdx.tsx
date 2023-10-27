import { useMDXComponent } from 'next-contentlayer/hooks'

type MdxProps = {
  code: string
}

const Mdx = (props: MdxProps) => {
  const { code } = props
  const Component = useMDXComponent(code)

  return (
    <div className='prose mx-auto w-full max-w-5xl dark:prose-invert'>
      <Component />
    </div>
  )
}

export default Mdx
