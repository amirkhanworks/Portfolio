import React from 'react';
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

const PhotoGallery = () => {
  return (
    <section className="px-6 py-16 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Gallery</h2>
        <div className="h-1 w-12 bg-cyan-400 mx-auto mb-4 rounded-full" />
        <p className="mt-12 text-center text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Whether it’s capturing moments through a lens, chasing adrenaline on adventure trips, or getting lost in anime storylines — I find joy in the little things. Off the grid or on the couch, I value time with family and friends as the best recharge.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={photo.src}
              alt={photo.caption}
              loading="lazy"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-sm px-3 py-2 transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
              {photo.caption}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
