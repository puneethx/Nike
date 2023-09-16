import { nikeName } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between gap-40 items-center max-container'>
            <a href="/">
                <img
                    src={nikeName}
                    alt='Logo'
                    width={130}
                    height={29}
                />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-24 max-lg:hidden'>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className='font-montserrat leading-normal text-lg text-slate-gray'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className='lg:hidden'>
              <img
                src={hamburger}
                alt='Hamburger'
                width={25}
                height={25}
              />
            </div>
        </nav>
    </header>
  )
}

export default Nav;