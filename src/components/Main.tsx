import {conversion_rates, MainProps, SelectProps} from "../../public/types"

const Main: React.FC<MainProps> = ({fromRate, toRate, amount, onSetAmount, onSetFromRate, onSetToRate}) => {

    return (
        <div className="flex my-3">
            {/* <select value={toRate} onChange={onSetToRate} className="">
                {conversion_rates.map((rate, i) =>
                (
                    <option value={rate} key={i} >
                        {rate}
                    </option >
                )
                )}
            </select> */}
            <input type="number" placeholder="input amount" value={amount} onChange={onSetAmount} className="w-[100px]"/>
            <Select convRate={conversion_rates} setOnChange={onSetFromRate} value={fromRate} className="mx-2" />
            <Select convRate={conversion_rates} setOnChange={onSetToRate} value={toRate} className="" />
        </div>
    )
}



const Select: React.FC<SelectProps> = ({convRate, setOnChange, value, className=""}) => {
    return (
      <select value={value} onChange={setOnChange} className={className} >
        {convRate.map((rates, i) => (
          <option value={rates} key={i}>
            {rates}
          </option>
        ))}
      </select>
    );
}
export default Main


