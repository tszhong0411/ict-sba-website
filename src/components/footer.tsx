import ThemeToggle from './theme-toggle'

const Footer = () => {
  return (
    <footer className='px-4 py-5 print:hidden'>
      <div className='mx-auto flex max-w-7xl items-center justify-between'>
        <p>&copy; {new Date().getFullYear()}</p>
        <ThemeToggle />
      </div>
    </footer>
  )
}

export default Footer
