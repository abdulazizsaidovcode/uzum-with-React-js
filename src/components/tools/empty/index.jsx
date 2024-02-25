import DefaultBtn from "../btns/default";

function Empty({img, tite, description, btnText}){
    return(
        <div className="w-full h-96 flex justify-center items-center flex-col">
            <img src={img} alt="rasm" className="w-40"/>
            <p>{tite}</p>
            <DefaultBtn name={btnText}/>
        </div>
    )
}
export default Empty;