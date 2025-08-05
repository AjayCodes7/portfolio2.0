'use client'
import { MY_STACK } from '@/lib/data'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(
        () => {
            const slideUpEl = containerRef.current?.querySelectorAll('.slide-up')

            if (!slideUpEl?.length) return

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            })

            tl.from('.slide-up', {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.4,
            })
        },
        { scope: containerRef }
    )

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            })

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            })
        },
        { scope: containerRef }
    )

    return (
        <section id="my-stack">
            {/* ref={containerRef} */}
            <div className="container">
                <div className="space-y-10 py-6">
                    {Object.entries(MY_STACK).map(([key, value]) => (
                        <div className="grid sm:grid-cols-12" key={key}>
                            <div className="sm:col-span-5">
                                <h1 className="text-2xl pb-5 font-bold leading-none tracking-tighter text-muted-foreground ">
                                    {/*slide-up*/}
                                    {key}
                                </h1>
                            </div>

                            <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
                                {value.map((item) => (
                                    <div
                                        className="flex gap-3.5 items-center leading-none"
                                        key={item.name}
                                    >
                                        {/*slide-up*/}
                                        <div>
                                            <Image
                                                src={item.icon}
                                                alt={item.name}
                                                width="20"
                                                height="20"
                                                className="max-h-10"
                                            />
                                        </div>
                                        <span className="text-2xl capitalize">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
