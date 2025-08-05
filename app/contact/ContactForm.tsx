'use client'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { toast } from 'sonner'

const labelWithRequiredStar = ({ label }: { label: string }) => {
    return (
        <Label htmlFor={label.toLowerCase()}>
            <span className="flex">
                <span>{label}</span>
                <span className="text-red-500">*</span>
            </span>
        </Label>
    )
}

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        message: '',
    })

    const [isPending, setIsPending] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsPending(true)

        try {
            const response = await fetch('https://formspree.io/f/xrbkzyoa', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullname: formData.fullname,
                    email: formData.email,
                    message: formData.message,
                }),
            })

            if (response.ok) {
                toast.success('Message sent successfully!')
                setFormData({ fullname: '', email: '', message: '' })
            } else {
                toast.error('Failed to send message. Please try again.')
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.')
        } finally {
            setIsPending(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                {labelWithRequiredStar({ label: 'Name' })}
                <div className="space-y-1">
                    <Input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        className="px-2 py-6"
                        name="fullname"
                        value={formData.fullname}
                        onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                        required
                    />
                </div>
            </div>

            <div className="space-y-4">
                {labelWithRequiredStar({ label: 'Email' })}
                <div className="flex flex-col space-y-1">
                    <Input
                        type="email"
                        id="email"
                        placeholder="Email address"
                        className="px-2 py-6"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </div>
            </div>

            <div className="space-y-4">
                {labelWithRequiredStar({ label: 'Message' })}
                <div className="space-y-1">
                    <Textarea
                        id="message"
                        placeholder="Say, Hello👋"
                        className="px-2 py-4"
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                    />
                </div>
            </div>

            <div className="space-y-4">
                <Button
                    type="submit"
                    className="w-full px-8 py-6 cursor-pointer"
                    size="lg"
                    variant="default"
                    disabled={isPending}
                >
                    {isPending ? 'Sending...' : 'Submit'}
                </Button>

                <Button
                    type="reset"
                    className="w-full px-8 py-6 cursor-pointer"
                    size="lg"
                    variant="outline"
                    onClick={() =>
                        setFormData({
                            fullname: '',
                            email: '',
                            message: '',
                        })
                    }
                >
                    Reset
                </Button>
            </div>
        </form>
    )
}

export default ContactForm
