import {SupportivePageimg1,SupportivePageimg2,SupportivePageimg3,SupportivePageimg4} from "../assets/img"

import Heading2 from "../components/h2"
import Text from "../components/text"
import Strong from "../components/strong"

function SupportivPage(){
    return(
      <section className="pt-[120px] pb-[40px]">
                  <div className=" containers mx-auto text-center">
                    <Heading2 title={`Supportive Pages`}/>
                    <Text extraclass={`text-center mx-auto py-[10px] text-[#525665] pb-[60px]`} title={`Feel the feature of creativity with these inner page layouts that perfectly match your site.`}/>
                      <div className="flex flex-col">
                        <div className="flex pb-[86px]">
                            <div className="flex flex-col">
                            <img  className="width={645} height={958.03125} pb-[39px]" src={SupportivePageimg1} alt="img"/>
                              <Strong title={`About Me`}/>
                            </div>
                            <div className="flex flex-col">
                            <img  className="width={645} height={958.03125} pb-[39px]" src={SupportivePageimg2} alt="img"/>
                              <Strong title={`Blog`}/>
                            </div>
                        </div>
                        <div className="flex pb-[110px]">
                            <div className="flex flex-col">
                            <img  className="width={645} height={958.03125} pb-[39px]" src={SupportivePageimg3} alt="img"/>
                              <Strong title={`Blog Single`}/>
                            </div>
                            <div className="flex flex-col">
                            <img  className="width={645} height={958.03125} pb-[39px]" src={SupportivePageimg4} alt="img"/>
                              <Strong title={`Contact Us`}/>
                            </div>
                        </div>
                     </div>
                     
                   </div>
                 
              </section>
    )
}
export default SupportivPage