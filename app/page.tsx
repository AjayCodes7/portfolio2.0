import { PageActions } from '@/components/page-header'
import { PageHeaderDescription, PageHeaderHeading } from '@/components/page-header'
import { PageHeader } from '@/components/page-header'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { ExternalLink, Mail } from 'lucide-react'
import SkillsToolsPage from '@/app/skills-tools/page'
import ProjectsPage from '@/app/projects/page'
import ExperiencePage from '@/app/experience/page'
import EducationPage from '@/app/education/page'
import ContactPage from '@/app/contact/page'
import StatsPage from '@/app/stats/page'

const Intro = () => {
    return (
        <>
            <PageHeader className="h-screen">
                <PageHeaderHeading className="my-5 lg:pt-45">
                    Hey, I'm Ajay Kommana 👋
                </PageHeaderHeading>
                <PageHeaderHeading className="mt-2 text-muted-foreground">
                    Code is where I think, create, and thrive!
                </PageHeaderHeading>
                <PageHeaderDescription className="relative">
                    I’m a fresh engineering graduate passionate about building innovative digital
                    solutions. Skilled in Python and Java, I specialize in full-stack web
                    development using React, Node.js, and modern databases, and also create
                    cross-platform mobile apps with Flutter. I’m eager to kick-start my career and
                    contribute to impactful projects.
                </PageHeaderDescription>
                <PageActions>
                    <Button asChild size="sm" variant="outline" className="rounded-md">
                        <Link href={siteConfig.links.resume} target="_blank">
                            Get Resume
                            <ExternalLink className="size-3" strokeWidth={2} />
                        </Link>
                    </Button>
                    <Button asChild size="sm" variant="ghost" className="rounded-md">
                        <Link href={siteConfig.links.email}>
                            <Mail className="size-4" />
                            Send Mail
                        </Link>
                    </Button>
                </PageActions>
            </PageHeader>
        </>
    )
}

export default function Home() {
    return (
        <>
            <section className="scroll-mt-20" id="introduction">
                <Intro />
            </section>
            {/* <section className="scroll-mt-20" id="about-me"><AboutMePage /></section> */}
            <section className="scroll-mt-20" id="projects">
                <ProjectsPage />
            </section>
            <section className="scroll-mt-20" id="skills-tools">
                <SkillsToolsPage />
            </section>
            <section className="scroll-mt-20" id="experience">
                <ExperiencePage />
            </section>
            <section className="scroll-mt-20" id="education">
                <EducationPage />
            </section>
            <section className="scroll-mt-20" id="contact">
                <ContactPage />
            </section>
            <section className="scroll-mt-20" id="stats">
                <StatsPage />
            </section>
        </>
    )
}
