import Masonry from "react-masonry-css"

export default function Gallery() {
    const breakpoints = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      }
    
      const images = Array.from({length: 12}).map((_, i) =>(
        {
          id: i,
          url: `https://picsum.photos/300/300?random=${i}`
        }
      ))
    
  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map(img => (
        <img
          key={img.id}
          src={img.url}
          alt="Random"
          style={{ width: "100%", display: "block", marginBottom: "10px" }}
        />
      ))}
    </Masonry>
  );
}