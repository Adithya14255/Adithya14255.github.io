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

  const fullText = "Interstellar Code Architect & Cosmic Problem Solver";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typedText.length < fullText.length) {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [typedText, fullText]);

  const skills = {
    "Programming Languages": ["Python", "C"],
    "Web Development": ["HTML", "CSS", "AngularJS", "Flask", "React", "RESTful APIs"],
    "DevOps & Tools": ["Git", "GitHub", "Docker"],
    "Cloud & Deployment": ["Render", "Vercel"],
    "Databases": ["PostgreSQL", "MySQL"],
    "AI/ML": ["Generative AI", "API Management"]
  };

  const projects = [
    {
      title: "Academic Progression Tracker",
      description: "Web application for tracking academic progress at KGiSL Institute. Reduces manual reporting time by 40% with automated progress monitoring and analytics.",
      tech: ["Python", "Flask", "PostgreSQL", "HTML/CSS"],
      github: "Academic-Progress-Tracker",
      featured: true
    },
    {
      title: "GitHub Skill Analyzer",
      description: "AI-powered tool for assessing programming skills from GitHub activity. Helped 30+ students prepare for interviews with automated code analysis.",
      tech: ["Python", "AI/ML", "GitHub API", "Flask"],
      github: "Github-Skill-Analyzer",
      featured: true
    },
    {
      title: "Pro Planet",
      description: "Environmental awareness website focused on carbon footprint management using carbon credits concept for sustainable development.",
      tech: ["HTML", "CSS", "JavaScript", "Environmental APIs"],
      github: "Pro-Planet",
      featured: true
    },
    {
      title: "WageDaily",
      description: "Platform connecting employers with daily wage workers. My first major project that marked the beginning of my development journey.",
      tech: ["Web Technologies", "Database Management"],
      github: "Wage-Daily",
      featured: false
    }
  ];

  const certifications = [
    { name: "React Basics", issuer: "Meta", credential: "MYWA3B6Z30T9" },
    { name: "Design and Develop a Website using Figma and CSS", credential: "0MQ1VIJLIQG2" },
    { name: "Web Development with Python", issuer: "Microsoft", credential: "X2JTBRSBWBB1" },
    { name: "Introduction to Front-End Development", issuer: "Meta", credential: "6JPA8EEAK8JE" },
    { name: "Business English: Proficient - C1", issuer: "LinguaSkill", credential: "IA069Kgisl29MayB102/B" }
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
        <div className="cosmic-particles"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 animate-glow-pulse">
                Hi, I'm <span className="text-gradient wormhole-effect inline-block">Adithya G</span>
              </h1>
              <div className="text-xl lg:text-2xl text-primary mb-2 h-8 font-semibold">
                {typedText}
                <span className="animate-pulse text-secondary">|</span>
              </div>
              <p className="text-lg text-primary/80 mb-8 max-w-2xl leading-relaxed">
                Navigating the cosmic depths of code from Coimbatore, Tamil Nadu. 
                Architecting solutions that transcend the boundaries of space and time, 
                building bridges between dimensions of possibility.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" className="btn-gradient text-white font-semibold border border-primary/30">
                  <Mail className="w-5 h-5 mr-2" />
                  Enter the Wormhole
                </Button>
                <Button size="lg" variant="hero" className="bg-card/10 border-primary/30 text-primary hover:bg-primary/20 hover:shadow-glow">
                  <Download className="w-5 h-5 mr-2" />
                  Cosmic Resume
                </Button>
                <Button size="lg" variant="hero" className="bg-card/10 border-primary/30 text-primary hover:bg-primary/20 hover:shadow-glow">
                  <Github className="w-5 h-5 mr-2" />
                  Stellar Projects
                </Button>
              </div>
              <div className="flex gap-6 justify-center lg:justify-start">
                <a href="https://linkedin.com/in/adithya-g-a2085b268/" target="_blank" rel="noopener noreferrer" 
                   className="text-primary/70 hover:text-primary transition-all hover:shadow-glow p-2 rounded-full border border-primary/20 hover:border-primary/50">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/Adithya14255" target="_blank" rel="noopener noreferrer"
                   className="text-primary/70 hover:text-primary transition-all hover:shadow-glow p-2 rounded-full border border-primary/20 hover:border-primary/50">
                  <Github className="w-6 h-6" />
                </a>
                <a href="mailto:adithya14255@gmail.com"
                   className="text-primary/70 hover:text-primary transition-all hover:shadow-glow p-2 rounded-full border border-primary/20 hover:border-primary/50">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="flex justify-center animate-float">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-glow animate-glow-pulse">
                  <img 
                    src={heroPortrait} 
                    alt="Adithya G - Interstellar Code Architect" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-primary rounded-full p-4 animate-float border-2 border-secondary/50">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
                <div className="absolute top-1/4 -right-6 w-4 h-4 bg-secondary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-1/3 -left-8 w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
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
                    <div className="border-l-4 border-primary pl-6">
                      <h4 className="font-semibold text-lg">Bachelor of Engineering - Computer Science</h4>
                      <p className="text-primary font-medium">KGiSL Institute of Technology</p>
                      <p className="text-sm text-muted-foreground">2022 - 2026</p>
                      <p className="font-semibold text-accent">CGPA: 8.83/10 (6 Semester)</p>
                    </div>
                    
                    <div className="border-l-4 border-secondary pl-6">
                      <h4 className="font-semibold text-lg">Computer Science (CBSE)</h4>
                      <p className="text-secondary font-medium">Kendriya Vidyalaya</p>
                      <p className="text-sm text-muted-foreground">2010 - 2022</p>
                      <p className="font-semibold">10th: 90.4% | 12th: 86.8%</p>
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
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      {category.includes('Programming') && <Code className="w-5 h-5 text-white" />}
                      {category.includes('Web') && <Globe className="w-5 h-5 text-white" />}
                      {category.includes('DevOps') && <Server className="w-5 h-5 text-white" />}
                      {category.includes('Cloud') && <Server className="w-5 h-5 text-white" />}
                      {category.includes('Database') && <Database className="w-5 h-5 text-white" />}
                      {category.includes('AI') && <Code className="w-5 h-5 text-white" />}
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
              <Card key={project.title} className="card-elegant group animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <a 
                      href={`https://github.com/Adithya14255/${project.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} className="bg-gradient-secondary text-white">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="group">
              <Github className="w-5 h-5 mr-2 group-hover:text-primary" />
              View All Projects on GitHub
            </Button>
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
                  <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
                    <Server className="w-6 h-6 text-white" />
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
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Undertaken consultancy projects and delivered to expectations</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Managed small teams for technical projects and community initiatives</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Implemented API solutions for community-based applications</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Managed technical reviews and project deadlines effectively</p>
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
              <Card key={cert.name} className="card-elegant p-6 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gradient-accent rounded-lg flex-shrink-0">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{cert.name}</h3>
                      {cert.issuer && (
                        <p className="text-primary text-sm font-medium mb-2">{cert.issuer}</p>
                      )}
                      <p className="text-xs text-muted-foreground">
                        Credential ID: {cert.credential}
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
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:adithya14255@gmail.com" className="text-primary hover:underline">
                          adithya14255@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <a href="tel:+919952189871" className="text-primary hover:underline">
                          +91 99521 89871
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <MapPin className="w-6 h-6 text-white" />
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
                          className="p-3 bg-gradient-primary rounded-lg text-white hover:shadow-glow transition-all"
                        >
                          <Linkedin className="w-6 h-6" />
                        </a>
                        <a 
                          href="https://github.com/Adithya14255" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 bg-gradient-primary rounded-lg text-white hover:shadow-glow transition-all"
                        >
                          <Github className="w-6 h-6" />
                        </a>
                        <a 
                          href="mailto:adithya14255@gmail.com"
                          className="p-3 bg-gradient-primary rounded-lg text-white hover:shadow-glow transition-all"
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