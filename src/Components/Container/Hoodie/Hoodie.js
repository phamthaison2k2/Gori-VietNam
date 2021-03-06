import dataHoodie from "./dataHoodie";
import { Link } from 'react-router-dom'


const Hoodie = () => {
    return (  
        <>
            <div className="pt-[15px] px-0 pb-[30px] border-t-[15px] border-[#ebecf0] flex justify-center">
                <div className="w-[1170px] px-[10px]">

                    <h2 className="text-[#000] text-[24px] font-bold py-[15px]">
                        <Link to="/product/hoodie" className="cursor-pointer transition-all duration-300 hover:text-[#2962ff]">HOODIE</Link>
                    </h2>
                    
                    <div className="w-full mt-[10px] mb-[30px] flex">
                        <div className=" w-[100%] flex flex-col cursor-pointer">
                            <div className="flex flex-wrap w-full m-[-6px]">
                                {dataHoodie.map(data => (
                                    <div key={data.id} className="flex w-[33.3333%] p-[6px] ">   
                                        <div className="transition-all duration-300 hover:shadow-xl w-full flex">
                                            <div className="w-full relative">
                                                <a className="cursor-pointer">
                                                    <img src={data.image} />
                                                </a>
                                                <div className="bg-[#ff0000] absolute top-[10px] right-[10px] z-10 text-[12px] text-[#fff] px-[6px]">
                                                    <span className="">
                                                        {data.sale}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="w-full bg-white p-[10px] shadow-[#454f5926]">
                                                <h3 className="text-[16px] text-[#797979]">
                                                    {data.name}
                                                </h3>
                                                <p className="font-semibold text-[#000] text-[14px] mt-[10px]">
                                                    <span className="price">{data.price}</span>
                                                    <span className="text-[#878c8f] line-through ml-[12px] font-light text-[13px]">
                                                        {data.oldPrice}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-[50px] overflow-hidden">
                        <img className="w-full bg-[#ccc] transition-all duration-[1.6s] hover:scale-110" src="https://theme.hstatic.net/200000015470/1000737480/14/home_collection_2_banner.jpg?v=77"/>
                    </div>

                    <div className="mt-[40px] pt-[15px]">
                        <div className="w-full flex justify-center cursor-pointer text-[18px] font-bold text-[#000]">
                            <Link to="/product" className="py-[10px] px-[30px] border-black border rounded-md transition-all duration-300 hover:text-[#2962ff] hover:border-[#2962ff]">
                                XEM T???T C??? S???N PH???M
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
 
export default Hoodie;