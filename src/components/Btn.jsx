import "../styles/components-styles/Btn.scss"


const Btn = ({ href, className, children }) => {
  return (
    <a href={href} class={`Btn-component ${className}`}>
      {children}
      <span> →</span>
    </a>
  )
}

export default Btn
