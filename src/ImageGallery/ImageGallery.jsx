import React from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ galleryItems, onOpen }) => (
    <div>
        <ul className={styles.ImageGallery}>
            {galleryItems.length > 0 &&
                galleryItems.map(({ id, webformatURL, largeImageURL, likes, views, comments, downloads }) => (
                    <ImageGalleryItem
                        onOpen={onOpen}
                        id={id}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                        likes={likes}
                        views={views}
                        comments={comments}
                        downloads={downloads}
                    />
                ))
            }
        </ul>
    </div>
);


export default ImageGallery;
