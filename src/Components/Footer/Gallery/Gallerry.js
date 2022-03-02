import dataGallery from './dataGallery'

const Gallery = () => {
    return (  
        <>
            <div className="w-full pb-[40px]">
                <a target="_blank" href="https://www.instagram.com/gori_vietnam/" className="w-full flex relative cursor-pointer">
                    {dataGallery.map(data => (

                        <div key={data.id} className="w-[16.666666666%] ">
                            <div className="overflow-hidden">
                                <img  className="transition-all duration-[1.5s] hover:scale-150" src={data.image} alt={data.name}/>
                            </div>
                        </div>

                    ))}
                    <div className="absolute top-[23%] left-[42.5%] bg-[#ffffffbf]">
                        <div className="font-bold p-[25px] flex flex-col text-[#333] text-[30px]">
                            FOLLOW US
                            <span className="italic">
                                @instagram
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}
 
export default Gallery;