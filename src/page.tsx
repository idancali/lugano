import { isValidElement, cloneElement, Children } from 'react'
import Head from 'next/head'
import { tw } from 'twind'

interface IProps {
  children: React.ReactNode
  text: any
}

const Page = ({ children, text }: IProps) => {
  const props: any = { text }
  const childrenWithProps = Children.map(children, child => {
    if (isValidElement(child)) {
      return cloneElement(child, props)
    }
    return child;
  })

  return (<div>
      <Head>
      </Head>
      <div className={tw(`min-h-screen flex flex-col`)}>
        { childrenWithProps }
      </div>
  </div>)
}

export default Page
