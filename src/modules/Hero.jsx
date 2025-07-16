import {Frame} from "../assets/img"
function Hero() {
return(
    <section className="hero-section pb-[35px]">
        <div className="containers flex flex-col">
          <h1 className="font-normal text-[100px] leading-[130px] text-[#242F65] text-center mx-auto mt-[50px] " >Tell your creativity to the world with <span className="font-normal text-[100px] leading-[130px] text-[#FF774C]">UIUXer</span></h1>
            <p className='font-normal text-[25px] leading-[37.5px] text-[#242F65] text-center mx-auto w-[500px]'>UIUXer is a creative, minimal, and cleanly designed personal and portfolio Webflow template.</p>
            <div className="flex items-center mx-auto gap-[10px] py-[25px]">
                <button className='w-[266px] h-[69px] border-[2px] hover:text-[#FF774C] border-[#FF774C] hover:bg-[#FFFFFF] duration-300 rounded-sm bg-[#FF774C] text-[#FFFFFF] text-[18px] leading-[27px] font-normal'>Buy Template</button>
                <button className='w-[266px] h-[69px] border-[2px] hover:text-[#7390F9] border-[#7390F9] hover:bg-[#FFFFFF] duration-300 rounded-sm bg-[#7390F9] text-[#FFFFFF] text-[18px] leading-[27px] font-normal'>Explore Page</button>
            </div>
            
            <img className='text-center mx-auto py-[41px]' src={Frame} alt="frame" width={203} height={205} />
            
        </div>

    </section>
)
}

export default Hero