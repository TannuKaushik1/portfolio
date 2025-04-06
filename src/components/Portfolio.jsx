import React, { useState, useEffect } from "react";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is a demo form)");
    setForm({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    fetch("https://api.github.com/users/TannuKaushik1/repos")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sorted);
      });
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-sans overflow-x-hidden scroll-smooth">
      <motion.section 
        className="h-screen flex flex-col justify-center items-center text-center px-4"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <img
          src="/profile/image.jpg"
          alt="Tannu Kaushik"
          className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-white shadow-lg"
        />
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Tannu Kaushik</h1>
        <p className="text-xl md:text-2xl text-gray-300">AI & ML Engineering Student</p>
        <p className="text-md md:text-lg text-gray-400 mt-2">Deep Learning | Data Science | Web Dev</p>
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          <a href="mailto:tannukaushik1503@gmail.com" className="hover:underline text-sm flex items-center gap-1">
            <Mail size={16} /> Email
          </a>
          <a href="https://www.linkedin.com/in/tannu-kaushik-539a16264/" target="_blank" className="hover:underline text-sm flex items-center gap-1">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="https://github.com/TannuKaushik1" target="_blank" className="hover:underline text-sm flex items-center gap-1">
            <Github size={16} /> GitHub
          </a>
          <a href="https://leetcode.com/u/Tannu_Kaushik/" target="_blank" className="hover:underline text-sm">
            🧠 LeetCode
          </a>
          <a
            href="/resume-tannu-kaushik.pdf"
            target="_blank"
            className="hover:underline text-sm flex items-center gap-1"
          >
            <Download size={16} /> Resume
          </a>
        </div>
      </motion.section>

      <motion.section
        className="py-20 px-8 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400 text-lg">
          I'm a B.Tech student at The NorthCap University, specializing in Artificial Intelligence. With a passion for Deep Learning and Data Science,
          I enjoy creating real-world solutions through innovative machine learning models and full-stack web applications. During my internships at
          Maruti Suzuki and Octanet, I developed solutions that improved system efficiency and enhanced customer experience. I constantly seek to grow
          by exploring new tech and contributing to impactful projects.
        </p>
      </motion.section>

      <motion.section
        className="min-h-screen flex flex-col justify-center items-center text-center px-8"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
          {repos.map((repo, i) => (
            <motion.a
              key={i}
              href={repo.html_url}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-zinc-900 rounded-2xl p-4 shadow-xl transform transition-transform duration-300 hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold mb-2">{repo.name.replace(/-/g, ' ')}</h3>
              <p className="text-gray-400 text-sm">{repo.description || "No description provided."}</p>
            </motion.a>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="py-20 px-8 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">LeetCode Activity</h2>
        <p className="text-gray-400 mb-6">Tracking coding consistency and progress</p>
        <img
          src={`https://leetcard.jacoblin.cool/Tannu_Kaushik?theme=dark&font=baloo&ext=activity`}
          alt="LeetCode Graph"
          className="rounded-xl shadow-xl mx-auto"
        />
      </motion.section>

      <motion.section
        className="py-20 px-8 text-center max-w-xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black w-full">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 rounded-xl w-full"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 rounded-xl w-full"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-3 rounded-xl w-full"
            rows="5"
            required
          />
          <button type="submit" className="bg-white text-black px-6 py-2 rounded-xl font-semibold hover:bg-gray-200">Send Message</button>
        </form>
      </motion.section>

      <footer className="text-center text-gray-600 text-sm py-6">
        &copy; 2025 Tannu Kaushik. All rights reserved.
      </footer>
    </main>
  );
}
