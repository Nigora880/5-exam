import {Studiesimg1,Studiesimg2} from "../assets/img"
import Heading2 from "../components/h2"
import Text from "../components/text"
import Strong from "../components/strong"

function Studies(){
return(
    <section className="bg-[#EDF0F9] py-[120px]">
         <div className=" containers mx-auto text-center">
                       <Heading2 title={`Stunning Case Studies`}/>
                       <Text extraclass={`text-center mx-auto py-[10px] text-[#525665] pb-[60px]`} title={`Create an optimal visual experience for your users with these inspiring layouts.`}/>
                       <div className="containers flex gap-[30px]">
                        <div className="flex flex-col">
                        <img  className="width={645} height={958.03125} pb-[39px]" src={Studiesimg1} alt="img"/>
                        <Strong title={`Case Study Single - Web`}/>
                        </div>
        
                         <div className="flex flex-col">
                        <img  className="width={645} height={958.03125} pb-[39px]" src={Studiesimg2} alt="img"/>
                        <Strong title={`Case Study Single - Mobile`}/>
                        </div>
                     </div>
                    </div>

    </section>
)
}

export default Studies