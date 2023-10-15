const Carousel = ({ slides }) => {
  return (
    <div>
        {slides.map((slide) => (
            <img key={slide.id} src={slide.src} alt={slide.alt}/>
        ))}
    </div>
  )
}

export default Carousel