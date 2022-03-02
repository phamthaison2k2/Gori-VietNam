import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'


const ListBar = () => {
    return (
        <div className="flex mx-auto">
            <ul className="flex flex-row items-center justify-center ">
                <li className="mx-[10px] color-[#252a2b]">
                    <Link to="/">Trang chủ</Link>
                </li>
                <li className="listNav mx-[10px] color-[#252a2b] relative ">
                    <Link to="/product" className="flex justify-center items-center">
                        Sản phẩm 
                        <MdKeyboardArrowDown size="16px"/>
                    </Link>
                    <div className="listItem absolute bg-white z-50 top-[46px]">
                        <ul className="min-w-[180px]">
                            <li className="border border-[#f6f6f6] text-[14px] text-[#252a2b]">
                                <Link className="py-[8px] px-[18px] block" to="/product/season">GORI SEASON</Link>
                            </li>
                            <li className="border border-[#f6f6f6] text-[14px] text-[#252a2b]">
                                <Link className="py-[8px] px-[18px] block" to="/product/basic">ÁO BASIC</Link>
                            </li>
                            <li className="border border-[#f6f6f6] text-[14px] text-[#252a2b]">
                                <Link className="py-[8px] px-[18px] block" to="/product/oldskull">ÁO OLDSKULL</Link>
                            </li>
                            <li className="border border-[#f6f6f6] text-[14px] text-[#252a2b]">
                                <Link className="py-[8px] px-[18px] block" to="/product/hoodie">ÁO HOODIE</Link>
                            </li>
                            <li className="border border-[#f6f6f6] text-[14px] text-[#252a2b]">
                                <Link className="py-[8px] px-[18px] block" to="/product/tote">TÚI TOTE</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="mx-[10px] color-[#252a2b]">
                    <Link to="/contact">Liên hệ</Link>
                </li>
            </ul>
        </div>
    )
}

export default ListBar;
