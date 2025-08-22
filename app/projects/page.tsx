import { PageHeader } from '@/components/page-header'
import { PageHeaderHeading } from '@/components/page-header'
import {
    MinimalCard,
    MinimalCardImage,
    MinimalCardTitle,
    MinimalCardDescription,
    MinimalCardContent,
} from '@/components/ui/minimal-card'

import Link from 'next/link'
import { projects } from './projects'

const ProjectsPage = () => {
    return (
        <>
            <PageHeader className="mb-10">
                <PageHeaderHeading>Projects</PageHeaderHeading>
                <PageHeaderHeading className="mt-2 mb-10 text-muted-foreground">
                    Bringing ideas to life through code!
                </PageHeaderHeading>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 card-container">
                    {projects.map((project, index) => (
                        <MinimalCard
                            title={project.overview}
                            key={index}
                            className="relative w-full transition-all duration-300 cursor-pointer isolate"
                        >
                            <Link
                                href={`/projects/${project.slug}`}
                                className="text-muted-foreground"
                            >
                                <MinimalCardImage src={project.image.src} alt={project.title} />
                                <MinimalCardContent>
                                    <MinimalCardTitle>
                                        {project.slug.replaceAll('-', ' ')}
                                    </MinimalCardTitle>
                                    <MinimalCardDescription>
                                        {project.tagline}
                                    </MinimalCardDescription>
                                </MinimalCardContent>
                            </Link>
                        </MinimalCard>
                    ))}
                </div>
            </PageHeader>
        </>
    )
}
export default ProjectsPage
