import React from "react"
import PropTypes from "prop-types"
import {Carousel} from "react-responsive-carousel";

const ProjectCarousel = ({title, images}) => {
  return (
    <>
      <div className={'row'}>
        <div className={'one column'}>&nbsp;</div>
        <div className={'eleven columns'}>
          <h2>{title}</h2>
        </div>
      </div>
      <div className={'row'}>
        <div className={'two columns'}>&nbsp;</div>
        <div className={'eight columns'}>
          <Carousel showArrows={true}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    >
            {images.map((image, imageIndex) => (
              <img src={image.publicURL} key={imageIndex}/>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  )
};

ProjectCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
};

export default ProjectCarousel;
