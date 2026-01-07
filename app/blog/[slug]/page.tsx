import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Share2, Heart, MessageCircle } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Script from "next/script"

// Mock blog data - in a real app, this would come from a CMS or database
const blogPosts = {
  "awaken-the-purpose": {
    title: "Awaken the Purpose Within: Why High Achievers Are Seeking Something More",
    seoTitle: "Awaken the Purpose Within | Rediscover Direction & Meaning",
    seoDescription: "Reconnect with your inner purpose and realign your life with what matters most. Practical insights for modern high achievers.",
    excerpt:
      "Awaken the Purpose Within: Why High Achievers Are Seeking Something More.",
    content: `
      <p>For many high-net-worth individuals, success has been a long, well-orchestrated journey. You’ve built empires, invested wisely, and accumulated wealth that most can only dream of. But if you’re honest with yourself, there’s a question that’s been echoing in the quieter moments:</p>
      <br />
      <h2><strong>Is this it?</strong></h2>
      <p>At the heart of that question lies a deeper yearning; not for more assets, accolades, or acquisitions; but for <strong>alignment</strong>. A craving for <strong>meaning that outlives the numbers </strong>.</p>
      <p>That’s where <i>Awaken the Purpose Within</i> steps in.</p>
      <br />
      
      <h2><strong>The New Currency of Fulfillment</strong></h2>
      
      <p>We live in a time where the old playbook; earn, grow, scale, retire no longer guarantees peace. In fact, it often leaves a trail of emotional burnout and relational disconnection. Today’s HNW individuals are increasingly investing in something more elusive and profound: <strong>legacy through</strong> inner work.
         This isn’t about philanthropy for PR. It’s about purpose that drives your actions when no one is watching. Purpose that makes your next chapter count just as much, if not more, than your last.</p>
      
      <br/>
      <h2><strong>The Emotional Gap of Affluence</strong></h2>   
      <p>It’s a paradox most won’t admit publicly: the more you accumulate, the harder it becomes to talk about discontent. You feel the weight of expectations—of boards, family, the image you’ve crafted. But underneath, there may be:</p>
      
      <ul>
        <li>1. A loss of why behind the what</li>
        <li>2. A sense that your success is no longer evolving with you</li>
        <li>3. A fatigue from “performing” strength while feeling emotionally unanchored</li>
      </ul>
      <p>The workshop Awaken the Purpose Within was born from these very truths.</p>

      <br/>
      <h2><strong>What Makes This Workshop Different?</strong></h2>
      <p>Led by Andrew Dietz, a coach trusted by leaders and visionaries, this isn’t a feel-good motivational weekend. It’s a deep, strategic immersion designed for:</p>

      <ul>
        <li>1. Successful individuals who want to shift from <strong>achievement to alignment</strong></li>
        <li>2. Leaders ready to evolve into purpose-led contributors</li>
        <li>3. Those seeking <strong>clarity without losing their edge</strong></li>
        <li>4. Visionaries who want to do more than give back they want to<strong>build forward</strong></li>
      </ul>

      <br/>
      <h2><strong>The Core Pillars of the Workshop</strong></h2>
      <h2><strong>Reconnecting with Your Inner Compass</strong></h2>

      <p>Strip away the noise. What values did you start with that still matter? Which ones have shifted? This isn’t a coaching cliche. It’s an excavation of your emotional foundation.</p>
   
      <h2><strong>Purpose Beyond Performance</strong></h2>
      <p>Learn how to move from transactional success to transformational impact. Discover how your skills and influence can serve something bigger than you without draining you.</p>

      <h2><strong>Emotional Intelligence as a Power Tool</strong></h2>
      <p>Many think EQ is about being “soft.” At this level, it’s about precision. Learning to listen differently, lead differently, and connect more deeply with yourself and others.</p>


      <h2><strong>Legacy by Design, Not Default</strong></h2>
      <p>What does legacy really mean when wealth is already secured? For some, it’s about a foundation. For others, it’s about healing generational patterns. You’ll define yours—clearly, unapologetically.</p>


      <h2><strong>Who Is This For?</strong></h2>
      <p>This experience is intentionally exclusive—not to create status, but to ensure depth. Attendees are entrepreneurs, investors, C-suite leaders, creatives, and change-makers who have “won the game,” but now want to redefine what winning means.
        They’re not here for fluff. They’re here to break patterns that no longer serve them, and design a life that mirrors their current values.</p>
      
      <h2><strong>Realignment is the New Growth</strong></h2>
      <p>This isn’t about abandoning ambition. It’s about refining it. In fact, the most powerful outcomes often come after we recalibrate. Post-workshop, many attendees report:</p>
      <ul>
       <li>1. Renewed clarity in business and life decisions<li>
       <li>2. Improved emotional and relational awareness<li>
       <li>3. A surge in meaningful action that aligns with their bigger vision<li>
       <li>4. Deeper fulfillment—not just success<li>
      </ul>

      <h2><strong>Purpose Is Contagious</strong></h2>
      <p>When leaders wake up to their own alignment, the ripple effect is enormous. Teams shift. Families change. Cultures evolve. Communities grow. You don’t have to be a guru or a monk to inspire change just someone willing to come back to yourself.</p>
      
      <h2><strong>Are You Ready?</strong></h2>
      <p>If you’ve been feeling the pull toward something deeper... if you’ve achieved much but still feel unfinished... if you know there’s a “next level” that doesn’t live on a spreadsheet.</p>
      <br/>
      <p>Then it’s time.</p>
      <br/>
      <p><strong>Awaken the Purpose Within</strong> isn’t just a workshop. It’s a turning point.</p>
      <br/>
      <p>Apply now or request a private invite. This is your next chapter. Let’s make it count</p>
    `,
    image: "https://storage.googleapis.com/msgsndr/xQlIEgJuDpymPFH4Fs60/media/689f23187bb59e4aaef78935.webp?height=400&width=800&text=Happy+Morning+Routine",
    author: "Andrew Dietz",
    date: "May 15, 2025",
    readTime: "8 min read",
    tags: ["Happiness", "Daily Habits", "Mindfulness", "Well-being"],
    likes: 127,
    comments: 23,
  },
  "the-hidden-cost-of-success": {
    title: "The Hidden Cost of Success: What You're Missing While Winning",
    seoTitle: "The Hidden Cost of Success | What Ambition Often Overlooks",
    seoDescription: "Success comes with unseen emotional and mental costs. Understand what high achievers face and how to reclaim balance.",
    excerpt:
      "The Hidden Cost of Success: What You're Missing While Winning.",
    content: `
      <p>
        For years, society has applauded the late nights, the fast deals, the “always on” hustle.
        You’ve followed the path. You’ve built a thriving business, perhaps even a few. Your LinkedIn
        says “Founder,” your family is proud, your calendar is full.
      </p>

      <p>And yet...</p>

      <p>
        There’s a creeping silence in between the wins. A quiet ache that no one sees. A disconnect
        between what you do and how you feel doing it.
      </p>

      <p>You’re productive—but are you present? You’re successful—but are you satisfied?</p>
      <br/>
      <h2><strong>Burnout That Wears a Suit</strong></h2>

      <p>
        Not all burnout looks like collapse. Sometimes it looks like achievement. You’re still
        delivering, still closing deals, still scaling. But you’ve become a machine. A reliable
        one—but a machine, nonetheless.
      </p>

      <p>That’s the hidden cost.</p>

      <p>The cost of losing yourself while building a life that everyone else celebrates.</p>

      <p>What’s missing isn’t another trophy. It’s alignment. Clarity. Wholeness.</p>
      <br/>
      <h2><strong>How Did We Get Here?</strong></h2>

      <p>
        In a world that rewards speed, success becomes synonymous with output. More hours, more
        hustle, more control. But humans weren’t designed to function like spreadsheets.
      </p>

      <p>And yet, somewhere along the way, we began to:</p>

      <ul>
        <li>1. Celebrate exhaustion like it’s a badge of honor</li>
        <li>2. Measure worth through productivity</li>
        <li>3. Avoid emotional check-ins because they “don’t scale”</li>
      </ul>

      <p>The result? A generation of high-functioning achievers who are emotionally undernourished.</p>
      <br/>
      <h2><strong>What’s at Stake?</strong></h2>

      <p>Ignoring the emotional cost of success comes at a price. You may recognize it as:</p>

      <ul>
        <li>✅ Chronic dissatisfaction, even after big wins</li>
        <li>✅ A short fuse in relationships</li>
        <li>✅ A lack of inspiration despite opportunities</li>
        <li>✅ Low-grade anxiety that follows you everywhere</li>
        <li>✅ A life that looks great on paper—but feels robotic</li>
      </ul>

      <p>
        When the outer world thrives and the inner world dims, something’s off. And deep down, you
        know it.
      </p>
      <br/>
      <h2><strong>Success vs. Fulfillment</strong></h2>

      <p>Let’s be clear: Success is not the enemy. But fulfillment isn’t its guaranteed byproduct.</p>

      <p>Success is a milestone. Fulfillment is a state of being.</p>

      <p>
        You can have the car, the clients, the cash—and still feel like something’s missing. Because
        fulfillment requires a connection to your why. And for many high-performers, that why got
        buried somewhere between quarterly goals and inbox zero.
      </p>
      <br/>
      <h2><strong>What Needs to Change?</strong></h2>

      <p>What if success didn’t require sacrifice? What if thriving externally could coexist with feeling whole internally?</p>

      <p>That shift begins with awareness.</p>

      <ul>
        <li>🧠 The awareness to pause and reflect</li>
        <li>🧭 The awareness to question what really matters</li>
        <li>❤️ The awareness to feel instead of just perform</li>
      </ul>

      <p>These aren’t weaknesses. They’re human recalibrations.</p>
      <br/>
      <h2>Tools for Inner Reconnection</h2>

      <p>
        Reclaiming your inner self doesn’t mean abandoning ambition. It means anchoring it. Here are
        small but profound starting points:
      </p>
      <br/>
      <h3><strong>Ask Better Questions</strong></h3>
      <ul>
        <li>Instead of “What’s next?”, ask “What matters now?”</li>
        <li>Instead of “How do I scale?”, ask “Why do I want to?”</li>
      </ul>
      <br/>
      <h3><strong>Audit Your Energy, Not Just Your Time</strong></h3>
      <p>
        Time management is easy. But energy alignment—knowing what fills vs. drains you—is the real
        unlock.
      </p>
      <br/>
      <h3><strong>Create White Space</strong></h3>
      <p>
        Not for more productivity, but for presence. A morning walk without AirPods. A conversation
        without checking your phone.
      </p>
      <br/>
      <h3><strong>Seek Mentorship Beyond Business</strong></h3>
      <p>
        Find guides or coaches who speak to your whole self, not just your career goals. Emotional
        mastery is a leadership skill.
      </p>
      <br/>
      <h2><strong>You Don’t Need a Crisis to Course-Correct</strong></h2>

      <p>
        Too often, change comes after breakdowns—burnout, health scares, or broken relationships.
        But you don’t have to wait for that. You can make small, intentional shifts now.
      </p>

      <p>Pause.<br />Reconnect.<br />Redefine your definition of “winning.”</p>

      <p>Because what’s the point of success if you’re not there to enjoy it?</p>
    `,
    image: "https://storage.googleapis.com/msgsndr/xQlIEgJuDpymPFH4Fs60/media/689f1c2bc6ba4e1075b0fc68.webp?height=400&width=800&text=Mountain+Climbing+Resilience",
    author: "Andrew Dietz",
    date: "June 5, 2025",
    readTime: "12 min read",
    tags: ["Resilience", "Personal Growth", "Mental Health", "Coping Strategies"],
    likes: 156,
    comments: 31,
  },

  "the-art-of-inner-clarity": {
    title: "The Art of Inner Clarity: The Decisive Edge of High-Stakes Leadership",
    seoTitle: "The Art of Inner Clarity | Leadership & Emotional Awareness",
    seoDescription: "Discover why inner clarity is the foundation of sustainable leadership. Learn practical ways to build emotional awareness and lead with presence.",
    excerpt:
      "Leadership is measured by results, but driven by the inner state. Discover why clarity is your most decisive leadership tool.",
    content: `
      <p>Leadership is often measured by results—growth, performance, scale, influence. But beneath every strong outcome is something less visible and far more decisive: <strong>the inner state of the leader.</strong></p>
      
      <p>In moments of pressure, uncertainty, or high stakes, leaders don’t rise to their strategies—they fall back on their internal clarity. And when that clarity is missing, even the most capable leaders begin to feel reactive, fragmented, and exhausted.</p>

      <p>Inner clarity is not a personal luxury. It is a <strong>leadership necessity.</strong></p>

      <br />
      <h2><strong>Why Leadership Without Clarity Feels Heavy</strong></h2>
      <p>Many leaders are highly skilled, experienced, and intelligent—yet privately overwhelmed. Not because they lack competence, but because they are carrying unresolved emotional noise while trying to lead decisively.</p>
      
      <p>This often shows up as:</p>
      <ul>
        <li>Constant mental overactivity</li>
        <li>Difficulty switching off</li>
        <li>Frustration that surfaces unexpectedly</li>
        <li>A sense of pressure without a clear source</li>
        <li>Feeling responsible for everything, all the time</li>
      </ul>
      
      <p>Leadership becomes something to manage rather than embody. Over time, this creates leaders who function well—but feel disconnected from themselves and others.</p>

      <br />
      <h2><strong>Emotional Awareness Is the Missing Layer</strong></h2>
      <p>Most leadership development focuses on <em>what</em> to do: Strategy, Execution, Communication, and Decision frameworks. Very little attention is given to <strong>how the leader is internally</strong> while doing it.</p>
      
      <p>Emotional awareness bridges that gap. It allows leaders to recognize:</p>
      <ul>
        <li>What they are feeling</li>
        <li>Why they are feeling it</li>
        <li>How it is influencing their behavior and decisions</li>
      </ul>
      <p>This awareness doesn’t slow leaders down—it removes internal friction.</p>

      <br />
      <h2><strong>The Difference Between Reaction and Response</strong></h2>
      <p>One of the clearest indicators of inner clarity is how a leader handles pressure.</p>
      
      <p><strong>Without clarity:</strong></p>
      <ul>
        <li>Feedback feels like a threat</li>
        <li>Delays feel personal</li>
        <li>Conflict feels destabilizing</li>
        <li>Decisions feel heavy and draining</li>
      </ul>

      <p><strong>With clarity:</strong></p>
      <ul>
        <li>Feedback becomes information</li>
        <li>Delays become data</li>
        <li>Conflict becomes a signal</li>
        <li>Decisions feel grounded—even when difficult</li>
      </ul>
      
      <p>The situation may be the same. The internal experience is completely different.</p>

      <br />
      <h2><strong>Why Emotional Suppression Backfires</strong></h2>
      <p>Many leaders were taught—explicitly or implicitly—that emotions are distractions. So they suppress them. But suppressed emotion doesn’t disappear. <strong>It leaks.</strong></p>
      
      <p>It leaks into tone, into impatience, into control, into disengagement, and eventually, into health. Over time, leaders begin to feel disconnected from their own instincts, even though they appear confident on the surface.</p>
      
      <p>Inner clarity is not about indulging emotions. It’s about understanding them so they don’t run the show.</p>

      <br />
      <h2><strong>Clarity Creates Consistency</strong></h2>
      <p>One of the most powerful traits of effective leaders is consistency—not rigidity, but emotional steadiness. Teams trust leaders who don’t change their energy unpredictably or bring unresolved tension into the room.</p>
      
      <p>Inner clarity allows leaders to separate <em>what’s happening around me</em> from <em>what’s happening within me</em>. That separation is what creates composure.</p>

      <br />
      <h2><strong>Practical Ways Leaders Build Inner Clarity</strong></h2>
      <p>Inner clarity isn’t developed through theory. It’s built through simple, repeatable practices that increase self-awareness over time. Here are grounded methods leaders can integrate without changing their lifestyle:</p>
      
      <h3><strong>1. Emotional Labeling</strong></h3>
      <p>Privately name what you’re feeling without judgment: <em>“I’m tense,” “I’m irritated,” “I’m uncertain.”</em> This immediately reduces emotional intensity and restores perspective.</p>
      
      <h3><strong>2. Pattern Recognition</strong></h3>
      <p>Instead of asking, “Why did this happen?” ask: <strong>“When does this usually show up?”</strong> Patterns reveal more than isolated events.</p>
      
      <h3><strong>3. Micro-Pauses Before Action</strong></h3>
      <p>Before responding to emails, messages, or conflict: <strong>Pause. Breathe. Then respond.</strong> This small gap is where clarity lives.</p>
      
      <h3><strong>4. Stillness as Maintenance</strong></h3>
      <p>Ten minutes a day without stimulation allows unresolved thoughts to surface and settle. This isn’t meditation for performance—it’s <strong>mental hygiene.</strong></p>
      
      <h3><strong>5. Weekly Alignment Check</strong></h3>
      <p>Ask yourself: What felt aligned this week? What felt forced? What did I avoid? Clarity increases when avoidance decreases.</p>

      <br />
      <h2><strong>From Control to Presence</strong></h2>
      <p>Many leaders rely on control because it feels safe. But control requires constant effort. <strong>Presence does not.</strong></p>
      
      <p>When leaders operate from inner clarity, they don’t over-explain, they don’t rush to fill silence, and they don’t carry unnecessary tension. Their presence becomes stabilizing. Rooms feel calmer, conversations feel clearer, and decisions feel cleaner.</p>

      <br />
      <h2><strong>Why Teams Respond Differently to Clear Leaders</strong></h2>
      <p>Teams are highly sensitive to a leader’s internal state—even when it’s unspoken. Leaders with clarity communicate emotionally: <em>“I’m grounded,” “I’m thinking clearly,” “I’m not reactive.”</em></p>
      <p>That signal creates <strong>trust</strong>. And trust is what allows teams to take ownership, speak honestly, and perform sustainably.</p>

      <br />
      <h2><strong>Clarity Sustains Leaders Long-Term</strong></h2>
      <p>Leadership is not a sprint. Without inner clarity, even success becomes exhausting. With clarity, decision fatigue reduces, recovery time shortens, and confidence becomes quieter but stronger. Leaders stop chasing momentum and start directing it.</p>

      <br />
      <h2><strong>The Deeper Shift</strong></h2>
      <p>Inner clarity changes the relationship leaders have with themselves. They stop second-guessing constantly and carrying emotional residue from every interaction. They start trusting their internal signals and leading with steadiness.</p>
      
      <p>This is not about becoming someone new; it’s about returning to a state where leadership feels clean, intentional, and sustainable.</p>

      <br />
      <h2><strong>Final Thought</strong></h2>
      <p>The future of leadership does not belong to the loudest, fastest, or most aggressive. It belongs to those who can think clearly under pressure, stay present in complexity, and lead without losing themselves in the process.</p>
      <p><strong>Inner clarity is the foundation of leadership that lasts.</strong></p>
    `,
    image: "https://storage.googleapis.com/msgsndr/xQlIEgJuDpymPFH4Fs60/media/689f1c2b5bdfcfa148e32887.webp?height=400&width=800&text=Leadership+Clarity",
    author: "Andrew Dietz",
    date: "July 15, 2025",
    readTime: "10 min read",
    tags: ["Leadership", "Clarity", "Emotional Intelligence", "Performance"],
    likes: 184,
    comments: 42,
  },
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  const canonicalUrl = `https://www.andrew-dietz.com/blog/${slug}`

  // Use custom SEO title and description if available, otherwise fall back to defaults
  const seoTitle = (post as any).seoTitle || post.title
  const seoDescription = (post as any).seoDescription || post.excerpt || post.title

  return {
    title: `${seoTitle} | Andrew Dietz Blog`,
    description: seoDescription,
    keywords: post.tags?.join(', ') || undefined,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 800,
          height: 400,
          alt: post.title,
        },
      ],
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  // Use custom SEO description for schema if available
  const schemaDescription = (post as any).seoDescription || post.excerpt || post.title

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": schemaDescription,
    "image": {
      "@type": "ImageObject",
      "url": post.image,
      "width": 800,
      "height": 400
    },
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://www.andrew-dietz.com/about"
    },
    "publisher": {
      "@type": "Person",
      "name": "Andrew Dietz",
      "url": "https://www.andrew-dietz.com/"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.andrew-dietz.com/blog/${slug}`
    },
    "articleSection": "Personal Development",
    "keywords": post.tags?.join(', ') || undefined,
    "wordCount": post.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
    "timeRequired": post.readTime
  }

  return (
    <main className="">
      <Script
        id={`blog-post-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Hero Section */}
      <section
        className="relative py-24 text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-blue-200">
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              {post.date}
            </div>
            <div>{post.readTime}</div>
          </div>
        </div>
      </section>




      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-gray-900 prose-a:text-[#191970] hover:prose-a:text-[#0f0f4d]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Engagement Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-[#191970] transition-colors">
                      <Heart size={20} />
                      <span>{post.likes} likes</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-[#191970] transition-colors">
                      <MessageCircle size={20} />
                      <span>{post.comments} comments</span>
                    </button>
                  </div>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-[#191970] transition-colors">
                    <Share2 size={20} />
                    <span>Share</span>
                  </button>
                </div>
              </div>


            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* CTA Card */}
                <div className="bg-[#191970] text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Ready to Transform Your Life?</h3>
                  <p className="mb-4 text-blue-100">
                    Awaken your Purpose Within is a transformative experience for high-achieving professionals who want to redefine success, wealth and relationships.
                  </p>
                  <Link href={"/workshop"}>
                    <Button className="w-full bg-white text-[#191970] hover:bg-gray-100">Book Your Seat</Button>
                  </Link>
                </div>

                {/* Related Posts */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Related Posts</h3>
                  <div className="space-y-4">
                    {Object.entries(blogPosts)
                      .filter(([key]) => key !== slug)
                      .slice(0, 3)
                      .map(([key, relatedPost]) => (
                        <Link
                          key={key}
                          href={`/blog/${key}`}
                          className="block p-4 border border-gray-200 rounded-lg hover:border-[#191970] transition-colors"
                        >
                          <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{relatedPost.title}</h4>
                          <p className="text-sm text-gray-600">{relatedPost.readTime}</p>
                        </Link>
                      ))}
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-[#191970] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Action?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't just read about transformation—experience it. Join our community of growth-minded individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/workshop"}>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#191970] text-lg px-8 py-3 bg-transparent"
              >
                Join Next Webinar
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
