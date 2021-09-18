import { tw } from 'twind'
import { CheckCircleIcon } from '@heroicons/react/solid'

const Step = ({ step, last }: any) => {
    if (last) {
        return (<div className={tw("flex relative")}>
          <div className={tw("flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10")}>
              <CheckCircleIcon/>
          </div>
          <div className={tw("flex-grow pl-4")}>
          <h2 className={tw(`font-medium title-font text-2xl text-primary mb-1 tracking-wider`)}>
              { step }
          </h2>
          </div>
      </div>)
    }

    return (<div className={tw("flex relative pb-12")}>
      <div className={tw("h-full w-10 absolute inset-0 flex items-center justify-center")}>
          <div className={tw("h-full w-1 bg-gray-200 pointer-events-none")}>
          </div>
      </div>
      <div className={tw("flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10")}>
      <CheckCircleIcon/>
      </div>
      <div className={tw("flex-grow pl-4")}>
          <h2 className={tw("font-medium title-font text-2xl text-primary mb-1 tracking-wider")}>
              { step }
          </h2>
      </div>
    </div>)
}

const Top = ({ text }: any) => (
    <div className={tw(`w-full lg:max-w-7xl mx-auto lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-primary font-semibold tracking-wide text-2xl lg:text-4xl uppercase`)}>
            {  text.caption }
          </h4>
          <p className={tw(`mt-2 text-4xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
            { text.title }
          </p>
        </div>
        
      </div>
    </div>
)

const Main = ({ text, images }: any) => (
    <div className={tw("text-gray-600 body-font")}>
          <div className={tw("container px-5 py-24 mx-auto flex flex-wrap justify-center")}>
          <Top text={text}/>
              <div className={tw("flex flex-wrap w-full lg:max-w-6xl items-center")}>
                <div className={tw("w-full lg:w-3/6 flex items-center justify-center")}>
                    <img src={images.main} className={tw(`rounded-2xl`)}/>
                </div>
                <div className={tw("w-full lg:w-3/6 pt-10 pb-10 lg:pl-10")}>
                    { text.steps.map((step: any, i: number) => <Step last={i >= text.steps.length - 1} step={step} />)}
                </div>
              </div>
          </div>
    </div>
)

export default Main