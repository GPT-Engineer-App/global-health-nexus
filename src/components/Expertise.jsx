import { motion } from 'framer-motion';
import { Book, Globe, Stethoscope } from 'lucide-react';

const ExpertiseItem = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-800 p-6 rounded-lg"
  >
    {icon}
    <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
    <p>{description}</p>
  </motion.div>
);

const Expertise = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-8">Areas of Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ExpertiseItem
          icon={<Globe className="w-12 h-12 text-blue-400" />}
          title="Global Health Tech"
          description="Analyzing and reporting on worldwide trends in healthcare technology and innovation."
        />
        <ExpertiseItem
          icon={<Stethoscope className="w-12 h-12 text-green-400" />}
          title="Medical Advancements"
          description="Covering breakthrough medical technologies and their impact on healthcare delivery."
        />
        <ExpertiseItem
          icon={<Book className="w-12 h-12 text-purple-400" />}
          title="Science Communication"
          description="Translating complex scientific concepts into accessible content for a broad audience."
        />
      </div>
    </section>
  );
};

export default Expertise;
