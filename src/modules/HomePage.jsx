import {Homeimg,Homeimg2} from "../assets/img"
import Heading2 from "../components/h2"
import Text from "../components/text"
import Strong from "../components/strong"
function HomePages() {
    return(
        <section className="pt-[100px] pb-[40px]">
            <div className=" containers mx-auto text-center">
               <Heading2 title={`Professional Home Pages`}/>
               <Text extraclass={`!text-[#525665] leading-[30px] text-[20px] py-[10px] pb-[60px] text-center mx-auto`} title={`Attractive and stylish home layouts bring your portfolio website to the next level.`}/>
               <div className="containers flex gap-[30px]">
                <div className="flex flex-col">
                <img  className="width={645} height={958.03125} pb-[39px]" src={Homeimg} alt="img"/>
                <Strong title={`Home UX Designer`}/>
                </div>

                 <div className="flex flex-col">
                <img  className="width={645} height={958.03125} pb-[39px]" src={Homeimg2} alt="img"/>
                <Strong title={`Home UI Designer`}/>
                </div>
             </div>
            </div>
        </section>
    )
}

export default HomePages