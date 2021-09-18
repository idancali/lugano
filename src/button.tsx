import { tw } from 'twind';

interface IButton {
  primary?: boolean
  action?: boolean
  negative?: boolean
  href?: string
  children: React.ReactNode
  modifier?: string
}

const Button = ({ href, primary, negative, action, modifier, children, ...rest }: IButton) => {
  const baseStyle = `text-center font-sans font-medium py-2 px-4 border rounded`;
  const prime = `bg-primary text-white border-none hover:bg-primary-100 hover:text-white `
  let styles = primary ? prime : action ? `${prime} p-4 text-2xl` : `text-primary m-4 border-1 hover:border-primary-100 hover:bg-primary-100 hover:text-white bg-white border-primary`

  if (negative) {
    styles = `text-primary m-4 border-1 hover:border-white hover:bg-primary-100 hover:text-white border-primary bg-primary-100`
  }

  return (
    <a href={href} type="button" className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)} {...rest}>
      {children}
    </a>
  );
};

export default Button
