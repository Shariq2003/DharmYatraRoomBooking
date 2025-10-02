import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const MediaCarouselPopup = ({ isOpen, onClose, media }) => {
  const allMedia = media
    ? media.flatMap(group => group.data.map(item => ({ ...item, type: group.type })))
    : [];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!media) return null;

  const prev = () => setCurrentIndex((currentIndex - 1 + allMedia.length) % allMedia.length);
  const next = () => setCurrentIndex((currentIndex + 1) % allMedia.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
          >
            <button
              onClick={onClose}
              className="absolute top-[-12px] right-[-12px] md:right-2 text-white bg-red-500 hover:bg-red-600 p-2 rounded-full z-50 cursor-pointer"
            >
              <FaTimes />
            </button>
            {allMedia.length === 0 ? (
              <div className="text-white text-lg md:text-xl font-semibold">
                No media available
              </div>
            ) : (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-700/50 hover:bg-gray-700/80 p-3 rounded-full z-50 cursor-pointer"
                >
                  <FaArrowLeft />
                </button>

                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-700/50 hover:bg-gray-700/80 p-3 rounded-full z-50 cursor-pointer"
                >
                  <FaArrowRight />
                </button>

                <div className="w-full h-full flex items-center justify-center">
                  {allMedia[currentIndex].type === "images" ? (
                    <img
                      src={allMedia[currentIndex].src}
                      alt="room media"
                      className="max-h-[80vh] rounded-xl object-contain shadow-lg"
                    />
                  ) : (
                    <video
                      src={allMedia[currentIndex].src}
                      controls
                      autoplay
                      muted
                      loop
                      className="max-h-[80vh] rounded-xl shadow-lg"
                    />
                  )}
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MediaCarouselPopup;
