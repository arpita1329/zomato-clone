import React, {useState} from "react";
import ImageViewer from 'react-simple-image-viewer';

// Components
import PhotoCollection from "../../Components/restaurant/PhotosCollection";

const Photos = () => {
    const [photos, setPhotos] = useState([
        "https://b.zmtcdn.com/data/pictures/chains/8/100148/dea1f8e1bc5b7fe258483f4641b20a47.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/8/100148/a2a2cc63da72ef44a515d4b3f409a174.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/8/100148/bfdc584cc727cd8486988a0690fdad67.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/8/100148/22f627ba771b601acf2da434822fdffa.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/8/100148/09fbd766e559b279361dfd0ec7ba0140.jpg"
    ]);
    const [ isMenuOpen, setIsMenuOpen] = useState(false);
    const [ CurrentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    return (
        <>
            {isMenuOpen && (
                <ImageViewer
                    src={ photos }
                    currentIndex={ CurrentImg }
                    disableScroll={ false }
                    onClose={ closeViewer }
                />
            )}
            <div className="flex flex-wrap gap-3">
                {
                    photos.map((photo) =>
                        <PhotoCollection image={photo} openViewer={openViewer} />
                    )
                }
            </div>
        </>
    );
};

export default Photos;
