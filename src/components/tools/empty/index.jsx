import DefaultBtn from "../btns/default";

function Empty({ img, tite, description, btnText }) {
    return (
        <div className="w-full h-[500px] flex justify-center items-center flex-col">
            <img src={img} alt="rasm" className="w-36" />
            <p className="mb-5">{tite}</p>
            <p className="mb-5">{description}</p>
            <DefaultBtn name={btnText} />
        </div>
    )
}
export default Empty;