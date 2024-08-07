import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg mb-4">
        Based on our AI agent's analysis, I am a <strong>40-year-old male</strong> Contributing Editor at WIRED and author, specializing in health and technology topics with a global perspective.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Strengths</h3>
          <ul className="list-disc list-inside">
            <li>Global Perspective</li>
            <li>Health Expertise</li>
            <li>Network Building</li>
            <li>Content Curation</li>
            <li>Thought Leadership</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Areas of Focus</h3>
          <ul className="list-disc list-inside">
            <li>Health Technology</li>
            <li>Global Healthcare Systems</li>
            <li>Medical Innovations</li>
            <li>Tech Industry Trends</li>
            <li>Science Communication</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
