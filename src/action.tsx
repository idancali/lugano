import { tw } from 'twind'
import Button from './button'

const Main = ({ text, links }: any) => (
  <div className={tw(`mt-2 bg-primary bg-opacity-20 h-80`)}>
        <div className={tw("container mx-auto flex flex-wrap justify-center p-22 lg:p-12")}>
        <p className={tw(`mt-8 text-xl justify-center lg:text-4xl font-bold tracking-tight p-8 lg:p-2 text-gray-700`)}>
             { text.title }
        </p>
          <div className={tw(`flex flex-wrap w-full justify-center py-4 pt-4 lg:pt-8 items-center`)}>
            <Button action href={links.main}>
              { text.button }
            </Button>
        </div>
        </div>
   </div>
)

export default Main