type PageTitleProps = {
  title: string
  description: string
}

const PageTitle = (props: PageTitleProps) => {
  const { title, description } = props

  return (
    <div className='my-8'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='mt-4'>{description}</p>
    </div>
  )
}

export default PageTitle
