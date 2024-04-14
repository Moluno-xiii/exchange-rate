import { useState, useEffect, ChangeEvent } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Main from "./components/Main";
import ErrorMessage from "./components/Error";

const apiKey = "bddae5eca879835200cedbae";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fromRate, setFromRate] = useState("USD");
  const [toRate, setToRate] = useState("NGN");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);

  const onSetToRate = (e: ChangeEvent<HTMLSelectElement>) => {
    setToRate(e.target.value);
  };
  const onSetFromRate = (e: ChangeEvent<HTMLSelectElement>) => {
    setFromRate(e.target.value);
  };
  const onSetAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const amountValue = parseFloat(e.target.value)  
      setAmount(amountValue);
  };

  useEffect(
    function () {

      async function loadRates() {
        try {
          setErrorMessage("");
          setIsLoading(true);
          const response = await fetch(
            `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromRate}/${toRate}/${amount}`,
          );
          if (!response.ok) {
            throw new Error("something went wrong, try agian");
          }

          const data = await response.json();
          console.log(data);
          setResult(data.conversion_result);
          setConversionRate(data.conversion_rate);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
          console.error(err);
          setErrorMessage(err.message);
        } finally {
          setIsLoading(false);
        }
      }
    if (amount <= 0 || !amount) {
      setErrorMessage("");
      return;
    }
    
      loadRates();
    },
    [fromRate, toRate, amount],
  );

  return (
    <div className="flex h-full w-full justify-center">
      <div className="container flex w-full flex-col items-center ss:px-2 lg:px-6">
        <Header />
        <Main
          fromRate={fromRate}
          toRate={toRate}
          amount={amount}
          onSetFromRate={onSetFromRate}
          onSetToRate={onSetToRate}
          onSetAmount={onSetAmount}

        />
        {isLoading && <Loader />}
        {errorMessage && !isLoading && <ErrorMessage  message = {errorMessage}/>}
        {!isLoading && amount > 0 && <p>
          {amount} {fromRate} to {toRate} is : {result }
          </p>}
          {!isLoading && amount > 0 && <p>
            Conversion rate is : {conversionRate}
            </p>}
      </div>
    </div>
  );
}

export default App;
