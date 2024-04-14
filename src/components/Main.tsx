import {conversion_rates, MainProps, SelectProps} from "../../public/types"

const Main: React.FC<MainProps> = ({fromRate, toRate, amount, onSetAmount, onSetFromRate, onSetToRate}) => {

    return (
        <div className="">
            {/* <select value={toRate} onChange={onSetToRate} className="">
                {conversion_rates.map((rate, i) =>
                (
                    <option value={rate} key={i} >
                        {rate}
                    </option >
                )
                )}
            </select> */}
            <input type="number" placeholder="input amount" value={amount} onChange={onSetAmount} />
            <Select convRate={conversion_rates} setOnChange={onSetFromRate} value={fromRate} />
            <Select convRate={conversion_rates} setOnChange={onSetToRate} value={toRate} />
        </div>
    )
}



const Select: React.FC<SelectProps> = ({convRate, setOnChange, value}) => {
    return (
      <select value={value} onChange={setOnChange} >
        {convRate.map((rates, i) => (
          <option value={rates} key={i}>
            {rates}
          </option>
        ))}
      </select>
    );
}
export default Main


