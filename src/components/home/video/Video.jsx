import React from 'react';
import styles from './Video.module.css'; // Assuming you're using a CSS module
import videoshape1 from '../../../assets/videoshape1.png'; // Placeholder image
import video1 from '../../../assets/video1.mp4'

function Video() {
    return (
        <div className={styles.video}>
            <div className={styles.videoContainer}>
                {/* Thumbnail Image */}
                <img src={videoshape1} alt="Video Thumbnail" className={styles.videoshape} />

                {/* Embedded Local Video */}
                <div className={styles.videoEmbed}>
                    <video
                        className={styles.videoPlayer}
                        controls
                        // Show the placeholder image as a poster before playing the video
                    >
                        <source src={video1} type="video/mp4" />

                    </video>
                </div>
            </div>
        </div>
    );
}

export default Video;
