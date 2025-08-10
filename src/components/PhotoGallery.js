import React, { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Camera } from 'lucide-react';
import rafting from '../assets/Gallery/Rafting.jpg';
import one from '../assets/Gallery/1.jpg';
import conference from '../assets/Gallery/IMG_8206.JPG';
import diwali from '../assets/Gallery/Diwali.jpg';
import mountain from '../assets/Gallery/IMG_20210228_080543.jpg';
import anime from '../assets/Gallery/Anime.jpg';

const photos = [
  { src: rafting, caption: "When I thought I was in control. Spoiler: I wasn’t." },
  { src: one, caption: "Channeling my inner Bollywood hero in Goa." },
  { src: conference, caption: "Told them DevOps is fun. They believed me." },
  { src: diwali, caption: "Bright lights, brighter smiles, and way too many sweets." },
  { src: mountain, caption: "Hiked up. Sat down. Contemplated life like a monk." },
  { src: anime, caption: "100% productivity boost powered by Naruto." }
];

const PhotoGallery = memo(() => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700 rounded-2xl p-4 sm:p-6"
        >
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Camera className="text-cyan-400" size={24} />
              <h2 className="text-2xl sm:text-3xl font-bold">Personal Gallery</h2>
            </div>
            <div className="h-1 w-12 bg-cyan-400 mx-auto mb-4 rounded-full" />
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto px-2">
              Capturing moments from adventures, conferences, and life's little joys.
            </p>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
            >
              <span>{isExpanded ? 'Hide Gallery' : 'View Gallery'}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </button>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="border-t border-cyan-700/50 pt-6 sm:pt-8">
                  <p className="text-center text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8 px-2">
                    Whether it's capturing moments through a lens, chasing adrenaline on adventure trips, or getting lost in anime storylines — I find joy in the little things. Off the grid or on the couch, I value time with family and friends as the best recharge.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {photos.map((photo, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-800/30"
                      >
                        <img
                          src={photo.src}
                          alt={photo.caption}
                          loading="lazy"
                          className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white text-xs sm:text-sm px-3 py-2 transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                          {photo.caption}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
});

export default PhotoGallery;
