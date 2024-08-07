import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import About from '../components/About';
import Expertise from '../components/Expertise';
import Contact from '../components/Contact';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', component: <About /> },
    { id: 'expertise', component: <Expertise /> },
    { id: 'contact', component: <Contact /> },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-8 text-center"
        >
          João Medeiros
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl text-center mb-12"
        >
          🖋️🌐🏥💻📚🇬🇧🇦🇪
        </motion.p>
        <nav className="mb-12">
          <ul className="flex justify-center space-x-8">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => setActiveSection(section.id)}
                  className={`text-lg font-semibold ${
                    activeSection === section.id ? 'text-blue-400' : 'text-gray-400'
                  } hover:text-blue-300 transition-colors`}
                >
                  {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {sections.find((section) => section.id === activeSection).component}
        </motion.div>
      </main>
      <footer className="text-center py-8">
        <ChevronDown className="mx-auto animate-bounce" />
        <p className="text-sm text-gray-400">Scroll for more</p>
      </footer>
    </div>
  );
};

export default Index;
