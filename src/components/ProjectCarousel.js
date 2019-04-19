import React from "react"
import PropTypes from "prop-types"
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import style from "../styles/projectCarousel.module.css"

const ProjectCarousel = ({title, images}) => {
  const imagesCarousel = images.map(imageUrl => {
    return {
      original: imageUrl.childImageSharp.fluid.src,
      thumbnail: imageUrl.childImageSharp.fluid.src
    }
  });

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
        <ImageGallery items={imagesCarousel}
                      showThumbnails={false}
                      showPlayButton={false}
                      showFullscreenButton={false}
                      showBullets={true}
                      additionalClass={style.imageGallery}
        />
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
