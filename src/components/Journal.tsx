import React from 'react';
import { motion } from 'framer-motion';

const journalEntries = [
  {
    title: "Data Cleaning Best Practices",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
    readTime: "5 min read",
    date: "Dec 2024",
  },
  {
    title: "Power BI Dashboard Tips",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
    readTime: "4 min read",
    date: "Nov 2024",
  },
  {
    title: "Python for Data Analysis",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
    readTime: "6 min read",
    date: "Oct 2024",
  },
  {
    title: "Excel Pivot Tables Mastery",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
    readTime: "3 min read",
    date: "Sep 2024",
  },
];

export const Journal: React.FC = () => {
  return (
    <section className="bg-bg py-16 md:py-24">
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
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Recent Thoughts</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display italic mb-4">
            Recent <span className="italic">thoughts</span>
          </h2>
          <p className="text-muted max-w-md mb-6">
            Insights and learnings from my journey in data analysis and development.
          </p>
          <button className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm border border-stroke hover:border-transparent relative group accent-gradient-border-hover">
            View all
            <span>→</span>
          </button>
        </motion.div>

        {/* Journal Entries */}
        <div className="space-y-4">
          {journalEntries.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full cursor-pointer transition-colors"
            >
              <img
                src={entry.image}
                alt={entry.title}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-medium text-text-primary truncate">{entry.title}</h3>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-xs text-muted">
                <span>{entry.readTime}</span>
                <span>{entry.date}</span>
              </div>
              <span className="text-muted">→</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
