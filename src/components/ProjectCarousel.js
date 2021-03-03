import React from "react"
import PropTypes from "prop-types"
import { Carousel } from "react-responsive-carousel";
import Masonry from "react-masonry-component";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectCarousel = ({ title, images, showAsGrid, gridSize }) => {
  const masonryOptions = {
    transitionDuration: 400
  };

  const gridElements = images.map((image, index) => (
    <img height={gridSize.height} width={gridSize.width} src={image.publicURL} index={index} />
  ))

  return (
    <>
      <div className={'row'}>
        <div className={'one column'}>&nbsp;</div>
        <div className={'eleven columns'}>
          <h2>{title}</h2>
        </div>
      </div>
      <div className={'row'}>
        <div className={'one column'}>&nbsp;</div>
        <div className={'ten columns'}>
          {showAsGrid && (
            <Masonry
              options={masonryOptions}
            >
              {gridElements}
            </Masonry>
          )}
          {!showAsGrid && (
            <Carousel showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
            >
              {images.map((image, imageIndex) => (
                <img src={image.publicURL} key={imageIndex} />
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </>
  )
};

ProjectCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  showAsGrid: PropTypes.bool.isRequired,
  gridSize: PropTypes.object
};

export default ProjectCarousel;
