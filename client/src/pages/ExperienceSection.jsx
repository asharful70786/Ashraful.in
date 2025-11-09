import { motion } from "framer-motion";
import { FaAws, FaNodeJs, FaReact, FaServer, FaRocket, FaCode, FaCloud } from "react-icons/fa";
import { SiMongodb, SiDocker } from "react-icons/si";

export default function ExperienceSection() {
  const experienceHighlights = [
    {
      title: "Founding Engineer (Freelance)",
      duration: "2023 — Present",
      desc: "Worked closely with healthtech and SaaS founders to architect backend systems from zero to production. Built cloud infrastructure, automated CI/CD pipelines, and optimized API performance for scale.",
      impact: [
        "Deployed 12+ full-stack systems",
        "Reduced deployment time by 60%",
        "Maintained 99.9% uptime across all client servers",
      ],
      icon: FaServer,
      gradient: "from-cyan-500 to-blue-500",
      delay: 0.1,
    },
    {
      title: "Infrastructure & Backend Developer",
      duration: "2022 — 2023",
      desc: "Led end-to-end backend development using Node.js, Express, MongoDB, and Docker. Designed data pipelines and caching strategies that cut response times and resource costs.",
      impact: [
        "Achieved 45% lower API latency",
        "Integrated multi-service architecture on AWS",
        "Built monitoring & alerting for live deployments",
      ],
      icon: FaRocket,
      gradient: "from-purple-500 to-pink-500",
      delay: 0.2,
    },
    {
      title: "DevOps & Automation Consultant",
      duration: "2023",
      desc: "Implemented CI/CD pipelines using GitHub Actions, Docker, and AWS EC2 for small teams — enabling rapid iteration, rollback, and version-controlled infrastructure delivery.",
      impact: [
        "85% automation coverage across staging → production",
        "Zero-downtime releases achieved through rollout scripts",
        "Reduced manual deployment errors by 70%",
      ],
      icon: FaCode,
      gradient: "from-orange-500 to-red-500",
      delay: 0.3,
    },
    {
      title: "AI Health Infrastructure (Current Focus)",
      duration: "2024 — Present",
      desc: "Building intelligent backend systems for AI-driven healthcare — combining LLM integration, secure data flow, and auto-scaling infrastructure to support real-time patient interaction platforms.",
      impact: [
        "Developing AI-powered patient triage systems",
        "Integrating health data pipelines with Redis caching",
        "Focus on fault-tolerant, privacy-first architecture",
      ],
      icon: FaCloud,
      gradient: "from-green-500 to-emerald-500",
      delay: 0.4,
    },
  ];

  const techStack = [
    { icon: FaNodeJs, name: "Node.js", color: "text-green-400" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    { icon: SiDocker, name: "Docker", color: "text-blue-400" },
    { icon: FaAws, name: "AWS", color: "text-yellow-400" },
    { icon: FaReact, name: "React", color: "text-cyan-400" },
  ];

  return (
    <section className="relative py-5 bg-gradient-to-b from-[#0b0e17] to-[#0e1322] text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />

      <motion.div
        className="text-center mb-20 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            Professional Experience
          </span>
        </div>

      <h2 className="text-5xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
  2 Years of Engineering Impact
       </h2>

         <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
  Over the past two years, <span className="text-cyan-400 font-semibold">Ashraful</span> has grown from an independent backend developer 
  into a <span className="text-purple-400 font-semibold">founding engineer</span> trusted by startups to design resilient, 
  high-performance systems. His experience spans cloud infrastructure, automation, and intelligent backend architecture — 
  ensuring every product he builds ships faster, scales smoother, and runs smarter.
         </p>
      </motion.div>

      {/* Experience Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {experienceHighlights.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: exp.delay }}
            viewport={{ once: true }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg hover:border-cyan-400/30 hover:shadow-cyan-400/10 transition-all duration-500"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition duration-500`}
            />
            <div className="mb-4 flex items-center justify-between">
              <exp.icon className="text-cyan-400 text-3xl" />
              <span className="text-xs text-gray-400">{exp.duration}</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
              {exp.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">{exp.desc}</p>
            <ul className="text-xs text-cyan-400/90 space-y-1">
              {exp.impact.map((point, idx) => (
                <li key={idx}>• {point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Tech Focus */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-gray-300 mb-8">
          Core Stack Driving Every Build
        </h3>
        <div className="flex justify-center gap-10 flex-wrap">
          {techStack.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <tech.icon className={`${tech.color} text-4xl mb-2`} />
              <p className="text-gray-300 text-sm font-medium">{tech.name}</p>
            </div>
          ))}
        </div>

                 {/* Current Focus */}
         <div className="pt-4">
           <motion.div
            className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 backdrop-blur-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100" />
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200" />
            </div>
            <p className="text-gray-200 text-sm font-medium">
              Currently working on{" "}
              <span className="text-cyan-400 font-semibold">AI-driven full-stack applications</span> and{" "}
              <span className="text-purple-400 font-semibold">intelligent automation systems</span>
            </p>
          </motion.div>

         </div>
    
      </motion.div>
{/* CTa  */}

<div className="pt-10">
  <motion.a
  href="https://calendly.com/ashrafulmomin2/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl overflow-hidden transition-all duration-300 flex items-center justify-center gap-3 mx-auto w-fit hover:from-purple-600 hover:to-cyan-500"
  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
  whileTap={{ scale: 0.98 }}
>
  <FaRocket className="text-xl group-hover:rotate-45 transition-transform duration-300" />
  <span>Book a 30-Minute Call</span>
</motion.a>

</div>


      
    </section>
  );
}
