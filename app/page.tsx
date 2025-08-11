"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion"
import {
  Moon,
  Sun,
  Menu,
  X,
  ExternalLink,
  Github,
  Instagram,
  Music,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  ChevronDown,
  Download,
  Calendar,
  Code,
  Coffee,
  Heart,
  Star,
  Users,
  Zap,
  Target,
  Lightbulb,
  Rocket,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowUp,
  Eye,
  ThumbsUp,
  Share2,
  Bookmark,
  Clock,
  GraduationCap,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

// Enhanced Particle component with different types
const Particle = ({ delay, type = "default" }: { delay: number; type?: "default" | "star" | "heart" | "code" }) => {
  const icons = {
    default: "●",
    star: "✦",
    heart: "♥",
    code: "</>",
  }

  return (
    <motion.div
      className={`absolute text-sm opacity-60 pointer-events-none select-none ${
        type === "star"
          ? "text-yellow-400"
          : type === "heart"
            ? "text-pink-400"
            : type === "code"
              ? "text-blue-400"
              : "text-purple-400"
      }`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
        y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
        rotate: [0, 360],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 3,
      }}
    >
      {icons[type]}
    </motion.div>
  )
}

// Typing animation component
const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayText((prev) => prev + text[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }
      },
      delay + currentIndex * 100,
    )

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay])

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        className="inline-block w-0.5 h-6 bg-current ml-1"
      />
    </span>
  )
}

// Enhanced Chatbot with more features
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Sandhya's AI assistant. Ask me anything about her skills, projects, or experience! 🚀",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { text: input, sender: "user", timestamp: new Date() }
    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    // Enhanced bot responses with more personality
    setTimeout(() => {
      let botResponse = ""

      const lowerInput = input.toLowerCase()

      if (lowerInput.includes("project")) {
        botResponse =
          "🚀 Sandhya has worked on several exciting projects! Her Weather App showcases her API integration skills, and she's constantly building new projects as part of her BSc.IT journey. Each project reflects her growth as a developer!"
      } else if (lowerInput.includes("skill")) {
        botResponse =
          "💻 Sandhya is skilled in modern web technologies including React, Next.js, JavaScript, and CSS3. She's also learning backend technologies and has a strong foundation in programming fundamentals. Her passion for learning new technologies is truly inspiring!"
      } else if (lowerInput.includes("contact") || lowerInput.includes("reach")) {
        botResponse =
          "📧 You can reach Sandhya at sandhyalamichhane098@gmail.com or call her at +977 9768381972. She's also very active on Instagram @sandy_lamichhane and TikTok @san_dyy555!"
      } else if (lowerInput.includes("education") || lowerInput.includes("study")) {
        botResponse =
          "🎓 Sandhya is currently in her 2nd year of BSc.IT, where she's excelling in her studies and gaining hands-on experience with modern technologies. Her academic journey is complemented by practical projects and continuous learning!"
      } else if (lowerInput.includes("goal") || lowerInput.includes("future")) {
        botResponse =
          "🎯 Sandhya aims to become a skilled software developer, contribute to open-source projects, and build impactful solutions. She's passionate about using technology to solve real-world problems!"
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        botResponse =
          "👋 Hello there! I'm excited to tell you about Sandhya's amazing journey in tech. What would you like to know about her skills, projects, or aspirations?"
      } else {
        botResponse =
          "✨ That's a great question! Sandhya is always eager to connect and share her experiences. Feel free to explore her portfolio or reach out to her directly for more detailed conversations!"
      }

      setIsTyping(false)
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot", timestamp: new Date() }])
    }, 1500)

    setInput("")
  }

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-pink-500 to-orange-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(59, 130, 246, 0.7)",
            "0 0 0 10px rgba(59, 130, 246, 0)",
            "0 0 0 0 rgba(59, 130, 246, 0)",
          ],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <MessageCircle className="w-6 h-6" />
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Sandhya's AI Assistant</h3>
                      <p className="text-xs opacity-80">Always here to help!</p>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className="flex items-end space-x-2 max-w-xs">
                      {message.sender === "bot" && (
                        <Avatar className="w-6 h-6">
                          <AvatarImage src="/placeholder.svg?height=24&width=24" />
                          <AvatarFallback className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs">
                            AI
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={`p-3 rounded-lg text-sm ${
                          message.sender === "user"
                            ? "bg-pink-500 text-white rounded-br-none"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-none"
                        }`}
                      >
                        {message.text}
                        <div
                          className={`text-xs mt-1 opacity-70 ${message.sender === "user" ? "text-pink-100" : "text-gray-500"}`}
                        >
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-end space-x-2">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs">
                          AI
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg rounded-bl-none">
                        <div className="flex space-x-1">
                          <motion.div
                            className="w-2 h-2 bg-gray-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-gray-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-gray-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything..."
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button onClick={handleSend} size="sm" disabled={isTyping || !input.trim()}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Scroll to top button
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-pink-500 to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

// Enhanced Music player component
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(75)
  const [currentTrack, setCurrentTrack] = useState("Lofi Hip Hop")
  const [isExpanded, setIsExpanded] = useState(false)

  const tracks = ["Lofi Hip Hop", "Coding Jazz", "Focus Beats", "Ambient Code", "Study Vibes"]

  const nextTrack = () => {
    const currentIndex = tracks.indexOf(currentTrack)
    const nextIndex = (currentIndex + 1) % tracks.length
    setCurrentTrack(tracks[nextIndex])
  }

  const prevTrack = () => {
    const currentIndex = tracks.indexOf(currentTrack)
    const prevIndex = currentIndex === 0 ? tracks.length - 1 : currentIndex - 1
    setCurrentTrack(tracks[prevIndex])
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-1/2 left-4 transform -translate-y-1/2 z-40"
    >
      <motion.div
        animate={{ width: isExpanded ? 280 : 60 }}
        className="bg-gradient-to-br from-pink-500/90 to-orange-500/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Compact View */}
        <div className="p-3">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </motion.button>

            {isExpanded && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 mx-3">
                <div className="text-white text-sm font-medium truncate">{currentTrack}</div>
                <div className="text-white/70 text-xs">Coding Playlist</div>
              </motion.div>
            )}

            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
            >
              <Music className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Expanded Controls */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 space-y-3"
              >
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-white/70 text-xs">
                    <span>1:23</span>
                    <span>3:45</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-1">
                    <motion.div
                      className="bg-white rounded-full h-1"
                      animate={{ width: isPlaying ? "35%" : "35%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Track Controls */}
                <div className="flex items-center justify-center space-x-3">
                  <motion.button
                    onClick={prevTrack}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.button>

                  <motion.button
                    onClick={nextTrack}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414zm6 0a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.button>
                </div>

                {/* Volume Control */}
                <div className="flex items-center space-x-2">
                  <motion.button
                    onClick={() => setIsMuted(!isMuted)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </motion.button>
                  <div className="flex-1 bg-white/20 rounded-full h-1">
                    <div
                      className="bg-white rounded-full h-1 transition-all"
                      style={{ width: `${isMuted ? 0 : volume}%` }}
                    />
                  </div>
                  <span className="text-white/70 text-xs w-8">{isMuted ? 0 : volume}</span>
                </div>

                {/* Visualizer */}
                <div className="flex items-end justify-center space-x-1 h-8">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-white/60 rounded-full"
                      animate={{
                        height: isPlaying ? [4, Math.random() * 20 + 4, 4] : 4,
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Stats counter component
const StatsCounter = ({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return (
    <div ref={ref} className="text-3xl font-bold text-pink-600 dark:text-pink-400">
      {count}
      {suffix}
    </div>
  )
}

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isLoading, setIsLoading] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setMobileMenuOpen(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! Sandhya will get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const downloadResume = () => {
    // In a real app, this would download the actual resume
    alert("Resume download started! 📄")
  }

  const skills = [
    { name: "React", level: 85, icon: "⚛️" },
    { name: "JavaScript", level: 80, icon: "🟨" },
    { name: "CSS3", level: 90, icon: "🎨" },
    { name: "HTML5", level: 95, icon: "🌐" },
    { name: "Next.js", level: 75, icon: "▲" },
    { name: "Git", level: 70, icon: "📚" },
  ]

  const achievements = [
    { title: "Dean's List", description: "Academic Excellence in BSc.IT", icon: "🏆", date: "2024" },
    { title: "Best Project Award", description: "Weather App Development", icon: "🥇", date: "2024" },
    { title: "Coding Competition", description: "2nd Place in University Contest", icon: "🥈", date: "2023" },
  ]

  const testimonials = [
    {
      name: "Dr. Rajesh Sharma",
      role: "Professor, Computer Science",
      content:
        "Sandhya is one of the most dedicated students I've taught. Her passion for technology and problem-solving skills are exceptional.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Study Group Partner",
      content:
        "Working with Sandhya on projects has been amazing. She brings creativity and technical expertise to every challenge.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
  ]

  const blogPosts = [
    {
      title: "My Journey into Web Development",
      excerpt: "How I discovered my passion for coding and the technologies that excite me most...",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Personal", "Web Dev", "Journey"],
    },
    {
      title: "Building My First React App",
      excerpt: "Lessons learned while creating my weather application and the challenges I overcame...",
      date: "2024-01-10",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "Tutorial", "Project"],
    },
    {
      title: "The Future of Tech Education",
      excerpt: "My thoughts on how technology education is evolving and what students need to succeed...",
      date: "2024-01-05",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Education", "Tech", "Future"],
    },
  ]

  const projects = [
    {
      title: "Weather App",
      description: "A modern weather application with real-time data, beautiful UI, and location-based forecasts",
      tech: ["React", "API Integration", "CSS3", "Responsive Design"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
      github: "#",
      status: "Live",
      features: ["Real-time weather data", "7-day forecast", "Location search", "Mobile responsive"],
      views: 1250,
      likes: 89,
    },
    {
      title: "Task Manager Pro",
      description: "A comprehensive productivity app for managing daily tasks, goals, and team collaboration",
      tech: ["JavaScript", "Local Storage", "Bootstrap", "Chart.js"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
      github: "#",
      status: "Live",
      features: ["Task categorization", "Progress tracking", "Team collaboration", "Analytics dashboard"],
      views: 890,
      likes: 67,
    },
    {
      title: "Portfolio Template",
      description: "A responsive, modern portfolio template for developers with dark mode and animations",
      tech: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
      github: "#",
      status: "Demo",
      features: ["Dark mode toggle", "Smooth animations", "Responsive design", "SEO optimized"],
      views: 2100,
      likes: 156,
    },
    {
      title: "E-Learning Platform",
      description: "An interactive learning platform with video courses, quizzes, and progress tracking",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
      github: "#",
      status: "In Development",
      features: ["Video streaming", "Interactive quizzes", "Progress tracking", "Certificate generation"],
      views: 450,
      likes: 34,
    },
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 flex items-center justify-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Loading Sandhya's Portfolio...
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-600 dark:text-gray-300 mt-2"
          >
            Preparing something amazing for you ✨
          </motion.p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden">
        {/* Custom cursor */}
        <motion.div
          className="fixed top-0 left-0 w-4 h-4 bg-blue-500/50 rounded-full pointer-events-none z-50 mix-blend-difference"
          animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />

        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-orange-500 z-50 origin-left"
          style={{ scaleX }}
        />

        {/* Enhanced Particle Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <Particle key={i} delay={i * 0.3} type={["default", "star", "heart", "code"][i % 4] as any} />
          ))}
        </div>

        {/* Navigation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent"
              >
                SL
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {["home", "about", "skills", "projects", "blog", "testimonials", "contact"].map((section) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors hover:text-pink-500 relative ${
                      activeSection === section ? "text-pink-500" : ""
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    {section}
                    {activeSection === section && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pink-500"
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  onClick={downloadResume}
                  className="hidden md:flex bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white"
                  size="sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>

                <Button variant="ghost" size="sm" onClick={() => setDarkMode(!darkMode)} className="p-2">
                  {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </Button>

                {/* Mobile Menu Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden p-2"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="px-4 py-2 space-y-2">
                  {["home", "about", "skills", "projects", "blog", "testimonials", "contact"].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="block w-full text-left py-2 capitalize hover:text-pink-500"
                    >
                      {section}
                    </button>
                  ))}
                  <Button
                    onClick={downloadResume}
                    className="w-full mt-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                    size="sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-pink-900/20" />

          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-4"
                >
                  <span className="px-4 py-2 bg-gradient-to-r from-pink-100 to-orange-100 dark:from-blue-900/30 dark:to-purple-900/30 text-pink-600 dark:text-blue-400 rounded-full text-sm font-medium">
                    👋 Hello, I'm
                  </span>
                </motion.div>

                <motion.h1
                  className="text-5xl md:text-7xl font-bold mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="bg-gradient-to-r from-pink-500 via-coral-500 to-orange-500 bg-clip-text text-transparent block"
                  >
                    Sandhya
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="bg-gradient-to-r from-orange-500 via-coral-500 to-pink-500 bg-clip-text text-transparent block"
                  >
                    Lamichhane
                  </motion.span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6"
                >
                  <TypewriterText text="Aspiring Tech Enthusiast | BSc(hons)CS, 2nd Year" delay={1500} />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                  className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
                >
                  Passionate about creating innovative solutions and building the future through code. Currently
                  exploring the endless possibilities of web development .
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="flex flex-wrap gap-4 mb-8"
                >
                  <Button
                    onClick={() => scrollToSection("projects")}
                    className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    View My Work
                  </Button>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    variant="outline"
                    className="px-8 py-3 rounded-full text-lg font-semibold border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-all"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Let's Connect
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.7 }}
                  className="flex space-x-6"
                >
                  <motion.a
                    href="https://instagram.com/sandy_lamichhane"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Instagram className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://tiktok.com/@san_dyy555"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Music className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="mailto:sandhyalamichhane098@gmail.com"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Mail className="w-6 h-6" />
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Photo Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative"
              >
                <div className="relative">
                  {/* Animated background elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute -inset-8 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-full blur-2xl"
                  />

                  {/* Main photo container */}
                  <motion.div whileHover={{ scale: 1.05 }} className="relative z-10 w-80 h-80 mx-auto">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full p-1">
    <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full overflow-hidden p-2">
      <Image
        src="/sandy.jpg"
        alt="Sandhya Lamichhane"
        width={400}
        height={300}
        className="w-full h-full object-top object-cover rounded-full"
        priority
      />
                      </div>
                    </div>

                    {/* Floating elements around photo */}
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-400 to-orange-500 text-white p-3 rounded-full shadow-lg"
                    >
                      <Code className="w-6 h-6" />
                    </motion.div>

                    <motion.div
                      animate={{ y: [10, -10, 10] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-400 to-coral-500 text-white p-3 rounded-full shadow-lg"
                    >
                      <Lightbulb className="w-6 h-6" />
                    </motion.div>

                    <motion.div
                      animate={{ x: [-5, 5, -5] }}
                      transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute top-1/2 -left-8 bg-gradient-to-r from-coral-400 to-pink-500 text-white p-2 rounded-full shadow-lg"
                    >
                      <Heart className="w-4 h-4" />
                    </motion.div>

                    <motion.div
                      animate={{ x: [5, -5, 5] }}
                      transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute top-1/4 -right-8 bg-gradient-to-r from-orange-400 to-pink-500 text-white p-2 rounded-full shadow-lg"
                    >
                      <Star className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Stats around photo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 }}
                  className="absolute top-8 left-0 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-center">
                    <StatsCounter end={15} suffix="+" />
                    <p className="text-sm text-gray-600 dark:text-gray-300">Projects</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2 }}
                  className="absolute bottom-8 right-0 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-center">
                    <StatsCounter end={2} suffix=" Years" />
                    <p className="text-sm text-gray-600 dark:text-gray-300">Experience</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <ChevronDown className="w-8 h-8 text-gray-400" />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A passionate and driven BSc(hons)CS,student with a love for technology and innovation. Currently in my 2nd
                year, I'm exploring the fascinating world of software development and building projects that make a
                difference.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 bg-gradient-to-br from-pink-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-xl">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-2">🎓</div>
                    <StatsCounter end={85} suffix="%" />
                    <p className="text-gray-600 dark:text-gray-300">Academic Performance</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-xl">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-2">💻</div>
                    <StatsCounter end={12} suffix="+" />
                    <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 bg-gradient-to-br from-pink-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-xl">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-2">☕</div>
                    <StatsCounter end={500} suffix="+" />
                    <p className="text-gray-600 dark:text-gray-300">Cups of Coffee</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gradient-to-br from-pink-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                      <GraduationCap className="w-6 h-6 mr-2 text-pink-500" />
                      Education Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-4"
                      >
                        <div className="w-4 h-4 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-semibold text-lg">BSc(hons)CS- 2nd Year</h3>
                          <p className="text-pink-600 dark:text-blue-400 font-medium">Currently Pursuing (2023-2027)</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                            Focusing on web development, programming fundamentals, database management, and software
                            engineering principles
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="secondary" className="text-xs">
                              Data Structures
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              Web Development
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              Database Systems
                            </Badge>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                      <Target className="w-5 h-5 mr-2 text-green-500" />
                      Goals & Ambitions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Master modern web development technologies</span>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center space-x-3"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Build impactful software solutions</span>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center space-x-3"
                      >
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>Contribute to open-source projects</span>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center space-x-3"
                      >
                        <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                        <span>Inspire other women in tech</span>
                      </motion.li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-pink-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                      Current Focus
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "JavaScript", "CSS3", "HTML5", "Git", "Node.js", "MongoDB"].map((skill) => (
                        <motion.div key={skill} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Badge
                            variant="secondary"
                            className="bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:from-pink-600 hover:to-orange-600 transition-all cursor-pointer"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Achievements Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                Achievements & Recognition
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="p-6 text-center bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-xl hover:shadow-2xl transition-all">
                      <CardContent className="pt-6">
                        <div className="text-4xl mb-4">{achievement.icon}</div>
                        <h4 className="font-bold text-lg mb-2">{achievement.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{achievement.description}</p>
                        <Badge variant="outline" className="text-xs">
                          {achievement.date}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                Skills & Expertise
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Here are the technologies and skills I've been developing during my journey as a BSc(hons)CS student.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <h3 className="text-lg font-semibold">{skill.name}</h3>
                        </div>
                        <span className="text-sm font-medium text-pink-600 dark:text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress value={0} className="h-2 bg-gray-200 dark:bg-gray-700" />
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="absolute top-0 left-0 h-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                My Projects
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Here are some of the projects I've been working on during my journey as a BSc(hons)CS student.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="h-full bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge
                          variant={
                            project.status === "Live" ? "default" : project.status === "Demo" ? "secondary" : "outline"
                          }
                          className={
                            project.status === "Live"
                              ? "bg-green-500 text-white"
                              : project.status === "Demo"
                                ? "bg-orange-500 text-white"
                                : "bg-blue-500 text-white"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <div className="absolute top-4 left-4 flex space-x-2">
                        <div className="flex items-center space-x-1 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                          <Eye className="w-3 h-3" />
                          <span>{project.views}</span>
                        </div>
                        <div className="flex items-center space-x-1 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                          <ThumbsUp className="w-3 h-3" />
                          <span>{project.likes}</span>
                        </div>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Key Features:</h4>
                          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex space-x-2 mt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 group-hover:bg-pink-500 group-hover:text-white transition-colors bg-transparent"
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group-hover:bg-gray-800 group-hover:text-white transition-colors bg-transparent"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group-hover:bg-pink-500 group-hover:text-white transition-colors bg-transparent"
                        >
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                Latest Blog Posts
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Sharing my journey, insights, and learnings in the world of technology and software development.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <Card className="h-full bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white">
                          <Bookmark className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-pink-500 transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300">{post.excerpt}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        className="w-full justify-start p-0 h-auto text-pink-500 hover:text-pink-600"
                      >
                        Read More →
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                What People Say
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Feedback from professors, peers, and collaborators who have worked with me.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-gradient-to-br from-pink-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-xl">
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                I'm always excited to connect with fellow tech enthusiasts, potential collaborators, or anyone
                interested in my journey! Let's build something amazing together.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Enhanced Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-white dark:bg-gray-800 border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                      <Send className="w-6 h-6 mr-2 text-pink-500" />
                      Send Me a Message
                    </CardTitle>
                    <CardDescription>I'll get back to you as soon as possible!</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Your Name
                        </label>
                        <Input
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Message
                        </label>
                        <Textarea
                          placeholder="Tell me about your project, collaboration ideas, or just say hello!"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          rows={5}
                          className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
                        >
                          <motion.div whileHover={{ x: 5 }} className="flex items-center justify-center">
                            Send Message
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                            >
                              <Send className="w-4 h-4 ml-2" />
                            </motion.div>
                          </motion.div>
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Enhanced Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-green-500" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.a
                      href="mailto:sandhyalamichhane098@gmail.com"
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50"
                    >
                      <Mail className="w-5 h-5 text-pink-500" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm">sandhyalamichhane098@gmail.com</p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="tel:+9779768381972"
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50"
                    >
                      <Phone className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm">+977 9768381972</p>
                      </div>
                    </motion.a>

                    <motion.div
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50"
                    >
                      <MapPin className="w-5 h-5 text-red-500" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm">Nepal</p>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-pink-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                      <Users className="w-5 h-5 mr-2 text-purple-500" />
                      Follow My Journey
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <motion.a
                        href="https://instagram.com/sandy_lamichhane"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col items-center p-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
                      >
                        <Instagram className="w-8 h-8 mb-2" />
                        <span className="text-sm font-medium">Instagram</span>
                        <span className="text-xs opacity-80">@sandy_lamichhane</span>
                      </motion.a>
                      <motion.a
                        href="https://tiktok.com/@san_dyy555"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col items-center p-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
                      >
                        <Music className="w-8 h-8 mb-2" />
                        <span className="text-sm font-medium">TikTok</span>
                        <span className="text-xs opacity-80">@san_dyy555</span>
                      </motion.a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                      <Coffee className="w-5 h-5 mr-2 text-orange-500" />
                      Let's Grab Coffee!
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      I'm always up for a good conversation about technology, projects, or just life in general. If
                      you're in Nepal or planning to visit, let's meet up!
                    </p>
                    <Button
                      onClick={() => scrollToSection("contact")}
                      variant="outline"
                      className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                    >
                      <Coffee className="w-4 h-4 mr-2" />
                      Schedule a Chat
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="py-12 px-4 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
                >
                  SL
                </motion.div>
                <p className="text-gray-400 text-sm">
                  Passionate BSc(hons)CS student building the future through code and creativity.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {["About", "Projects", "Skills", "Blog", "Contact"].map((link) => (
                    <li key={link}>
                      <button
                        onClick={() => scrollToSection(link.toLowerCase())}
                        className="hover:text-pink-400 transition-colors"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-white">Connect</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="mailto:sandhyalamichhane098@gmail.com" className="hover:text-pink-400 transition-colors">
                      Email
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/sandy_lamichhane"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-400 transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tiktok.com/@san_dyy555"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-300 transition-colors"
                    >
                      TikTok
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-white">Latest Update</h3>
                <p className="text-sm text-gray-400 mb-2">
                  Currently working on exciting new projects and learning advanced React patterns.
                </p>
                <div className="flex items-center space-x-2 text-xs text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Available for collaborations</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-gray-400 text-sm mb-4 md:mb-0"
                >
                  © 2024 Sandhya Lamichhane. Made with{" "}
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    className="text-red-400"
                  >
                    ❤️
                  </motion.span>{" "}
                  and lots of{" "}
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="inline-block"
                  >
                    ☕
                  </motion.span>
                </motion.p>

                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>Built with Next.js & Framer Motion</span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Sparkles className="w-4 h-4 text-blue-400" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Additional Components */}
        <Chatbot />
        <ScrollToTop />
        <MusicPlayer />
      </div>
    </div>
  )
}
