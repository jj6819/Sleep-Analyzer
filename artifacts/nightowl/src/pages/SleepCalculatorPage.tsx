import { ArticleLayout, Section, P, InfoTable, BulletList, FAQ, Callout } from "@/components/Layout";

export default function SleepCalculatorPage() {
  return (
    <ArticleLayout
      title="Sleep Calculator: Bedtime, Wake Time, Sleep Cycles & Realistic Sleep Windows"
      metaDescription="Plan a realistic bedtime or wake-up time using sleep duration, sleep cycles, sleep latency, and a flexible wake window. Includes examples, limitations, and sleep-planning tips."
      lastUpdated="May 2026"
    >
      <Section title="How NightOwl works">
        <P>
          NightOwl is a practical sleep calculator for planning when to go to bed, when to wake up, or when to nap. Instead of pretending there is one perfect minute to fall asleep or wake up, it combines four real-world inputs: your target wake time, estimated sleep duration, sleep latency, and a flexible wake window.
        </P>
        <P>
          Most adults need at least seven hours of sleep per day, and many do best with seven to nine hours, depending on age, health, recovery needs, and schedule. The CDC lists seven or more hours as the daily recommendation for adults ages 18–60, while the NHLBI notes that experts generally recommend seven to nine hours for adults. NightOwl uses those ranges as planning context, then lets you adjust the calculator to match your life.
        </P>
      </Section>

      <Section title="How the sleep calculator works">
        <P>
          The calculator starts with a simple idea: sleep planning should work backward from the part of your schedule that is least flexible.
        </P>
        <P>
          If your wake-up time is fixed, NightOwl subtracts estimated sleep time and your fall-asleep buffer to suggest bedtime windows. If your bedtime is fixed, it adds your estimated sleep time and latency to suggest wake-up windows. This creates a plan that is easier to use than a single exact time.
        </P>
        <InfoTable
          headers={["Input", "What it means", "Why it matters"]}
          rows={[
            ["Wake time or bedtime", "Your anchor time", "Most people have one side of the schedule that is less flexible"],
            ["Sleep cycles", "Estimated blocks of sleep", "Sleep cycles often repeat across the night, but they vary by person"],
            ["Sleep latency", "Time it takes to fall asleep", "Your body does not start sleeping the moment you get in bed"],
            ["Wake window", "A flexible range", "Real life rarely lands on the exact minute"],
          ]}
        />
        <P>
          Sleep cycles are a useful estimate, not a guarantee. The NHLBI explains that sleep cycles through REM and non-REM phases and that the cycle starts over every 80–100 minutes, usually four to six times per night. NightOwl defaults near the common 90-minute estimate but lets you adjust the cycle length if your experience is different.
        </P>
      </Section>

      <Section title="Real bedtime examples">
        <P>
          Here are example bedtime plans for a 6:30 AM wake-up. These assume a 20-minute sleep latency and a 10-minute wake window.
        </P>
        <InfoTable
          headers={["Goal", "Estimated sleep", "Lights-out target", "Practical bedtime window", "Best for"]}
          rows={[
            ["Short night", "6 hours", "12:10 AM", "12:00–12:20 AM", "Occasional unavoidable late night"],
            ["Standard weekday", "7.5 hours", "10:40 PM", "10:30–10:50 PM", "Many adults on work nights"],
            ["Recovery night", "9 hours", "9:10 PM", "9:00–9:20 PM", "After sleep debt, illness, or heavy training"],
          ]}
        />
        <Callout>
          The short-night option is not a long-term recommendation. It is a fallback when life is messy. Repeatedly sleeping less than seven hours can leave many adults short on sleep; the CDC classifies less than seven hours for adults as insufficient sleep.
        </Callout>
      </Section>

      <Section title="Should you choose 4, 5, or 6 sleep cycles?">
        <P>
          Use the number of cycles as a planning shortcut, not as permission to undersleep.
        </P>
        <BulletList
          items={[
            "Four cycles is usually a backup plan. It may line up with roughly six hours of sleep, but many adults will not feel or perform their best on this amount regularly.",
            "Five cycles is a practical weekday compromise for many adults because it gives about 7.5 hours of sleep before adding latency.",
            "Six cycles gives about nine hours of sleep and can be helpful when you are recovering from several short nights, illness, training load, travel, or a stressful week.",
          ]}
        />
        <Callout>
          A useful rule: choose the longest realistic option you can repeat. Occasional perfect timing matters less than enough total sleep across the week.
        </Callout>
      </Section>

      <Section title="When a calculator is not enough">
        <P>
          A sleep calculator can help with timing, but it cannot diagnose sleep disorders or explain every cause of fatigue. If you regularly feel exhausted despite enough time in bed, wake up gasping, snore heavily, wake with morning headaches, or feel sleepy while driving, talk with a healthcare professional. The CDC also advises talking to a healthcare provider if you have problems sleeping.
        </P>
        <Callout>
          For immediate safety, do not rely on willpower if you are drowsy while driving. CDC/NIOSH training warns that you cannot reliably force yourself to stay awake when sleep pressure is high and recommends stopping driving as soon as possible if drowsiness symptoms occur.
        </Callout>
      </Section>

      <FAQ
        items={[
          {
            q: "Why does NightOwl use a bedtime window instead of one exact time?",
            a: "Because sleep timing is approximate. Your sleep latency changes with stress, caffeine, light exposure, illness, and schedule. A 10–15 minute window keeps the plan structured without making users feel like they 'failed' if they miss one exact minute.",
          },
          {
            q: "Is waking between cycles guaranteed to prevent grogginess?",
            a: "No. It may help, but sleep cycles vary. Grogginess can also come from too little sleep, waking during deep sleep, alcohol, late caffeine, inconsistent schedules, or poor sleep quality.",
          },
          {
            q: "Should I always pick the earliest bedtime?",
            a: "Pick the earliest bedtime that is realistic. A bedtime you repeat four or five nights a week is more valuable than an ideal bedtime you only manage once.",
          },
        ]}
      />

      <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 text-sm text-slate-400">
        <p className="font-semibold text-slate-300 mb-2">Sources</p>
        <ul className="space-y-1">
          <li>CDC — Adult sleep recommendations (ages 18–60)</li>
          <li>NHLBI — Sleep cycles, REM and non-REM sleep stages</li>
          <li>CDC/NIOSH — Drowsy driving safety guidance</li>
        </ul>
      </div>
    </ArticleLayout>
  );
}
