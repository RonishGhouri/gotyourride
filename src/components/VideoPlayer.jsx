import React from "react";
import i9 from "../assets/Group-108.png";
import ReactPlayer from "react-player";
import Modal from "react-modal";
import { useState, useEffect } from "react";

// Set the app element for accessibility (modal component)
Modal.setAppElement("#root");

const VideoPlayer = ({ image, video, css }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false); // Modal open state

  const handlePlay = () => {
    setModalIsOpen(true); // Open the modal
  };

  const closeModal = () => {
    setModalIsOpen(false); // Close the modal
  };

  // Effect to disable/enable body scroll when modal is opened/closed
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    // Clean up the effect when the component is unmounted
    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled
    };
  }, [modalIsOpen]);
  return (
    <div className={`relative ${css}`}>
      <img src={image} className="w-4/5 mx-auto rounded-2xl mt-25" alt="" />
      <img
        src={i9}
        onClick={handlePlay}
        className="absolute inset-0 mx-auto top-72 w-25"
        alt=""
      />

      {/* React Modal for video */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 2000, // Set higher z-index to ensure it appears above Swiper.js
          },
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "80%",
            padding: 0,
            border: "none",
            background: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <div className="relative w-full h-full">
          <ReactPlayer
            url={video} // Video URL
            playing={true}
            controls={true}
            width="100%"
            height="100%"
          />
        </div>
      </Modal>
    </div>
  );
};

export default VideoPlayer;
