import { tw } from 'twind'
import Button from './button'
import Navigation from './navigation'
import Typist from 'react-typist'

const Intro = ({ text }: any) => (
    <div className={tw(`lg:mt-20 mx-auto sm:px-6 lg:px-8 pt-2 lg:pt-0 flex flex-col`)}>
        <h1 className={tw(`font-sans font-bold text-5xl lg:text-6xl text-left leading-snug text-gray-700 p-4`)}>
          <Typist cursor={{hideWhenDone: true, hideWhenDoneDelay: 100 }}>
            <span className={tw(`leading-normal`)}> { text.header.intro[0] } <span className={tw(`bg-primary text-white`)}> 
              { text.intro[1] }  
            </span></span>
            <Typist.Backspace count={text.intro[1].length} delay={1000} />
             <span className={tw(`bg-primary text-white`)}>{ text.intro[2] }  </span>            
            </Typist>
        </h1>
        <p className={tw(`text-gray-700 text-left text-3xl lg:text-4xl pt-4 p-4`)}>
          { text.summary } 
        </p> 
        <Button action href="/download">
          { text.action } 
        </Button>
    </div>
)

const Details = ({ images }: any) => (
    <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`px-8 p-8`)}>
          <img src={images.main}/>
        </div>
      </div>
)

const Header = (props: any) => (
  <div>
    <div className={tw(`bg-cover bg-bottom min-h-screen`)} style={{ 
    }}>
        <div className={tw(`min-h-screen bg-white w-full`)}>
            <Navigation />
            <div className={tw("w-full p-8 justify-center mx-auto flex flex-wrap items-top")}>
              <div className={tw("w-full lg:w-3/6")}>
                    <Intro {...props}/>
              </div>
              <div className={tw("w:full lg:w-2/6")}>
                    <Details {...props}/>
              </div>
            </div>
       </div>
    </div>
    </div>
)

export default Header
