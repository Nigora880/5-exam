import {Utilityimg1,Utilityimg2,Utilityimg3,Utilityimg4, Utilityimg5} from "../assets/img"

import Strong from "../components/strong"
import Heading2 from "../components/h2"
import Text from "../components/text"

function Utility(){
    return(
             <section className="pt-[120px] pb-[40px] bg-[#2A2C32]">
                         <div className=" containers mx-auto text-center">
                           <Heading2 extraclass={`text-[#FFFFFF]`} title={`Utility Pages`}/>
                            <Text extraclass={`text-center mx-auto py-[10px] pb-[60px] text-[#FFFFFF]`} title={`Default templates for your site & you can customize these pages to look the way you want.`}/>
                            <div className="flex flex-col">
                               <div className="flex pb-[86px]">
                                   <div className="flex flex-col">
                                   <img  className="width={645} height={368} pb-[39px]" src={Utilityimg1} alt="img"/>
                                   <Strong extraclass={`text-[#FFFFFF]`} title={`Changelog`}/>
                                   </div>
                                   <div className="flex flex-col">
                                   <img  className="width={645} height={368} pb-[39px]" src={Utilityimg2} alt="img"/>
                                   <Strong extraclass={`text-[#FFFFFF]`} title={`Protected Page`}/>
                                   </div>
                               </div>
                               <div className="flex pb-[110px]">
                                   <div className="flex flex-col">
                                   <img  className="width={645} height={958.03125} pb-[39px]" src={Utilityimg3} alt="img"/>
                                   <Strong extraclass={`text-[#FFFFFF]`} title={`Licenses`}/>
                                   </div>
                                   <div className="flex flex-col">
                                   <img  className="width={645} height={958.03125} pb-[39px]" src={Utilityimg4} alt="img"/>
                                   <Strong extraclass={`text-[#FFFFFF]`} title={`Style Guide`}/>
                               </div>
                               
                                   </div>
                                   <div className="flex pb-[86px]">
                                    <div className="">
                                   <img  className="width={645} height={397} pb-[39px] items-start " src={Utilityimg5} alt="img"/>
                                   <Strong extraclass={`text-[#FFFFFF]`} title={`404 Error Page`}/>                                   </div>
                                   </div>
                                    
                               
                            </div>
                            
                          </div>
                        
                     </section>
    )
}
export default Utility