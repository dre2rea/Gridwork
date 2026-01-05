import { useState, type FormEvent } from 'react'

export function Footer() {
  const [feedback, setFeedback] = useState('')
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (feedback.trim().length < 3) {
      setMessage({ text: 'Please enter at least 3 characters.', type: 'error' })
      return
    }

    setMessage({ text: 'Thank you for your feedback!', type: 'success' })
    setFeedback('')

    setTimeout(() => {
      setMessage(null)
    }, 3000)
  }

  return (
    <footer className="mt-10 pt-5 border-t border-border">
      <p>
        If you are curious to learn more about my work, please check out{' '}
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline hover:text-muted transition-colors"
        >
          this link
        </a>
        .
      </p>

      <form onSubmit={handleSubmit} className="mt-5">
        <label htmlFor="feedback" className="block mb-2">
          Feedback please!
        </label>
        <div className="flex flex-col sm:flex-row gap-2.5 items-start sm:items-center">
          <input
            type="text"
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="type your feedback"
            className="px-3 py-2 text-sm border border-ink w-full max-w-[300px] font-mono focus:outline-none focus:border-muted"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 text-sm bg-ink text-cream border border-ink cursor-pointer transition-all duration-200 hover:bg-cream hover:text-ink"
          >
            Submit
          </button>
        </div>
        {message && (
          <p
            className={`mt-2.5 text-sm ${
              message.type === 'success' ? 'text-success' : 'text-error'
            }`}
          >
            {message.text}
          </p>
        )}
      </form>
    </footer>
  )
}

