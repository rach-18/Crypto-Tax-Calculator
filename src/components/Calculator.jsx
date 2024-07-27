import { useState, useEffect } from "react";

function Calculator() {
    const [shortTerm, setShortTerm] = useState(false);
    const [taxRates , setTaxRates] = useState("0%");
    const [purchasePrice , setPurchasePrice] = useState(0);
    const [salePrice , setSalePrice] = useState(0);
    const [expensePrice , setExpensePrice] = useState(0);
    const [annualIncome , setAnnualIncome] = useState(0);
    const [capitalGains , setCapitalGains] = useState(0);
    const [discountCapitalGains, setDiscountCapitalGains] = useState(0);
    const [netGains, setNetGains] = useState();
    const [tax, setTax] = useState();

    const handleTaxRate = (value)=>{
        setAnnualIncome(value)
        if(value === "0"){
            setTaxRates("0%");
        }else if(value === "19"){
            setTaxRates('Nil + 19% of excess over $18,200')
        }else if(value === "32.5"){
            setTaxRates('$5,092 + 32.5% of excess over $45,000')
        }else if(value === "37"){
            setTaxRates('$29,467 + 37% of excess over $120,000')
        }else if(value === "45"){
            setTaxRates('$51,667 + 45% of excess over $180,000')
        }
    }

    const getPurchasePrice = (e) => {
        let value = e.target.value;
        if(value < 1){
            value = 0;
        }
        setPurchasePrice(value);
    }
    const getSalesPrice = (e)=> {
        let value = e.target.value;
        if(value < 1){
            value = 0;
        }
        setSalePrice(value);
    }
    const getExpenses = (e)=> {
        let value = e.target.value;
        if(value < 1){
            value = 0;
        }
        setExpensePrice(value);
    }

    useEffect(()=>{
        let gain = salePrice - purchasePrice - expensePrice;
        setCapitalGains(gain);
        let discount;
        if (gain > 0) {
        discount = (gain * 50) / 100;
        setDiscountCapitalGains(discount);
        }
        if (!shortTerm) {
        let netGain = gain - discount;
        setNetGains(netGain);
        } else {
        setNetGains(gain);
        }

        let tax = (gain * parseFloat(annualIncome)) / 100;
        setTax(tax);

    },[salePrice , annualIncome , expensePrice , purchasePrice , shortTerm])

    return (
        <div className="bg-white w-[95%] mx-auto rounded-lg py-8 px-10 md:text-base text-sm">
            <p className="text-center md:text-4xl text-3xl font-bold mb-8">Free Crytpo Tax Calculator Australia</p>
            <div className="flex sm:flex-row flex-col items-center sm:gap-0 gap-4 md:justify-around justify-between mb-8">
                <div className="flex gap-5 items-center">
                    <p>Financial Year</p>
                    <select className="bg-[#eff2f5] px-5 py-2 rounded-md">
                        <option value="2023-24">FY 2023-24</option>
                    </select>
                </div>
                <div className="flex gap-5 items-center">
                    <p>Country</p>
                    <select className="bg-[#eff2f5] px-5 py-2 rounded-md">
                        <option value="australia">Australia</option>
                    </select>
                </div>
            </div>
            <hr className="mb-10" />
            <div className="flex sm:flex-row flex-col md:justify-around justify-between">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col gap-2">
                        <div>
                            <p>Enter purchase price of Crypto ($)</p>
                            <input
                                className="bg-[#eff2f5] px-5 py-3 rounded-md my-2" 
                                type="number" 
                                value={purchasePrice}
                                onChange={getPurchasePrice}
                            />
                        </div>
                        <div className="sm:hidden block">
                            <p>Enter sale price of Crypto ($)</p>
                            <input
                                className="bg-[#eff2f5] px-5 py-3 rounded-md my-2" 
                                type="number" 
                                value={salePrice}
                                onChange={getSalesPrice}
                            />
                        </div>
                        <div>
                            <p>Enter your Expenses ($)</p>
                            <input
                                className="bg-[#eff2f5] px-5 py-3 rounded-md my-2" 
                                type="number" 
                                value={expensePrice}
                                onChange={getExpenses}
                            />
                        </div>
                        <div className="sm:hidden block">
                            <p>Investment Type</p>
                            <div className="flex gap-2 my-2">
                                <div>
                                    <button 
                                        className={`border-[0.1rem] ${shortTerm ? 'border-[#0052fe] text-[#0052fe] bg-[#f0f5ff]' : 'border-[#0f1629]'} py-2 px-4 rounded-lg`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setShortTerm(true);
                                        }}
                                    >
                                        Short Term <i className={`fa-solid fa-check ${shortTerm ? 'visible' : 'invisible'}`}></i>
                                    </button>
                                    <p className="text-xs">&lt; 12 months</p>
                                </div>
                                <div>
                                    <button 
                                        className={`border-[0.1rem] ${!shortTerm ? 'border-[#0052fe] text-[#0052fe] bg-[#f0f5ff]' : 'border-[#0f1629]'} py-2 px-4 rounded-lg`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setShortTerm(false);
                                        }}
                                    >
                                        Long Term <i className={`fa-solid fa-check ${!shortTerm ? 'visible' : 'invisible'}`}></i>
                                    </button>
                                    <p className="text-xs">&gt; 12 months</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Select Your Anual Income</p>
                            <select 
                                className="bg-[#eff2f5] px-5 py-2 rounded-md my-2"
                                onChange={(e) => {handleTaxRate(e.target.value)}}
                            >
                                <option value="0">$0 - $18,200</option>
                                <option value="19">$18,201 - $45,000</option>
                                <option value="32.5">$45,001 - $120,000</option>
                                <option value="37">$120,001 - $180,000</option>
                                <option value="45">$180,001+</option>
                            </select>
                        </div>
                        <div className="sm:hidden block">
                            <p>Tax Rate</p>
                            <input 
                                className="py-3"
                                type="text"
                                value={taxRates} 
                                readOnly
                            />
                        </div>
                        <div className={`${shortTerm ? 'hidden' : 'block'}`}>
                            <p>Capital Gains Amount</p>
                            <input 
                                className="bg-[#eff2f5] px-5 py-3 rounded-md my-2"
                                type="text"
                                value={`$ ${capitalGains}`} 
                                readOnly
                            />
                        </div>
                        <div className="sm:hidden block">
                            <div className={`${shortTerm ? 'hidden' : 'block'}`}>
                                <p>Discount for long term gains</p>
                                <input 
                                    className="bg-[#eff2f5] px-5 py-3 rounded-md my-2"
                                    type="text"
                                    value={`$ ${discountCapitalGains}`} 
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-center bg-[#ebf9f4] py-5 px-10 rounded-lg">
                        <p>Net Capital tax gains amount</p>
                        <p className="text-[#0fba83] sm:text-3xl text-xl font-medium">$ {netGains}</p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="sm:block hidden">
                            <p>Enter sale price of Crypto ($)</p>
                            <input
                                className="bg-[#eff2f5] px-5 py-3 rounded-md my-2" 
                                type="number" 
                                value={salePrice}
                                onChange={getSalesPrice}
                            />
                        </div>
                        <div className="sm:block hidden">
                            <p>Investment Type</p>
                            <div className="flex gap-2 my-2">
                                <div>
                                    <button 
                                        className={`border-[0.1rem] ${shortTerm ? 'border-[#0052fe] text-[#0052fe] bg-[#f0f5ff]' : 'border-[#0f1629]'} py-2 px-4 rounded-lg`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setShortTerm(true);
                                        }}
                                    >
                                        Short Term <i className={`fa-solid fa-check ${shortTerm ? 'visible' : 'invisible'}`}></i>
                                    </button>
                                    <p className="text-xs">&lt; 12 months</p>
                                </div>
                                <div>
                                    <button 
                                        className={`border-[0.1rem] ${!shortTerm ? 'border-[#0052fe] text-[#0052fe] bg-[#f0f5ff]' : 'border-[#0f1629]'} py-2 px-4 rounded-lg`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setShortTerm(false);
                                        }}
                                    >
                                        Long Term <i className={`fa-solid fa-check ${!shortTerm ? 'visible' : 'invisible'}`}></i>
                                    </button>
                                    <p className="text-xs">&gt; 12 months</p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:block hidden">
                            <p>Tax Rate</p>
                            <input 
                                className="py-3"
                                type="text"
                                value={taxRates} 
                                readOnly
                            />
                        </div>
                        <div className="sm:block hidden">
                            <div className={`${shortTerm ? 'hidden' : 'block'}`}>
                                <p>Discount for long term gains</p>
                                <input 
                                    className="bg-[#eff2f5] px-5 py-3 rounded-md my-2"
                                    type="text"
                                    value={`$ ${discountCapitalGains}`} 
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-center bg-[#ebf2ff] py-5 px-10 rounded-lg">
                        <p>The tax you need to pay*</p>
                        <p className="text-[#0141cf] sm:text-3xl text-xl font-medium">$ {tax}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;
