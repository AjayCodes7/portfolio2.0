import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header'

const EducationPage = () => {
    return (
        <>
            <PageHeader className="lg:mt-5 lg:mb-5">
                <PageHeaderHeading>Education</PageHeaderHeading>
                <PageHeaderHeading className="mt-2 text-muted-foreground">
                    My academic journey
                </PageHeaderHeading>
                <PageHeaderDescription>
                    My journey in tech started with curiosity, but pursuing a B.Tech in Computer
                    Science has turned that curiosity into a solid foundation of technical skills
                    and problem-solving. Each subject I’ve explored has brought me closer to
                    becoming the developer I aspire to be.
                </PageHeaderDescription>
                <PageHeaderDescription>
                    Beyond the classroom, working on projects and internships has shown me how ideas
                    turn into real solutions. These experiences have shaped the way I approach
                    problems—combining logic, creativity, and a drive to keep learning.
                </PageHeaderDescription>

                <ol className="relative my-10 border-gray-200 border-s dark:border-gray-700">
                    <li className="mb-10 ms-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg
                                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            MVGR College of Engineering · Vizianagaram
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
                                Latest
                            </span>
                        </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            Dec. 2021 - May. 2025
                        </time>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            I graduated from MVGR College of Engineering with a Bachelor’s degree in
                            Computer Science and Engineering, specializing in programming, web
                            development, and software engineering.
                        </p>
                    </li>
                    <li className="mb-10 ms-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg
                                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Sri Chaitanya Junior College · BIEAP · Visakhapatnam
                        </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            June. 2019 - July. 2021
                        </time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            I studied Mathematics, Physics, and Chemistry during my Intermediate
                            education.
                        </p>
                    </li>
                    <li className="mb-10 ms-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg
                                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            ZP High School · BSEAP · Srikakulam
                        </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            Passed out in march. 2019
                        </time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Schooling provided me with the groundwork for academic growth while
                            fostering curiosity, discipline, and enthusiasm for learning.
                        </p>
                    </li>
                </ol>
            </PageHeader>
        </>
    )
}
export default EducationPage
