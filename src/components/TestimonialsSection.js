import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Amir Khan",
    role: "PMO & GTM | Client Strategy Consultant",
    company: "Open to work",
    content: "Akash demonstrated exceptional versatility beyond technical expertise. He played a pivotal role in assisting non-tech colleagues and contributed valuable feedback to marketing campaigns. His ability to wear multiple hats and proactive approach make him an invaluable asset to any organization.",
    rating: 5,
    avatar: "AK"
  },
  {
    name: "Samiksha Shetty",
    role: "Deputy Manager - WTS",
    company: "WNS",
    content: "Akash's outstanding work in Azure DevOps and Azure AVD implementation has transformed infrastructure for multiple organizations. His expertise in security and cost optimization consistently delivers exceptional results.",
    rating: 5,
    avatar: "SS"
  },
  {
    name: "Shravani B.",
    role: "Founder & CEO | Brand Strategist",
    company: "Social Media Marketing Specialist",
    content: "Akash's extensive technical expertise has been invaluable in deepening my understanding of DevOps and Cloud concepts. His adept problem-solving approach significantly contributed to my project comprehension.",
    rating: 5,
    avatar: "SB"
  },
  {
    name: "Mohammad Ali Shaikh",
    role: "Senior Associate Consultant",
    company: "Infosys",
    content: "Akash is a team player, proactive, and committed professional. When given challenging tasks, he finds solutions with a smile. His broad-minded approach makes him an asset to any organization.",
    rating: 5,
    avatar: "MS"
  },
  {
    name: "Ping Fung Yin",
    role: "DevOps Engineer",
    company: "Landmark Information Group",
    content: "Akash excels in learning new technologies and conducts himself professionally with clients and peers. His expertise in Azure and Windows Virtual Desktop sets him apart from other colleagues.",
    rating: 5,
    avatar: "PY"
  }
];

const TestimonialsSection = memo(() => {
  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} size={16} className="text-yellow-400 fill-current" />
    ));
  };

  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 text-white">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">What People Say</h2>
        <div className="h-1 w-12 bg-cyan-400 mx-auto mb-4 rounded-full" />
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-4">
          Here's what colleagues and clients have to say about working with me
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-[#111827] border border-cyan-700 rounded-xl p-6 relative"
          >
            <Quote className="text-cyan-400/20 absolute top-4 right-4" size={24} />
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-semibold">
                {testimonial.avatar}
              </div>
              <div>
                <h4 className="font-semibold text-white">{testimonial.name}</h4>
                <p className="text-sm text-cyan-400">{testimonial.role}</p>
                <p className="text-xs text-gray-400">{testimonial.company}</p>
              </div>
            </div>
            
            <div className="flex gap-1 mb-3">
              {renderStars(testimonial.rating)}
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed italic">
              "{testimonial.content}"
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

export default TestimonialsSection; 