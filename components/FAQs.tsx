import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

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
    question: "What is the return h policy?",
    answer: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What is the return f policy?",
    answer: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What is the return g policy?",
    answer: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What is the return r policy?",
    answer: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What is the return p policy?",
    answer: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  }
];

export default function FAQs() {
  return (
    <Accordion type="single" collapsible defaultValue={faqs[0].question} className="w-full px-6">
      {faqs.map((faq, index) => (
        <AccordionItem value={faq?.question} key={index} className="group"> 
          <AccordionTrigger className="text-lg font-[100] group-hover:font-[400] hoverEffect">{faq?.question}</AccordionTrigger>
          <AccordionContent className="text-gray-600">{faq?.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
