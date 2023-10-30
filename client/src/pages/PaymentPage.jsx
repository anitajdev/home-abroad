import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PlaceGallery from "../PlaceGallery";
import BookingDates from "../BookingDates";
import PlaceImg from "../PlaceImg";
import AddressLink from "../AddressLink";
import Card from "../components/Card";

const PaymentPage = () => {
    const {id} = useParams();
    const [booking, setBooking] = useState(null);
    useEffect(() => {
        if(id) {
            axios.get('/bookings').then(response => {
                const foundBooking = response.data.find(({_id}) => _id === id);
                if(foundBooking) {
                    setBooking(foundBooking);
                }
            });
        }

    },[id]);

    if(!booking) {
        return "";
    }

  return (
    <div className="my-8">
        <h1 className="text-3xl mx-5 my-3 font-semibold">Confirm and Pay</h1>
        <div className="bg-gray-200 p-6 my-6 rounded-2xl flex max-lg:flex-col items-center justify-between">
            <div className="flex flex-col max-lg:mb-5">
                <div className="border-b border-gray-500">
                    <h2 className="text-xl mb-5">Your booking information:</h2>
                    <BookingDates booking={booking} className="mb-2"/>
                </div>
                <div className="mt-5">
                    <h2 className="text-2xl font-semibold ">Total price (EUR): {booking.price}€</h2>
                </div>
            </div>
            <div className="flex rounded-2xl gap-4 mx-4 border border-gray-400 bg-white shadow-md shadow-gray-500">
                <div className="w-48">
                    <PlaceImg place={booking.place} className="rounded-l-2xl"/>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-xl mr-4 leading-7">{booking.place.title}</h2>
                    <AddressLink>{booking.place.address}</AddressLink>
                </div>
            </div>
        </div>
        <div>
            <Card />
        </div>
    </div>
  );
}

export default PaymentPage