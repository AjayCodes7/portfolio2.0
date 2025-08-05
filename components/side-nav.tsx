'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function SideNav({ config }: any) {
    const [activeSection, setActiveSection] = useState<string | null>(null)
    const items = config.sidebarNav

    useEffect(() => {
        const sectionIds: string[] = items.flatMap((group: any) =>
            group.items.map((item: any) => item.href.replace('#', ''))
        )

        const sections: HTMLElement[] = sectionIds
            .map((id: string) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.6 }
        )

        sections.forEach((section) => observer.observe(section))

        return () => {
            sections.forEach((section) => observer.unobserve(section))
        }
    }, [items])

    return items.length ? (
        <div className="flex flex-col gap-6">
            {items.map((group: any, index: number) => (
                <div key={index} className="flex flex-col gap-1">
                    <h4 className="rounded-md px-2 py-1 text-sm font-medium">{group.title}</h4>
                    {group.items?.length && (
                        <DocsNavItems items={group.items} activeSection={activeSection} />
                    )}
                </div>
            ))}
        </div>
    ) : null
}

function DocsNavItems({ items, activeSection }: { items: any; activeSection: string | null }) {
    return (
        <div className="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
            {items.map((item: any, index: number) =>
                item.href ? (
                    <a
                        key={index}
                        href={item.href}
                        onClick={(e) => {
                            e.preventDefault()
                            const id = item.href.replace('#', '')
                            const section = document.getElementById(id)
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            }
                            window.history.pushState(null, '', item.href)
                        }}
                        className={cn(
                            'group relative flex h-8 w-full items-center rounded-lg px-2 hover:bg-accent hover:text-accent-foreground',
                            activeSection === item.href.replace('#', '')
                                ? 'bg-accent font-medium text-accent-foreground'
                                : 'font-normal text-foreground'
                        )}
                    >
                        {item.title}
                    </a>
                ) : null
            )}
        </div>
    )
}
