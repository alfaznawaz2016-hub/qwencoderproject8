import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Excel Sales Analysis",
    description: "Coffee shop sales pivot analysis — monthly gross sales, order volume, discounts, and net sales trends across 2017–2019",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    link: "https://github.com/AlfazNawazKhan/excelproject2",
    colSpan: "md:col-span-7",
  },
  {
    title: "Student Phone Survey",
    description: "Mobile phone use survey analysis — pivot tables breaking down education-related phone usage and health ratings by gender",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    link: "https://github.com/AlfazNawazKhan/excelproject3",
    colSpan: "md:col-span-5",
  },
  {
    title: "BMW Car Sales Analysis",
    description: "Pricing, mileage, engine size, and revenue across models, regions, and fuel/transmission types",
    image: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=800&h=600&fit=crop",
    link: "https://github.com/AlfazNawazKhan/excelproject4",
    colSpan: "md:col-span-5",
  },
  {
    title: "Restaurant Data Cleaning",
    description: "Pizzeria listings data cleaning — standardizing names, addresses, categories, and open/closed status across a messy multi-city dataset",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    link: "https://github.com/AlfazNawazKhan/excelproject5",
    colSpan: "md:col-span-7",
  },
];

export const SelectedWorks: React.FC = () => {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display italic mb-4">
            Featured <span className="italic">projects</span>
          </h2>
          <p className="text-muted max-w-md mb-6">
            A selection of projects I've worked on, from concept to launch.
          </p>
          <button className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm border border-stroke hover:border-transparent relative group accent-gradient-border-hover">
            View all work
            <span>→</span>
          </button>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${project.colSpan} group relative bg-surface border border-stroke rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[300px]`}
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Halftone Overlay */}
              <div className="absolute inset-0 halftone-overlay opacity-20 mix-blend-multiply" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg flex items-end p-6">
                <div className="relative inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white text-bg text-sm">
                  <span className="absolute inset-[-2px] rounded-full accent-gradient animate-gradient-shift" style={{ backgroundSize: '300% 300%' }} />
                  <span className="relative z-10">View — <span className="font-display italic">{project.title}</span></span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-display italic text-text-primary mb-2">{project.title}</h3>
                <p className="text-sm text-muted line-clamp-2">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
