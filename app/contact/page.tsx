import { PageHeader, PageHeaderHeading } from '@/components/page-header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ContactForm from './ContactForm'
import FlipLink from '@/components/ui/text-effect-flipper'

const ContactPage = async () => {
    return (
        <>
            <PageHeader className="lg:mt-5">
                <PageHeaderHeading>Contact</PageHeaderHeading>
                <PageHeaderHeading className="mt-2 text-muted-foreground">
                    Get in touch!
                </PageHeaderHeading>
            </PageHeader>
            <div id="tabs" className="flex items-center mt-8 lg:mx-10 md:mx-5">
                <Tabs defaultValue="form" className="w-full">
                    <TabsList className="max-w-[300px] w-full">
                        <TabsTrigger value="form">Message</TabsTrigger>
                        <TabsTrigger value="details">Connect</TabsTrigger>
                    </TabsList>
                    <TabsContent value="form" className="mt-4">
                        <ContactForm />
                    </TabsContent>
                    <TabsContent
                        value="details"
                        className="mt-4 flex flex-col items-center justify-center gap-4"
                    >
                        <FlipLink href="https://www.linkedin.com/in/ajaykommana/">
                            LinkedIn
                        </FlipLink>
                        <FlipLink href="https://github.com/ajaycodes7">GitHub</FlipLink>
                        <FlipLink href="https://leetcode.com/u/ajaykommana123/">Leetcode</FlipLink>
                        <FlipLink href="https://wa.me/+919392785036">Whatsapp</FlipLink>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    )
}
export default ContactPage
