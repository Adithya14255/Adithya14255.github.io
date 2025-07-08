import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink,
  Code,
  Database,
  Server,
  Globe,
  User,
  GraduationCap,
  Award,
  Calendar,
  Send
} from 'lucide-react';
import heroPortrait from '../assets/hero-portrait.jpg';

const Index = () => {
  const [typedText, setTypedText] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  // Hans Zimmer music on site load
  useEffect(() => {
    const audio = new Audio('/hans-zimmer-time.mp3');
    audio.volume = 0.3;
    audio.loop = true;
    
    const playMusic = () => {
      audio.play().catch(e => console.log('Audio autoplay prevented'));
    };
    
    // Try to play immediately
    playMusic();
    
    // Also play on first user interaction
    const handleFirstInteraction = () => {
      playMusic();
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
    
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
    
    return () => {
      audio.pause();
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  const fullText = "Full Stack Developer & CS Student";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typedText.length < fullText.length) {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [typedText, fullText]);

  const skills = {
    "Programming Languages": ["Python", "C", "JavaScript", "HTML", "CSS"],
    "Web Development": ["React", "AngularJS", "Flask", "RESTful APIs", "Full Stack Development"],
    "DevOps & Tools": ["Git", "GitHub", "Docker", "Postman"],
    "Cloud & Infrastructure": ["Render", "Vercel", "Cloud Infrastructure"],
    "Databases": ["PostgreSQL", "MySQL", "SQL"],
    "AI/ML & APIs": ["Generative AI", "API Management", "IBM AI Developer"]
  };

  const projects = [
    {
      title: "Academic Progression Tracker",
      description: "Comprehensive web application for administrators to view overall academic progress at a glance. Expected to reduce manual reporting time by 40% and delivered first prototype 2 weeks ahead of schedule.",
      tech: ["Python", "Flask", "PostgreSQL", "HTML/CSS"],
      github: "Academic-Progress-Tracker",
      featured: true,
      role: "Team Lead",
      timeline: "June 2024 - March 2025"
    },
    {
      title: "GitHub Skill Analyzer",
      description: "AI-powered tool for validating candidates' programming skills by comparing resume claims with actual GitHub activity. Analyzes the 10 most recent repositories and helped 30+ students prepare for interviews.",
      tech: ["Python", "AI/ML", "GitHub API", "Generative AI"],
      github: "Github-Skill-Analyzer",
      featured: true,
      role: "Personal Project",
      timeline: "January 2025 - February 2025"
    },
    {
      title: "Saythanks.io - Open Source",
      description: "Open-source project for spreading thankfulness. Implemented features to enhance user experience and applied optimization techniques resulting in 20% increase in loading speed.",
      tech: ["Python", "Web Development", "Performance Optimization"],
      github: "saythanks-io",
      link: "https://saythanks.io/",
      featured: true,
      role: "Open Source Contributor",
      timeline: "May 2024 - July 2024"
    }
  ];

  const certifications = [
    { name: "Software Developer", issuer: "HackerRank", year: "2025", credential: "Python, SQL and APIs" },
    { name: "IBM AI Developer", issuer: "IBM", year: "2025", credential: "AI development, ML implementation, AI solution deployment" },
    { name: "React Basics", issuer: "Meta", year: "2024", credential: "Components, state management, modern web development" },
    { name: "Web Development with Python", issuer: "Microsoft", year: "2024", credential: "Python web frameworks, backend development" },
    { name: "Business English: Proficient - C1", issuer: "LinguaSkill", year: "2024", credential: "Advanced English communication" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="neon-grid"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-4">
                Hi, I'm <span className="text-gradient">Adithya G</span>
              </h1>
              <div className="text-xl lg:text-2xl text-primary mb-2 h-8 font-semibold">
                {typedText}
                <span className="animate-pulse text-secondary">|</span>
              </div>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Full Stack Developer and CS student with consultancy project experience. Skilled in web development, 
                API implementation, team management, and delivering technical solutions with strong problem-solving abilities.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" className="btn-gradient font-semibold pulse-glow">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-neon transition-all">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground hover:shadow-glow transition-all">
                  <Github className="w-5 h-5 mr-2" />
                  View Projects
                </Button>
              </div>
              <div className="flex gap-6 justify-center lg:justify-start">
                <a href="https://linkedin.com/in/adithya-g-a2085b268/" target="_blank" rel="noopener noreferrer" 
                   className="text-muted-foreground hover:text-primary transition-all p-2 rounded border border-border hover:border-primary/50">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/Adithya14255" target="_blank" rel="noopener noreferrer"
                   className="text-muted-foreground hover:text-primary transition-all p-2 rounded border border-border hover:border-primary/50">
                  <Github className="w-6 h-6" />
                </a>
                <a href="mailto:adithya14255@gmail.com"
                   className="text-muted-foreground hover:text-primary transition-all p-2 rounded border border-border hover:border-primary/50">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="flex justify-center animate-float">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary shadow-neon">
                  <img 
                    src={heroPortrait} 
                    alt="Adithya G - Full Stack Developer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary rounded-full p-4 border-2 border-primary pulse-glow shadow-glow">
                  <Code className="w-8 h-8 text-primary-foreground floating-icon" />
                </div>
                <div className="absolute -top-4 -left-4 bg-secondary rounded-full p-3 border-2 border-secondary pulse-glow shadow-glow">
                  <Server className="w-6 h-6 text-secondary-foreground floating-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4 text-gradient">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate problem-solver and tech enthusiast committed to creating innovative solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Card className="card-elegant p-8">
                <CardContent className="space-y-6 p-0">
                  <div className="flex items-center gap-3 mb-6">
                    <User className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-semibold">Personal Info</h3>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>Coimbatore, Tamil Nadu, India</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>+91 99521 89871</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>adithya14255@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-primary" />
                      <span>English (C1), Hindi, Tamil</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h4 className="font-semibold mb-3">Key Roles & Achievements</h4>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="mr-2">Class Representative</Badge>
                      <Badge variant="secondary" className="mr-2">IPS Tech Community Member</Badge>
                      <Badge variant="secondary" className="mr-2">Open Source Contributor</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="animate-slide-up">
              <Card className="card-elegant p-8">
                <CardContent className="space-y-6 p-0">
                  <div className="flex items-center gap-3 mb-6">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-semibold">Education</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-6 hover:shadow-glow transition-all rounded-r-lg p-4 hover:bg-primary/5">
                      <h4 className="font-semibold text-lg">Bachelor of Engineering - Computer Science</h4>
                      <p className="text-primary font-medium">KGiSL Institute of Technology</p>
                      <p className="text-sm text-muted-foreground">2022 - 2026 (Currently Pursuing)</p>
                      <p className="font-semibold text-accent">CGPA: 8.83/10 (6 Semesters)</p>
                      <p className="text-sm text-muted-foreground mt-2">Class Representative • IPS Tech Community Member</p>
                    </div>
                    
                    <div className="border-l-4 border-secondary pl-6 hover:shadow-glow transition-all rounded-r-lg p-4 hover:bg-secondary/5">
                      <h4 className="font-semibold text-lg">Higher Secondary Certificate (CBSE)</h4>
                      <p className="text-secondary font-medium">Kendriya Vidyalaya</p>
                      <p className="text-sm text-muted-foreground">2020 - 2022</p>
                      <p className="font-semibold">10th: 90.4% | 12th: 86.8%</p>
                      <p className="text-sm text-muted-foreground mt-2">Class Representative • CBSE Curriculum</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Technical Skills</h2>
            <p className="text-xl text-muted-foreground">
              Constantly learning and adapting to new technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={category} className="card-elegant p-6 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-0">
                   <div className="flex items-center gap-3 mb-4">
                     <div className="p-2 bg-primary rounded-lg shadow-glow">
                       {category.includes('Programming') && <Code className="w-5 h-5 text-primary-foreground" />}
                       {category.includes('Web') && <Globe className="w-5 h-5 text-primary-foreground" />}
                       {category.includes('DevOps') && <Server className="w-5 h-5 text-primary-foreground" />}
                       {category.includes('Cloud') && <Server className="w-5 h-5 text-primary-foreground" />}
                       {category.includes('Database') && <Database className="w-5 h-5 text-primary-foreground" />}
                       {category.includes('AI') && <Code className="w-5 h-5 text-primary-foreground" />}
                     </div>
                     <h3 className="font-semibold text-lg">{category}</h3>
                   </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              Building solutions that make a difference
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <Card key={project.title} className="card-elegant group animate-slide-up hover:border-primary/50" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="text-accent font-medium">{project.role}</span>
                        <span>{project.timeline}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      <a 
                        href={`https://github.com/Adithya14255/${project.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                   <div className="flex flex-wrap gap-2">
                     {project.tech.map((tech) => (
                       <Badge key={tech} className="bg-accent text-accent-foreground hover:shadow-glow transition-all">
                         {tech}
                       </Badge>
                     ))}
                   </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="https://github.com/Adithya14255" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-neon transition-all">
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Experience</h2>
            <p className="text-xl text-muted-foreground">
              Building expertise through hands-on projects and community involvement
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="card-elegant p-8 animate-slide-up">
              <CardContent className="p-0">
                 <div className="flex items-start gap-6">
                   <div className="p-3 bg-primary rounded-lg flex-shrink-0 shadow-glow">
                     <Server className="w-6 h-6 text-primary-foreground" />
                   </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Arbiter</h3>
                        <p className="text-primary font-semibold">IPS Tech Community</p>
                        <p className="text-sm text-muted-foreground">Coimbatore, Tamil Nadu</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          May 2024 - Present
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                        <p>Undertook 2 consultancy projects and delivered solutions to client expectations</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                        <p>Managed small technical teams (5-10 members) for community-based projects and volunteered for various initiatives</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                        <p>Managed technical reviews, project timelines, and deadlines effectively while maintaining quality standards</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                        <p>Contributed to 6 projects with one being open-source and helped optimize application performance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Certifications</h2>
            <p className="text-xl text-muted-foreground">
              Continuous learning and professional development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={cert.name} className="card-elegant p-6 animate-slide-up hover:border-accent/50" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-0">
                   <div className="flex items-start gap-4">
                     <div className="p-2 bg-accent rounded-lg flex-shrink-0 pulse-glow shadow-glow">
                       <Award className="w-5 h-5 text-accent-foreground" />
                     </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 text-foreground">{cert.name}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        {cert.issuer && (
                          <p className="text-primary text-sm font-medium">{cert.issuer}</p>
                        )}
                        <span className="text-accent text-sm font-medium">({cert.year})</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {cert.credential}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Let's Build Something Amazing Together</h2>
            <p className="text-xl text-muted-foreground">
              Ready to collaborate on your next project? Let's connect!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-slide-up">
              <Card className="card-elegant p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full btn-gradient">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="animate-slide-up">
              <Card className="card-elegant p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                     <div className="flex items-center gap-4">
                       <div className="p-3 bg-primary rounded-lg shadow-glow">
                         <Mail className="w-6 h-6 text-primary-foreground" />
                       </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:adithya14255@gmail.com" className="text-primary hover:underline">
                          adithya14255@gmail.com
                        </a>
                      </div>
                    </div>
                    
                     <div className="flex items-center gap-4">
                       <div className="p-3 bg-primary rounded-lg shadow-glow">
                         <Phone className="w-6 h-6 text-primary-foreground" />
                       </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <a href="tel:+919952189871" className="text-primary hover:underline">
                          +91 99521 89871
                        </a>
                      </div>
                    </div>
                    
                     <div className="flex items-center gap-4">
                       <div className="p-3 bg-primary rounded-lg shadow-glow">
                         <MapPin className="w-6 h-6 text-primary-foreground" />
                       </div>
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-muted-foreground">Coimbatore, Tamil Nadu, India</p>
                      </div>
                    </div>
                    
                    <div className="pt-6">
                      <h4 className="font-semibold mb-4">Connect With Me</h4>
                      <div className="flex gap-4">
                         <a 
                           href="https://linkedin.com/in/adithya-g-a2085b268/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="p-3 bg-primary rounded-lg text-primary-foreground hover:shadow-neon transition-all"
                         >
                           <Linkedin className="w-6 h-6" />
                         </a>
                         <a 
                           href="https://github.com/Adithya14255" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="p-3 bg-secondary rounded-lg text-secondary-foreground hover:shadow-glow transition-all"
                         >
                           <Github className="w-6 h-6" />
                         </a>
                         <a 
                           href="mailto:adithya14255@gmail.com"
                           className="p-3 bg-accent rounded-lg text-accent-foreground hover:shadow-glow transition-all"
                         >
                           <Mail className="w-6 h-6" />
                         </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Adithya G. Built with passion and React. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;