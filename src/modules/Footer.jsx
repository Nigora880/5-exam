

import {FooterFrame,Marquee,Marquee2} from "../assets/img"
import {FormIcon} from "../assets/icons"
import Ahref from "../components/ahref"
function Footer(){
return(
    <footer className="footer-section">
        <div className="containers">
        <img className="text-center mx-auto pt-[86px]" src={FooterFrame} alt="frame" width={266} height={265} />
        <div class=" partner-marquee">
            <div class="partner-track">
                <img src={Marquee} class="partner" />
                <img src={Marquee2} class="partner" />
                <img src={Marquee} class="partner" />
                <img src={Marquee2} class="partner" />
                <img src={Marquee} class="partner" /> 
                <img src={Marquee2} class="partner" />  
                <img src={Marquee} class="partner" />
                <img src={Marquee2} class="partner"/>
            </div>
        </div>           
         <div className=" w-full h-[1px] bg-[#D092BA] mt-[48px]"></div>
        <div className=" flex gap-[79px]">
            <div className="mt-[129px] flex flex-col ">
               <Ahref title={`UX Designer`}/>
               <Ahref title={`UI Designer`}/>
               <Ahref title={`Protected`}/>
            </div>
                <div className="mt-[129px] pb-[48px] flex flex-col">
                <Ahref title={`Style Guide`}/>
                <Ahref title={`Licenses`}/>
                <Ahref title={`Changelog`}/>
                </div>
                <form className="mt-[129px] w-[819px] h-[116px] bg-white rounded-[20px] flex justify-between">
                    <input className="placeholder:text-[#242F65] w-[550px] py-[40px] text-[24px] pl-[30px]" type="text" placeholder="Interested in working together? Drop me a line"/>   
                    <button className="flex w-[187px] h-[52px] bg-[#242F65] text-white border-[1px] hover:border-[#242F65] hover:text-[#242F65] duration-300 hover:bg-[#FFFFFF] rounded-xl my-[30px] py-[10px] pl-[20px] mr-[40px] gap-[10px] pb-[5px]"><FormIcon/> Write Now</button>
                </form>
                </div>
            <div className="containers w-full h-[1px] bg-[#D092BA] mt-[89px]"></div>
            <div className="containers justify-center items-center flex font-normal text-[20px] leading-[30px] gap-[3px] text-[#242F65] ">
              <a className="hover:text-[#FF774C] py-[20px]" href="#">Copyright © UIUXer | Designed by</a>
              <a className="hover:text-[#FF774C]" href="#">VictorFlow</a>
              <a className="hover:text-[#FF774C]" href="#">Templates - Powered by</a>
              <a className="hover:text-[#FF774C]" href="#">Webflow</a>
         </div>
        
        </div>
       
    </footer>
)
}

export default Footer