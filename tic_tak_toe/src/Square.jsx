export const Square = ({value ,onClick , disabled}) =>{
    return(
        <>
        <button className="w-[120px] h-[120px] bg-amber-400 rounded-lg mt-2 text-4xl" onClick={onClick}
         disabled={disabled}>
     {value}
        </button>
        </>
    )
}