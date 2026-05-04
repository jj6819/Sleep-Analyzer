import { ArticleLayout, Section, P, InfoTable, BulletList, FAQ, Callout } from "@/components/Layout";

export default function SleepLatencyPage() {
  return (
    <ArticleLayout
      title="Sleep Latency: How Long It Takes to Fall Asleep & How to Use It"
      metaDescription="Learn what sleep latency means, how to estimate your fall-asleep time, how it affects sleep calculators, and what to do when latency is too short or too long."
      lastUpdated="May 2026"
    >
      <Section title="What is sleep latency?">
        <P>
          Sleep latency is the time between trying to sleep and actually falling asleep. It is one of the most important settings in any bedtime calculator because your sleep cycle does not begin the second your head touches the pillow.
        </P>
        <P>
          If you plan for 7.5 hours of sleep but spend 30 minutes awake in bed, your real sleep time is closer to seven hours. That difference can change how you feel in the morning.
        </P>
      </Section>

      <Section title="How to estimate your sleep latency">
        <P>
          Do not judge it from one stressful night. Track it for five to seven nights and use the average.
        </P>
        <InfoTable
          headers={["Night", "Got into bed", "Tried to sleep", "Estimated sleep time", "Latency"]}
          rows={[
            ["Monday", "10:30 PM", "10:45 PM", "11:05 PM", "20 min"],
            ["Tuesday", "10:40 PM", "10:50 PM", "11:30 PM", "40 min"],
            ["Wednesday", "10:25 PM", "10:40 PM", "10:55 PM", "15 min"],
          ]}
        />
        <Callout>
          Use "tried to sleep," not "got into bed," because many people read, scroll, or watch videos before actually attempting sleep.
        </Callout>
      </Section>

      <Section title="What latency setting should you use in NightOwl?">
        <InfoTable
          headers={["Your pattern", "Suggested setting", "What it may mean"]}
          rows={[
            ["You fall asleep almost immediately", "5–10 minutes", "You may be very sleepy or sleep-deprived"],
            ["You usually settle normally", "10–20 minutes", "Common planning range for many users"],
            ["You need a long wind-down", "20–30 minutes", "Add buffer and improve routine consistency"],
            ["You often need 30+ minutes", "30+ minutes", "Consider sleep habits and possible insomnia patterns"],
          ]}
        />
        <Callout>
          CDC/NIOSH describes prolonged sleep-onset latency as needing 30 minutes or more to go from full wakefulness to sleep at bedtime. If this is common for you and causes daytime problems, a calculator setting can help with planning, but it does not solve the underlying reason.
        </Callout>
      </Section>

      <Section title="Why sleep latency changes from night to night">
        <P>Your fall-asleep time can change because of:</P>
        <BulletList
          items={[
            "Late caffeine",
            "Alcohol close to bed",
            "Stress or rumination",
            "Bright light at night",
            "Irregular wake times",
            "Long or late naps",
            "Heavy meals close to bed",
            "Pain, illness, or medication changes",
            "Shift work or travel",
          ]}
        />
        <P>
          This is why NightOwl lets you adjust latency. A student during finals, a parent with a newborn, and a shift worker coming off nights may all need different settings.
        </P>
      </Section>

      <Section title="Example: why latency changes the recommended bedtime">
        <P>Assume a 6:30 AM wake-up and a 7.5-hour sleep target.</P>
        <InfoTable
          headers={["Sleep latency", "Lights-out target", "Why it matters"]}
          rows={[
            ["5 minutes", "10:55 PM", "Works for fast sleepers"],
            ["20 minutes", "10:40 PM", "More realistic default for many people"],
            ["45 minutes", "10:15 PM", "Needed if you often lie awake"],
          ]}
        />
        <P>
          If you set latency too low, you may think you planned 7.5 hours but actually gave yourself less. If you set it too high, the plan may become unrealistic and too early.
        </P>
      </Section>

      <Section title="Is short or long latency a problem?">
        <P>
          <strong className="text-white">Short latency:</strong> Falling asleep quickly can be normal. But if you fall asleep the moment you sit down, unintentionally doze during the day, or feel dangerously sleepy while driving, it may signal sleep deprivation or another issue.
        </P>
        <Callout>
          CDC/NIOSH warns that high sleep pressure can make it unsafe to keep driving and recommends stopping as soon as possible when drowsiness symptoms occur.
        </Callout>
        <P>
          <strong className="text-white">Long latency:</strong> One long-latency night can happen after caffeine, stress, travel, or an unusual schedule. But if you regularly need more than 30 minutes to fall asleep and it affects your day, consider a deeper sleep routine review or a conversation with a healthcare professional.
        </P>
      </Section>

      <FAQ
        items={[
          {
            q: "Should I include scrolling time in sleep latency?",
            a: "No. Sleep latency starts when you are actually trying to sleep. If you get in bed at 10:00 but scroll until 10:45, your latency starts around 10:45.",
          },
          {
            q: "Should I use the same latency every night?",
            a: "Start with your average. If weekdays and weekends are very different, use different settings for each plan.",
          },
          {
            q: "Can a calculator reduce sleep latency?",
            a: "Indirectly. A calculator can make your schedule more realistic, but reducing latency usually requires routine changes such as earlier caffeine cutoff, dimmer evenings, consistent wake time, and a calmer wind-down.",
          },
        ]}
      />

      <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 text-sm text-slate-400">
        <p className="font-semibold text-slate-300 mb-2">Sources</p>
        <ul className="space-y-1">
          <li>CDC/NIOSH — Sleep-onset latency definition and drowsy driving safety</li>
        </ul>
      </div>
    </ArticleLayout>
  );
}
