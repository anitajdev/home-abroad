const PlaceImg = ({place, index=0, className=null}) => {

    if(!place.photos?.length) {
        return "";
    }

    if(!className) {
        className = "object-cover w-full";
    }

  return (
    <img className={className} src={"http://localhost:4000/uploads/"+place.photos[index]} alt="my-accommodation-img" />
  );
}

export default PlaceImg