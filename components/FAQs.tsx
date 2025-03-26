"use client";
import { Accordion, AccordionItem } from "@heroui/react";

const faqs = [
  {
    question: "Where can I find the best deals on products?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "How do I know if a product is authentic?",
    answer: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What is the return policy?",
    answer: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What is the return policy?",
    answer: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What is the return policy?",
    answer: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What is the return policy?",
    answer: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What is the return policy?",
    answer: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What is the return policy?",
    answer: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  }
];

export default function FAQs() {
  return (
    <Accordion className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          aria-label={faq.question}
          title={<span className="text-lg font-semibold text-blue-600">{faq.question}</span>}
        >
          <p className="text-gray-800">{faq.answer}</p>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
