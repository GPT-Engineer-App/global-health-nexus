import { motion } from 'framer-motion';
import { Twitter, Linkedin, Mail } from 'lucide-react';

const ContactItem = ({ icon, text, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center space-x-2 text-lg hover:text-blue-400 transition-colors"
  >
    {icon}
    <span>{text}</span>
  </motion.a>
);

const Contact = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
      <div className="space-y-4">
        <ContactItem
          icon={<Twitter className="w-6 h-6" />}
          text="@joaomedeiros"
          href="https://twitter.com/joaomedeiros"
        />
        <ContactItem
          icon={<Linkedin className="w-6 h-6" />}
          text="João Medeiros"
          href="https://www.linkedin.com/in/joaomedeiros"
        />
        <ContactItem
          icon={<Mail className="w-6 h-6" />}
          text="joao@example.com"
          href="mailto:joao@example.com"
        />
      </div>
    </section>
  );
};

export default Contact;
