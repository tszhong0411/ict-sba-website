import { Separator } from './ui/separator'

const Footer = () => {
  return (
    <footer>
      <Separator />
      <div className='mx-auto max-w-5xl px-3 py-2'>
        &copy; {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
