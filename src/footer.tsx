import { tw } from "twind"
import Button from "./button"

const Section = ({ title, links }: any) => (
  <li className={tw(`w-1/3 pt-0`)}>
    <div>
      <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>
        { title }
      </h4>
      <ul>
      { links.map((link: any) => (
          <li
            className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link[0]}>
            <a href={link[1]}>{link[0]}</a>
          </li>
        ))}
      </ul>
    </div>
  </li>
)

const Footer =  ({ text, links }: any) => (
  <footer className={tw(`bg-white pt-8 lg:pl-4 bg-gray-100`)}>
    <div
      className={tw(
        `max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`
      )}>
      <div className={tw(`w-full lg:w-1/2 p-2`)}>
        <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
          { text.sections.map((section: any) => <Section {...section}/>) }
        </ul>
      </div>
      <div className={tw(`w-full lg:w-1/2 mt-2 lg:mt-0 p-8`)}>
        <div className={tw(`border-1 border-gray-400  bg-white flex items-center justify-center p-4 flex-col  lg:flex-row p-8`)}>
            <p className={tw(`uppercase text-m lg:text-l font-bold lg:mb-0 mb-2 lg:mr-4`)}> 
               { text.action.title }
            </p>
            <Button primary href={links.action} >
              { text.action.button }
            </Button>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
