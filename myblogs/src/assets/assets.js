import { BsStars } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineDrafts } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const btn = [
  { id: 1, name: "Feed", icon: BsStars, link: "/" },
  { id: 2, name: "Trending", icon: FaArrowTrendUp, link: "/trending" },
  { id: 3, name: "Bookmarks", icon: CiBookmark, link: "/bookmark" },
  { id: 4, name: "Drafts", icon: MdOutlineDrafts, link: "/draft" },
  { id: 5, name: "Settings", icon: IoSettingsOutline, link: "/setting" },
];

const articles = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    authorImg: "https://randomuser.me/api/portraits/men/32.jpg",
    author: "Amit Sharma",
    date: "March 26, 2026",
    title: "Understanding Modern UI Design Trends in 2026",
    desc: "Explore how minimalism, motion design, and AI-driven UX are shaping modern interfaces.",
    readTime: "8 min read",
    category: "Design"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
    authorImg: "https://randomuser.me/api/portraits/women/44.jpg",
    author: "Priya Verma",
    date: "March 25, 2026",
    title: "Getting Started with Machine Learning in 2026",
    desc: "A beginner-friendly roadmap to start your journey in machine learning with practical examples.",
    readTime: "10 min read",
    category: "AI"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    authorImg: "https://randomuser.me/api/portraits/men/65.jpg",
    author: "Rahul Singh",
    date: "March 24, 2026",
    title: "React vs Next.js: Which One Should You Choose?",
    desc: "A deep dive comparison between React and Next.js to help you decide the best framework.",
    readTime: "7 min read",
    category: "Web Dev"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1526378722484-cc5c510f8c1c",
    authorImg: "https://randomuser.me/api/portraits/women/12.jpg",
    author: "Neha Gupta",
    date: "March 23, 2026",
    title: "Top 10 JavaScript Tricks Every Developer Should Know",
    desc: "Boost your coding efficiency with these powerful and lesser-known JavaScript tricks.",
    readTime: "6 min read",
    category: "JavaScript"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    authorImg: "https://randomuser.me/api/portraits/men/22.jpg",
    author: "Vikas Yadav",
    date: "March 22, 2026",
    title: "How AI is Changing the Future of Web Development",
    desc: "Discover how AI tools are revolutionizing frontend and backend development workflows.",
    readTime: "9 min read",
    category: "AI"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
    authorImg: "https://randomuser.me/api/portraits/women/30.jpg",
    author: "Sneha Kapoor",
    date: "March 21, 2026",
    title: "Mastering Tailwind CSS for Rapid UI Development",
    desc: "Learn how to build beautiful and responsive UIs quickly using Tailwind CSS.",
    readTime: "5 min read",
    category: "CSS"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    authorImg: "https://randomuser.me/api/portraits/men/55.jpg",
    author: "Karan Mehta",
    date: "March 20, 2026",
    title: "Clean Code Practices Every Developer Should Follow",
    desc: "Write maintainable and scalable code with these proven clean coding principles.",
    readTime: "8 min read",
    category: "Programming"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    authorImg: "https://randomuser.me/api/portraits/women/18.jpg",
    author: "Anjali Sharma",
    date: "March 19, 2026",
    title: "Design Systems: The Backbone of Scalable UI",
    desc: "Understand why design systems are crucial for building consistent user experiences.",
    readTime: "7 min read",
    category: "Design"
  }
];




export { btn, articles};