import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white py-4"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">JM</h2>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#expertise" className="hover:text-blue-400 transition-colors">Expertise</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
