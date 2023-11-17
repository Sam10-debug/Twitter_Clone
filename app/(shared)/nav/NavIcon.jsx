import Image from "next/image"

const NavIcon = ({source,altText,title}) => {

  return (
    <div className=" flex gap-4 font-bold text-navText text-twitter-blue">
      <Image src={source} alt={altText} height={25} width={25} />
    <h4 className="">{title}</h4>
 </div>
  )
}

export default NavIcon
