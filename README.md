# 🚀 Rohit Verma - DevOps Engineer Portfolio

<!-- [![Portfolio](https://img.shields.io/badge/Portfolio-Live-brightgreen)](https://rohitverma.dev) -->
[![GitHub](https://img.shields.io/badge/GitHub-rohit27305-blue)](https://github.com/rohit27305)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rohit_Verma-blue)]([https://linkedin.com/in/rohitverma27305](https://www.linkedin.com/in/rohit-verma-6641a9253/))
[![Medium](https://img.shields.io/badge/Medium-@rohitverma27305-green)](https://medium.com/@rohitverma27305)
[![Portfolio](https://img.shields.io/badge/Portfolio-@rohitverma.social-green)](http://rohitverma.social)


> A futuristic, sci-fi inspired portfolio showcasing DevOps expertise, cloud infrastructure projects, and automation skills.

## 🌟 Features

### 🎨 **Design & UI**
- **Sci-fi themed interface** with neon accents (cyan, purple, green)
- **Glassmorphism styling** with semi-transparent cards and backdrop blur
- **Smooth animations** powered by Framer Motion
- **Interactive particle background** using tsParticles
- **Responsive design** optimized for all devices
- **Dark/Light theme toggle** with localStorage persistence

### 🛠️ **Technical Stack**
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion for smooth transitions
- **Background**: tsParticles for interactive effects
- **Icons**: Lucide React
- **Backend**: Node.js + Express + Nodemailer
- **Deployment**: Docker + Docker Compose

### 📧 **Contact Form**
- **Functional email integration** with dual email system
- **Auto-reply to visitors** with professional templates
- **Form validation** and error handling
- **Rate limiting** to prevent spam
- **Gmail integration** with App Password support

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Docker (optional, for containerized deployment)

### 1. Clone Repository
```bash
git clone https://github.com/rohitverma27305/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
# Frontend dependencies
cd frontend
npm install

# Backend dependencies
cd backend
npm install
cd ..
```

### 3. Environment Setup
```bash
# Copy environment files
cp .env.example .env
cp backend/.env.example backend/.env

# Configure backend/.env with your email credentials
```

### 4. Development Mode
```bash
# Start frontend (Terminal 1)
cd frontend
npm run dev

# Start backend (Terminal 2)
cd backend
npm run dev
```

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000

## 📧 Email Configuration

### Gmail Setup (Recommended)
1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. **Update backend/.env**:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_APP_PASSWORD=your-16-character-app-password
   RECIPIENT_EMAIL=rohitverma27305@gmail.com
   ```

### Environment Variables
```env
# Backend Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-app-password
RECIPIENT_EMAIL=user@gmail.com
PORT=5000
NODE_ENV=production
FRONTEND_URL=http://localhost:3000

```

## 🐳 Docker Deployment

## Frontend Dedployment
```bash
# Build and run frontend container
docker build -t rohit-portfolio .
docker run -p 3000:80 rohit-portfolio
```

## Backend Deployment
```bash
# Build and run frontend container
docker build -t rohit-portfolio .
docker run -p 5000:5000 rohit-portfolio
```


## 📁 Project Structure

```
portfolio/
├── backend
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
├── frontend
│   ├── dist
│   ├── Dockerfile
│   ├── eslint.config.js
│   ├── index.html
│   ├── nginx.conf
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── public
│   ├── scripts
│   ├── src
│   ├── tailwind.config.js
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
└── README.md
```

## 🎯 Sections Overview

### 🏠 **Hero Section**
- Animated greeting with sci-fi theme
- Professional title and tagline
- Social media and resume links
- Interactive particle background

### 👨‍💻 **About Me**
- Personal introduction and mission
- Education and current role
- Animated skill progress bars
- Professional highlights

### 🛠️ **Skills & Tools**
- **Cloud & DevOps**: Kubernetes, Helm, Docker, AWS, DigitalOcean
- **Monitoring & CI/CD**: Grafana, Prometheus, SonarQube, GitHub Actions
- **Scripting & OS**: Linux, Bash, Python, YAML, JSON
- Interactive hover effects and descriptions

### 🚀 **Projects**
- **End-to-End Microservice Deployment**: Complete CI/CD pipeline
- **Kubernetes Chat App**: Scalable three-tier application
- **Advanced Monitoring Stack**: Prometheus + Grafana setup
- **Security-First Infrastructure**: RBAC and network policies
- **SonarQube Integration**: Multi-branch code analysis

### 🏆 **Certifications & Achievements**
- AWS Cloud Practitioner
- Kubernetes Foundation
- Docker Certified Associate
- Database Programming in MySQL
- Smart India Hackathon 2023 Finalist

### 📝 **Blog Section**
- Featured articles on DevOps topics
- Links to Medium publications
- Technical tutorials and insights

### 📧 **Contact Form**
- Functional email integration
- Professional auto-reply system
- Form validation and error handling

### Fonts
- **Display**: Orbitron (sci-fi headings)
- **Monospace**: JetBrains Mono (code/technical)
- **Body**: System fonts (readability)

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Bundle Size**: Optimized with Vite
- **Loading Time**: < 2s on 3G
- **Responsive**: Mobile-first design

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Cyberpunk and sci-fi aesthetics
- **Icons**: Lucide React icon library
- **Animations**: Framer Motion community
- **Particles**: tsParticles library
- **Email Service**: Nodemailer community

## 📞 Contact

**Rohit Verma** - DevOps Engineer
- 📧 Email: rohitverma27305@gmail.com
- 📱 Phone: +91 9911564288
- 🌍 Location: Greater Noida, India
- 💼 LinkedIn: [Rohit Verma](https://linkedin.com/in/rohit-verma-6641a9253)
- 🐙 GitHub: [rohit27305](https://github.com/rohit27305)
- ✍️ Medium: [@rohitverma27305](https://medium.com/@rohitverma27305)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

*Automating the future, one deployment at a time...*

</div>
