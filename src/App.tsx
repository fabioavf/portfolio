import * as motion from 'motion/react-client';
import { ArrowRight, Github, Linkedin, Mail, Menu } from 'lucide-react';
import { FloatingBalls } from './components/FloatingBalls';
import { TypeWriter } from './components/TypeWriter';
import { TimelineItem } from './components/TimelineItem';

function App() {
    return (
        <div className='min-h-screen bg-zinc-900 text-zinc-100 -z-10'>
            {/* Navbar */}
            <nav className='fixed w-full p-6 backdrop-blur-sm bg-zinc-900/80'>
                <div className='max-w-6xl mx-auto flex justify-between items-center'>
                    <TypeWriter text='amorelli.dev' className='flex items-center text-xl font-bold' />
                    <Menu className='md:hidden' size={24} />
                    <div className='hidden md:flex gap-8'>
                        <a href='#' className='hover:text-fuchsia-600 transition-colors'>
                            Projects
                        </a>
                        <a href='#' className='hover:text-fuchsia-600 transition-colors'>
                            About
                        </a>
                        <a href='#' className='hover:text-fuchsia-600 transition-colors'>
                            Contact
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className='min-h-screen flex items-center pt-20'>
                <FloatingBalls />
                <div className='max-w-6xl mx-auto px-6 py-20 z-10'>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='text-5xl md:text-7xl font-bold mb-6'
                    >
                        Hello! <br />
                        I'm <span className='text-fuchsia-600'>Fabio</span>.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.75 }}
                        className='text-xl text-zinc-400 max-w-xl mb-8'
                    >
                        I'm a full-stack developer based in Brazil. I specialize in building web applications with
                        modern technologies.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className='group flex items-center gap-2 bg-fuchsia-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-fuchsia-700 transition-colors'
                    >
                        View My Work
                        <ArrowRight className='group-hover:translate-x-1 transition-transform' />
                    </motion.button>
                </div>
            </section>

            {/* Experience Section */}
            <section className='py-20 px-6'>
                <div className='max-w-6xl mx-auto'>
                    <h2 className='text-3xl font-bold mb-12'>Experience</h2>
                    <div className='max-w-3xl'>
                        <TimelineItem
                            year='feb/2023 - set/2023'
                            title='Software Engineer Trainee'
                            subtitle='LEVTY'
                            description='Developed client solutions using SYDLE One Platform. Worked with a team of engineers to deliver high-quality software.'
                        />
                        <TimelineItem
                            year='feb/2021 - jan/2023'
                            title='Software Developer'
                            subtitle='byron.solutions'
                            description=''
                            descriptionList={[
                                'Developed and published a Flutter app with Firebase backend',
                                'Led frontend development of a real estate website using React.js, TypeScript, and Next.js',
                                'Implemented key features using Context API, JWT Auth, and styled-components',
                                'Led company stack transition from WordPress to React.js and Next.js',
                                'Conducted technical training for team members in React and Strapi',
                            ]}
                        />
                        <TimelineItem
                            year='jan/2022 - jan/2023'
                            title='Vice-President Director'
                            subtitle='byron.solutions'
                            description=''
                            descriptionList={[
                                'Led 5-person team and managed company operations',
                                'Oversaw administrative and financial responsibilities',
                                'Implemented strategic planning using PDCA, OKR, and SWOT',
                                'Represented company to university administration',
                                'Participated in executive decision-making',
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className='py-20 px-6 bg-zinc-800/50'>
                <div className='max-w-6xl mx-auto'>
                    <h2 className='text-3xl font-bold mb-12'>Education</h2>
                    <div className='max-w-3xl'>
                        <TimelineItem
                            year='2020 - 2026'
                            title="Bachelor's in Computer Engineering"
                            subtitle='Universidade Federal de Itajubá'
                            description='Currently studying computer engineering with a focus on software development.'
                        />
                        <TimelineItem
                            year='2019 - 2020'
                            title="Bachelor's in Electrical Engineering"
                            subtitle='Universidade Federal de Itajubá'
                            description='Studied electrical engineering for one year before switching to computer engineering.'
                        />
                    </div>
                </div>
            </section>

            {/* Project Preview Grid */}
            <section className='py-20 px-6'>
                <div className='max-w-6xl mx-auto'>
                    <h2 className='text-3xl font-bold mb-12'>Featured Projects</h2>
                    <div className='grid md:grid-cols-2 gap-8'>
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className='bg-zinc-800 rounded-lg p-6 h-64 hover:bg-zinc-700 transition-colors'
                            >
                                <div className='h-full flex flex-col justify-between'>
                                    <h3 className='text-xl font-semibold'>Project {item}</h3>
                                    <div className='text-zinc-400'>Project description placeholder</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className='py-12 px-6 border-t border-zinc-800'>
                <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6'>
                    <div className='text-zinc-400'>© 2025 amorelli.dev. All rights reserved.</div>
                    <div className='flex gap-6'>
                        <Github className='hover:text-blue-400 transition-colors cursor-pointer' />
                        <Linkedin className='hover:text-blue-400 transition-colors cursor-pointer' />
                        <Mail className='hover:text-blue-400 transition-colors cursor-pointer' />
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
