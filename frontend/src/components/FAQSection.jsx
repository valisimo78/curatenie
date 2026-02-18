import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { faqs } from '../mock';

const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-600 rounded-full px-4 py-2 mb-4">
            <ChevronDown className="w-4 h-4" />
            <span className="text-sm font-semibold">Întrebări Frecvente</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ai Întrebări?
          </h2>
          <p className="text-xl text-gray-600">
            Găsește răspunsuri la cele mai frecvente întrebări despre serviciile noastre
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className="bg-gray-50 rounded-2xl border border-gray-200 px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left hover:text-emerald-600 py-6 text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
          <p className="text-gray-700 mb-4 text-lg">
            Nu ai găsit răspunsul la întrebarea ta?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Contactează-ne Direct
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
