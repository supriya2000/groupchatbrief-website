'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  Chrome,
  CircleCheck,
  Clock3,
  EyeOff,
  FileText,
  FolderOpen,
  Gamepad2,
  KeyRound,
  Laptop,
  LockKeyhole,
  MessageCircle,
  Plane,
  Reply,
  ShieldCheck,
  Sparkles,
  Utensils,
  Users,
  WalletCards,
  X,
} from 'lucide-react'

const INSTALL_LINK = 'https://drive.google.com/file/d/1pIr54xPqCnTalbNDaIVdpfNtExHOC95z/view'
const GOOGLE_AI_LINK = 'https://aistudio.google.com/app/apikey'

const steps = [
  { title: 'Pick your groups.', body: 'GroupChatBrief lists your WhatsApp groups. Every group is off by default. Tick the ones you want covered.', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-57VS0Fm7A7eH2QlyJFyNFYUkQAdwKa.png', caption: 'Every group starts off. Tick the ones you want covered.' },
  { title: 'It reads and summarises.', body: 'Every hour, and with a full recap at 8 pm, it reads new messages from those groups and works out what matters.', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YiCJRuQ5qkZn22L8dxx5yqqTESKI8E.png', caption: 'Hundreds of messages, one short summary.' },
  { title: 'You get the plan.', body: 'For each group: what was discussed, the plan, the final decision, and what is still open. Tap to set a reminder or add it to your calendar.', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-89lH02bwsjI7mE0WQpmkhjd0YsAuwv.png', caption: 'Plans with dates become reminders and calendar events.' },
]

const features = [
  [FileText, 'Summary per group.', 'Discussed, plan, final decision. Every important item listed on its own, not squashed into one paragraph.'],
  [CircleCheck, 'Action plan.', 'Today and upcoming items in one place. Mark things resolved when done.'],
  [CalendarDays, 'Add to Calendar.', 'Plans with a date and time turn into a Google Calendar event in one tap.'],
  [Bell, 'Reminders.', 'A nudge one hour before an event, so badminton at 7 does not get lost under 40 photos.'],
  [Reply, 'Needs reply.', 'Messages you have not answered, ranked High, Medium or Low. Remind me later or mark resolved.'],
  [EyeOff, 'Mute and quiet.', 'Mute a group forever, for 30 days, or until you unmute it. Groups quiet for 6+ months stay hidden.'],
] as const

const faqs = [
  ['Does it read all my chats?', 'No. Only the groups you tick. Direct chats are never read.'],
  ['Do I need to keep WhatsApp Web open?', 'Yes. GroupChatBrief runs while WhatsApp Web is open in Chrome.'],
  ['What does it cost to run?', 'The summaries use your own Gemini key. Gemini has a free tier, so most people pay nothing for it.'],
  ['Will it reply for me?', 'No. It never sends anything on your behalf.'],
  ['Will WhatsApp ban me?', 'GroupChatBrief only reads what is on your screen, like you scrolling. It does not send messages or automate replies. Check wording before publishing, this is not an official WhatsApp-approved tool.'],
  ['Does it work on my phone?', 'Not yet. It is a Chrome extension for desktop.'],
  ['A group would not open or got skipped.', 'Check the Scan report in the popup. Communities cannot be read directly, so tick the groups inside them.'],
]

function ButtonLink({ children, secondary = false, href = INSTALL_LINK }: { children: React.ReactNode; secondary?: boolean; href?: string }) {
  return <a href={href} className={secondary ? 'button button-secondary' : 'button'}>{children}{!secondary && <ArrowRight aria-hidden="true" />}</a>
}

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top"><span className="brand-mark" aria-hidden="true"><MessageCircle /><i /></span>GroupChatBrief</a>
        <div className="nav-links"><a href="#how-it-works">How it works</a><a href="#features">Features</a><a href="#privacy">Privacy</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a></div>
        <ButtonLink>Add to Chrome</ButtonLink>
      </nav>

      <section id="top" className="hero shell">
        <div className="hero-copy"><div className="eyebrow"><Sparkles aria-hidden="true" /> Your group chat, made useful</div><h1>Never miss anything in your <em>group chats.</em></h1><p>GroupChatBrief reads the WhatsApp groups you choose and tells you what was discussed, what was decided and what you need to do. 200 messages become a short list.</p><div className="hero-actions"><ButtonLink>Add to Chrome</ButtonLink><ButtonLink secondary href="#how-it-works">See how it works</ButtonLink></div><small>Works on WhatsApp Web. Only reads the groups you tick.</small></div>
        <div className="hero-visual"><div className="browser-bar"><span /><span /><span /><div className="address">web.whatsapp.com</div></div><div className="hero-browser"><div className="mini-sidebar"><div className="mini-logo"><MessageCircle /></div><div className="mini-line active" /><div className="mini-line" /><div className="mini-line" /><div className="mini-line" /></div><div className="summary-pane"><div className="summary-top"><div><strong>Today</strong><span>GroupChatBrief recap</span></div><Bell /></div><div className="summary-card"><div className="summary-icon"><Users /></div><div><b>Family</b><span>Plan dinner for Saturday</span><small><Check /> Decision made</small></div></div><div className="summary-card"><div className="summary-icon"><Laptop /></div><div><b>Work project</b><span>Review moved to Thursday</span><small><Clock3 /> 2 items open</small></div></div><div className="summary-card faded"><div className="summary-icon"><WalletCards /></div><div><b>Football</b><span>Match at 7:30 pm</span></div></div></div></div><div className="floating-note"><Check /> 3 groups summarised</div></div>
      </section>

      <section id="how-it-works" className="section shell"><div className="section-heading"><div><span className="section-kicker">How it works</span><h2>From noisy chats to a clear next step.</h2></div><p>GroupChatBrief does the catching up for you, without reading anything you did not choose.</p></div><div className="steps">{steps.map((step, index) => <article className="step" key={step.title}><div className="step-number">0{index + 1}</div><div className="step-image"><img src={step.image} alt={step.caption} /></div><h3>{step.title}</h3><p>{step.body}</p><span className="caption">{step.caption}</span></article>)}</div></section>

      <section id="features" className="section section-tint"><div className="shell"><div className="section-heading centered"><div><span className="section-kicker">Features</span><h2>Less scrolling. More doing.</h2></div><p>Everything you need to turn group chat into a lightweight to-do list.</p></div><div className="feature-grid">{features.map(([Icon, title, body]) => <article className="feature-card" key={title}><div className="feature-icon"><Icon /></div><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

      <section id="privacy" className="section shell privacy"><div className="privacy-copy"><span className="section-kicker">Privacy</span><h2>Your groups, your choice, <em>your key.</em></h2><p>GroupChatBrief is built to stay out of the way. You choose what it can see, and your Gemini key stays in your browser.</p><a className="text-link" href={GOOGLE_AI_LINK}>Get a free Gemini key <ArrowRight /></a></div><div className="privacy-list">{['Groups only. GroupChatBrief never reads direct chats, OTPs or personal conversations.', 'Off by default. A group is read only after you tick it.', 'Last 30 days only. Older messages are not touched.', 'Each message is sent for summarising once. Already-scanned messages are not sent again.', 'You use your own free Gemini API key, pasted into the extension. It stays in your browser. No account with us needed.', 'GroupChatBrief never sends a message for you.'].map(item => <div className="check-item" key={item}><Check /><span>{item}</span></div>)}</div></section>
      <section className="privacy-note shell"><LockKeyhole /><p><strong>Plainly:</strong> messages from your selected groups are sent to Google&apos;s Gemini to be summarised, under your own key.</p></section>

      <section id="install" className="section install-section"><div className="shell install-grid"><div><span className="section-kicker">Manual install</span><h2>Install in about <em>2 minutes.</em></h2><p>Until the Chrome Web Store listing is approved, download the extension and load it once in Chrome.</p><ButtonLink href={INSTALL_LINK}>Download zip</ButtonLink></div><div className="install-steps">{['Download the GroupChatBrief zip and unzip it to a folder you will keep.', 'Open chrome://extensions in Chrome and switch on Developer mode (top right).', 'Click Load unpacked and choose the unzipped folder.', 'Open web.whatsapp.com and log in. Refresh the page once.', 'Click the GroupChatBrief icon (pin it from the puzzle-piece menu). Paste your Gemini API key and press Connect Now.', 'Tick your groups. The first scan starts on its own.'].map((item, index) => <div className="install-step" key={item}><span>{index + 1}</span><p>{item}</p></div>)}</div></div><div className="shell install-footnote"><p><strong>Updating?</strong> Unzip over the same folder, press Reload on chrome://extensions, then refresh WhatsApp Web. Removing and re-adding the extension clears your saved key, so paste it again.</p><p><strong>How to get a free Gemini key:</strong> <a href={GOOGLE_AI_LINK}>Open Google AI Studio</a>, sign in with your Google account, click “Create API key”, then copy it into GroupChatBrief.</p></div></section>

      <section id="pricing" className="section shell"><div className="section-heading centered"><div><span className="section-kicker">Pricing</span><h2>Start free. Keep it simple.</h2></div><p>Your own Gemini key means the summaries cost you nothing to get started.</p></div><div className="pricing-grid"><article className="price-card"><div><span className="plan-label">Free</span><div className="price">Rs 0 <small>forever</small></div><p>Everything you need to stop missing the important bits.</p></div><ul><li><Check /> Up to 5 groups</li><li><Check /> Hourly summaries</li><li><Check /> Evening recap</li></ul><ButtonLink secondary href={INSTALL_LINK}>Get started</ButtonLink></article><article className="price-card pro"><div className="coming-soon">Coming soon</div><div><span className="plan-label">Pro</span><div className="price">Rs __ <small>/ month</small></div><p>For people whose group chats are basically a second inbox.</p></div><ul><li><Check /> All your groups</li><li><Check /> Calendar and reminders</li><li><Check /> Needs-reply reminders</li></ul><a className="button button-secondary" href="mailto:hello@groupchatbrief.app?subject=GroupChatBrief%20Pro%20waitlist">Join the waitlist</a></article></div></section>

      <section id="faq" className="section section-tint"><div className="shell faq"><div><span className="section-kicker">FAQ</span><h2>Good questions.</h2><p>Still wondering something? <a href="mailto:hello@groupchatbrief.app">Ask us directly.</a></p></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className="faq-item" key={question}><button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><ChevronDown className={openFaq === index ? 'rotated' : ''} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></section>

      <footer className="footer"><div className="shell footer-inner"><div><a className="brand" href="#top"><span className="brand-mark" aria-hidden="true"><MessageCircle /><i /></span>GroupChatBrief</a><p>Never miss anything in your group chats.</p></div><div className="footer-links"><a href="#privacy">Privacy</a><a href="mailto:hello@groupchatbrief.app">Contact</a><a href="#install">Install guide</a></div></div><div className="shell footer-bottom"><span>Not affiliated with WhatsApp or Meta. WhatsApp is a trademark of Meta.</span><span>© 2026 GroupChatBrief</span></div></footer>
    </main>
  )
}
