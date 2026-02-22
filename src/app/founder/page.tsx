export default function FounderPage() {
  return (
    <main className="container-pad py-24 text-foreground md:py-32">
      <div className="max-w-4xl space-y-10">
        <div className="space-y-4">
          <h1 className="founder-heading-shell font-display text-4xl tracking-tight sm:text-6xl">
            BUILD. CREATE. INSPIRE.
            <span aria-hidden="true" className="founder-strike-line founder-strike-line-1" />
            <span aria-hidden="true" className="founder-strike-line founder-strike-line-2" />
            <span aria-hidden="true" className="founder-strike-line founder-strike-line-3" />
            <span aria-hidden="true" className="founder-ewwww-block founder-ewwww-block-1">
              EWWWW
            </span>
            <span aria-hidden="true" className="founder-ewwww-block founder-ewwww-block-2">
              EWWWW
            </span>
            <span aria-hidden="true" className="founder-ewwww-block founder-ewwww-block-3">
              EWWWW
            </span>
          </h1>
        </div>

        <hr className="border-border/70" />

        <div className="max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p className="font-display text-2xl text-foreground">Haha.</p>
          <p>Hi.</p>
          <p>Well that was dramatic...</p>
          <p>
            I know every brand website is supposed to sound modern, sleek, clean and blah blah
            blah.
          </p>
          <p>But ya know - I don&apos;t really care about all that.</p>

          <p className="pt-2 font-display text-2xl text-foreground">So then... Who am I</p>
          <p>I&apos;m just a guy who likes making things that actually work.</p>
          <p>
            Honestly, I&apos;m kinda sick of all the fluffed-up brands promising greatness and
            delivering something that barely functions.
          </p>
          <p>I care about doing things properly.</p>
          <p>If I build something, I want it to work.</p>
          <p>I want it to feel good to use.</p>
          <p>And of course, I want it to last.</p>

          <p className="pt-2 font-display text-2xl text-foreground">
            Okayyyy but why should we care?
          </p>
          <p>Honestly, I build because I enjoy it.</p>
          <p>It feels good to take something from idea -&gt; working thing.</p>
          <p>If you like using what I build, that&apos;s awesome.</p>
          <p>If you don&apos;t, that&apos;s okay too.</p>
          <p>I&apos;m always open to feedback.</p>
          <p>I&apos;d rather improve something than pretend it&apos;s perfect.</p>
          <p>That&apos;s pretty much it.</p>

          <p className="pt-2 font-display text-xl text-foreground md:text-2xl">Why do you build?</p>
          <p>I build because it&apos;s fun.</p>

          <p className="pt-2 font-display text-xl text-foreground md:text-2xl">
            What do you care about?
          </p>
          <p>I care about building something that is good.</p>

          <p className="pt-2 font-display text-xl text-foreground md:text-2xl">What drives you?</p>
          <p>Well, I want to show people...</p>

          <p className="pt-2 font-display text-xl text-foreground md:text-2xl">
            Where are you headed?
          </p>
        </div>
      </div>

      <style>{`
        .founder-heading-shell {
          position: relative;
          display: inline-block;
          z-index: 1;
        }

        .founder-strike-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 0.16em;
          border-radius: 9999px;
          background: linear-gradient(90deg, rgba(34, 211, 238, 1), rgba(34, 211, 238, 0.88));
          transform-origin: left center;
          transform: scaleX(0);
          animation: founder-strike-draw 35s linear infinite;
        }

        .founder-strike-line-1 {
          top: 25%;
        }

        .founder-strike-line-2 {
          top: 50%;
          animation-delay: 0.7s;
        }

        .founder-strike-line-3 {
          top: 75%;
          animation-delay: 1.4s;
        }

        .founder-ewwww-block {
          position: absolute;
          left: -7.5rem;
          transform: translateY(-50%);
          padding: 0.16em 0.5em;
          border-radius: 0.2em;
          background: #22d3ee;
          color: #061014;
          font-size: 0.28em;
          font-weight: 900;
          letter-spacing: 0.12em;
          line-height: 1;
          box-shadow: 0 0 22px rgba(34, 211, 238, 0.45);
          animation: founder-ewwww-pass 35s linear infinite;
          z-index: 2;
        }

        .founder-ewwww-block-1 {
          top: 25%;
        }

        .founder-ewwww-block-2 {
          top: 50%;
          animation-delay: 0.7s;
        }

        .founder-ewwww-block-3 {
          top: 75%;
          animation-delay: 1.4s;
        }

        @keyframes founder-strike-draw {
          0%,
          2% {
            transform: scaleX(0);
          }
          14.3%,
          100% {
            transform: scaleX(1);
          }
        }

        @keyframes founder-ewwww-pass {
          0% {
            left: -7.5rem;
          }
          2% {
            left: -7.5rem;
          }
          14.3%,
          100% {
            left: calc(100% + 0.5rem);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .founder-strike-line,
          .founder-ewwww-block {
            animation: none;
          }

          .founder-strike-line {
            transform: scaleX(1);
          }

          .founder-ewwww-block {
            left: calc(100% + 0.5rem);
          }
        }
      `}</style>
    </main>
  );
}
