import { useParams } from "react-router-dom";

const BookingPage = () => {
    const {id} = useParams();
  return (
    <div>single booking</div>
  )
}

export default BookingPage