import { tw } from 'twind'

const Top = ({ text }: any) => (
  <div className={tw(`w-full lg:max-w-7xl mx-auto lg:p-0`)}>
    <div className={tw(`mx-auto px-2 p-2`)}>
      <div className={tw(`mb-0 text-center flex flex-col items-center`)}>
        <img className={tw(`h-52 w-52`)} src="/images/logo.png" alt="logo" />
        <p className={tw(`mt-4 text-4xl lg:text-5xl font-bold tracking-tight text-gray-700`)}>
          { text.title }
        </p>
        <p className={tw(`mt-2 mb-8 text-xl lg:text-3xl tracking-tight text-gray-700`)}>
          { text.subtitle }
        </p>
      </div>
    </div>
  </div>
)

const Main = ({ text }: any) => (
  <div className={tw(`bg-cover bg-center`)}>
    <div className={tw(`bg-gray-100`)}>
              <div className={tw("container mx-auto flex flex-wrap items-center text-center p-8 lg:p-12")}>
                  <Top text={text}/>
                  <p className={tw(`text-gray-700 mt-0 text-justify tracking-wide text-l lg:text-2xl`)}>
                    {  text.details }
                  </p>
              </div>
     </div>
  </div>
)

export default Main