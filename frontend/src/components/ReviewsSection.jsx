import React from 'react';
import { Star, Quote } from 'lucide-react';
import { reviews } from '../mock';

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-50 text-yellow-600 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 fill-yellow-600" />
            <span className="text-sm font-semibold">Recenzii Clienți</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ce Spun Clienții Noștri
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Peste 500 de clienți mulțumiți în Târgu Mureș și județul Mureș
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-emerald-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(review.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Service Badge */}
              <div className="inline-block bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {review.service}
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div>
                  <div className="font-semibold text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString('ro-RO', { year: 'numeric', month: 'long' })}
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {review.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating Card */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 sm:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center items-center space-x-2 mb-4">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="text-5xl font-bold mb-2">5.0 din 5</div>
            <p className="text-xl text-emerald-100 mb-6">
              Bazat pe {reviews.length} recenzii verificate
            </p>
            <p className="text-emerald-50 leading-relaxed">
              Suntem mândri să oferim servicii de curățenie care depășesc așteptările clienților noștri. 
              Fiecare recenzie ne motivează să păstrăm standardele înalte de calitate și profesionalism.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
