import './Links.scss'

const Links = () => {

    const items = ["Home", "About","Projects","Contact"]
  return (
    <div className='links'>
      {
        items.map(item=>(
            <a href={`#${item}`} key={item}></a>
        ))
      }
    </div>
  )
}

export default Links
