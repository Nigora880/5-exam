
const Button =({title, extraclass}) => {
    return <button className={`w-[266px] h-[69px] border-[2px]  rounded-xl  text-[#FFFFFF] hover:bg-[#FFFFFF]  text-[18px] leading-[27px] font-normal duration-300 ${extraclass}`}>{title}</button>
}
export default Button