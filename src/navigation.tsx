import { tw } from 'twind'
import { useState } from 'react'
import Button from './button'

type Link = {
  label: string
  href: string
}

const MenuButton = ({ inverted, toggleMenu, showMenu }: any) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw(`p-2 text-${inverted ? 'gray-800' :  'gray-800'}`)}
  >
    <span className={tw(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
)

const MobileMenu = ({ menu, inverted }: any) => (
  <div className={tw(`md:hidden`)}>
    <div className={tw(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
      {menu.main.map((link: Link) => (
        <a href={link.href} className={tw(`text-${inverted ? 'gray-700' : 'gray-700'} block px-3 py-2 text-base font-medium`)} key={link.label}>
          {link.label}
        </a>
      ))}
    </div>
    <div className={tw(`pt-4 pb-3 border-t border-gray-700`)}>
      <div className={tw(`px-2 space-y-1`)}>
        {menu.secondary.map((link: Link) => (
          <a
            key={`mobile-${link.label}`}
            href={link.href}
            className={tw(`block px-3 py-2 text-base font-medium text-${inverted ? 'gray-700' : 'gray-700'}`)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </div>
)

const Navigation = ({ text, menu, links, inverted, images }: any) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const color = inverted ? `gray-700` : `gray-700`
  const logo = inverted ?  images.mainInverted : images.main
  return (
    <nav className={tw(`bg-transparent p-4`)}>
      <div className={tw(`max-w-7xl mx-auto px-2 sm:px-6 lg:px-2`)}>
        <div className={tw(`flex items-center justify-between h-24`)}>
          <div className={tw(`flex items-center`)}>
            <div className={tw(`flex-shrink-0`)}>
              <a href="/">
              <img className={tw(`h-16 w-16`)} src={logo} alt="logo"  />
              </a>
            </div>
            <div className={tw(`hidden md:block`)}>
              <div className={tw(`ml-10 flex items-baseline space-x-4`)}>
                {links.map((link: Link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={tw(`text-${color} border-1 border-transparent hover:border-1 hover:${color} hover:border-${color} px-3 py-2 rounded-md font-medium`)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className={tw(`hidden md:block`)}>
            <div className={tw(`ml-4 flex items-center md:ml-6`)}>
              <Button primary href={links.action}> { text.action } </Button>
              <Button negative={inverted} href={links.action2}> { text.action2} </Button>
            </div>
          </div>
          <div className={tw(`-mr-2 flex md:hidden`)}>
            <MenuButton inverted={inverted} showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu menu={menu} inverted={inverted} /> : null}
    </nav>
  )
}

export default Navigation
