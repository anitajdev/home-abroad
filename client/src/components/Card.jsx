'use client';
import { Button } from 'flowbite-react';
import { useState } from 'react';

const Card = () => {
    const [card, setCard] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [zipCode, setZipCode] = useState("");

    function confirmAndPay(e){
        e.preventDefault();
        alert("Payment in progress...");
    }

  return (
    <div className="flex justify-around max-lg:flex-col-reverse">
        {/* Billing information & button */}
        <div className="p-6 my-6 max-lg:mt-4">
            <h2 className="text-xl mb-5">Billing information</h2>
            <form onSubmit={confirmAndPay}>
                <div className="flex items-center relative mt-10">
                    <input id="payment" type="text" placeholder="Credit card (xxxx-xxxx-xxxx-xxxx)" required value={card} onChange={e => setCard(e.target.value)}/>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute right-5 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                </div>
                <div className="flex">
                    <input id="payment" type="text" placeholder="Expiration date (MM/YY)" maxLength={5} required value={expirationDate} onChange={e => setExpirationDate(e.target.value)}/>
                    <input id="payment" type="password" placeholder="CVV" maxLength={3} required value={cvv} onChange={e => setCvv(e.target.value)}/>
                </div>
                <div>
                    <input id="payment" type="text" placeholder="ZIP CODE" required value={zipCode} onChange={e => setZipCode(e.target.value)}/>
                </div>
                <div>
                </div>
                <div>
                    <Button color="gray" type="submit" size="xl" className="mt-5 text-white bg-red-500 border border-white shadow-md shadow-gray-300">Confirm and pay</Button>
                </div>
            </form>
        </div>

        {/* Ground rules and agreement */}
        <div className="p-6 my-6">
            <div className="border-b border-gray-400">
                <h2 className="text-xl mb-5">Ground rules</h2>
                <p className="mb-4">We ask every guest to remember a few simple things about what makes a <br /> great guest.</p>
                <ul className="list-disc">
                    <li>Follow the house rules</li>
                    <li className="mb-2">Treat your Host's home like your own</li>
                </ul>
            </div>
            <div className="mt-3">
                <p className="text-gray-500">I agree to the <span className="link">Host's House Rules,</span>
                <span className="link"> Ground rules for guests,</span> 
                <span className="link"> Rebooking and Refund Policy</span>.
                </p>
            </div>
        </div>
    </div>
  );
}

export default Card