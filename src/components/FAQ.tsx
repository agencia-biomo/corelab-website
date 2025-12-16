import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/content";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-core-orange font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="section-title mt-2">
            Perguntas <span className="text-core-orange">Frequentes</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Tire suas dúvidas sobre nossos produtos, serviços e modalidades de
            contratação.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4"
            >
              <button
                className={`w-full text-left p-6 rounded-2xl transition-all ${
                  openIndex === index
                    ? "bg-core-orange text-white shadow-lg"
                    : "bg-white hover:bg-gray-50"
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              {openIndex === index && (
                <div className="bg-white rounded-b-2xl px-6 py-4 -mt-2 shadow-lg">
                  <p className="text-core-gray">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-core-gray mb-4">
            Não encontrou sua dúvida? Fale conosco!
          </p>
          <a
            href="https://wa.me/5562981010074?text=Olá! Tenho uma dúvida sobre os serviços da Core."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
