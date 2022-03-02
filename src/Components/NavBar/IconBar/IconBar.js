import { BsSearch } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import { BsCart2 } from 'react-icons/bs'
import { useState } from 'react'



const IconBar = () => {

    const [openSearch, setOpenSearch] = useState(false)
    const [openCart, setOpenCart] = useState(false)

    const handleSearch = () => {
        setOpenSearch(!openSearch)
    }

    const handleCart = () => {
        setOpenCart(!openCart)
    }
    

    return (
        <div className="flex items-center justify-center">
            <div className="flex ">
                
                <div>
                    <BsSearch size="22px" onClick={handleSearch} className=" mx-[10px] cursor-pointer font-light color-[#252a2b] "/>

                    {openSearch && (

                        <div className="absolute shadow-md color-[#fff] top-[70px] w-[420px] right-[178px] transition-all z-50 bg-white">
                            <div className="p-[20px] w-full">
                                <div className="block w-full">
                                    <p className="text-center text-[18px] color-[#000] border-b-[1px] pb-[10px]">TÌM KIẾM</p>
                                    <div className="flex justify-end w-full my-6">
                                        <div className="w-full">
                                            <input
                                                type="text"
                                                placeholder='Tìm kiếm sản phẩm...'
                                                className="
                                                    bg-[#f3f3f3]
                                                    w-full
                                                    outline-none
                                                    h-[44px]
                                                    py-[8px]
                                                    pr-[50px]
                                                    pl-[20px]
                                                    border-solid 
                                                    border-[1px]
                                                    border-[#f3f3f3]
                                                    leading-[28px]
                                                "
                                            />
                                        </div>
                                        <button type="button" className="bg-[#f3f3f3] absolute w-[50px] h-[44px] flex items-center justify-center">
                                            <BsSearch size="18px" color="#677279"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
                <div>
                    <FaRegUser size="22px" className="mx-[10px] cursor-pointer font-light color-[#252a2b]"/>
                </div>
                <div>
                    <BsCart2 onClick={handleCart} size="22px" className="mx-[10px] cursor-pointer font-light color-[#252a2b]"/>

                    {openCart && (

                        <div className="absolute shadow-md color-[#fff] top-[70px] w-[420px] right-[178px] transition-all z-40 bg-white">
                            <div className="p-[20px] w-full">
                                <div className="block w-full">
                                    <p className="text-center text-[18px] color-[#000] border-b-[1px] pb-[10px]">GIỎ HÀNG</p>
                                    <div className="w-full ">
                                        <div className="flex flex-col justify-center items-center py-[20px] border-b-[1px] border-solid border-[]">
                                            <BsCart2 className="w-[50px] h-[50px] text-[#2962ff]"/>
                                            <p className="mt-[10px] text-[14px] font-light">Hiện chưa có sản phẩm</p>
                                        </div>
                                        
                                        <div className="w-full py-[20px] flex">
                                            <div className="w-[50%]">
                                                <h2 className="text-[14px] font-medium">TỔNG TIỀN:</h2>
                                            </div>
                                            <div className="w-[50%] justify-end flex">
                                                <h2 className="text-[15px] font-bold text-[red] ">0₫</h2>
                                            </div>
                                        </div>

                                        <div className="w-full">
                                            <button className="text-[#fff] bg-[#2962ff] border border-solid border-[#2962ff] hover:text-[#2962ff] hover:bg-white w-full text-[14px] py-[10px] transition-all duration-300 mb-[10px]">
                                                THANH TOÁN
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </div>
    )
}

export default IconBar;