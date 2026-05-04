import { ArticleLayout, Section, P, InfoTable, BulletList, FAQ, Callout } from "@/components/Layout";

export default function CaffeineCalculatorPage() {
  return (
    <ArticleLayout
      title="Caffeine Cutoff Calculator: Estimate When to Stop Coffee Before Bed"
      metaDescription="Estimate your caffeine cutoff time based on bedtime, sensitivity, and caffeine timing. Learn how coffee, tea, energy drinks, and hidden caffeine can affect sleep."
      lastUpdated="May 2026"
    >
      <Section title="How caffeine affects sleep">
        <P>
          Caffeine can be useful for focus and alertness, but it can also make sleep harder when the timing or dose is wrong. NightOwl's Caffeine Cutoff Calculator estimates when to stop caffeine before bed based on your bedtime and sensitivity. It is a planning tool, not a medical test.
        </P>
        <P>
          For most adults, the FDA cites 400 mg of caffeine per day as an amount not generally associated with negative effects, but the FDA also notes that sensitivity and elimination speed vary from person to person. That is why two people can drink the same afternoon coffee and have very different nights.
        </P>
      </Section>

      <Section title="What the caffeine calculator estimates">
        <P>
          The calculator does not know exactly how much caffeine is in your bloodstream. It estimates a cutoff window by combining:
        </P>
        <BulletList
          items={[
            "Your target bedtime",
            "A conservative caffeine buffer",
            "Your self-rated sensitivity",
            "The idea that caffeine effects can last for hours",
          ]}
        />
        <Callout>
          A 2013 Journal of Clinical Sleep Medicine study found that 400 mg of caffeine taken at bedtime, three hours before bedtime, or six hours before bedtime significantly disrupted sleep compared with placebo, supporting the common advice to avoid substantial caffeine for at least six hours before bed.
        </Callout>
      </Section>

      <Section title="Caffeine sensitivity examples">
        <P>Use these examples to choose a starting setting.</P>
        <InfoTable
          headers={["User profile", "Suggested cutoff", "Why"]}
          rows={[
            ["Low sensitivity", "6 hours before bed", "You rarely notice sleep effects from caffeine"],
            ["Average sensitivity", "8 hours before bed", "A safer default for many people"],
            ["High sensitivity", "10–12 hours before bed", "You notice sleep, anxiety, heart-racing, or wakefulness effects"],
            ["Troubleshooting insomnia", "No caffeine after lunch", "Simplifies the experiment"],
          ]}
        />
        <P>
          If your target bedtime is 10:30 PM, an 8-hour cutoff means your last caffeine would be around 2:30 PM. If you are highly sensitive, you may want a noon or lunchtime cutoff.
        </P>
      </Section>

      <Section title="Hidden caffeine sources to count">
        <P>Coffee is not the only source. Include:</P>
        <BulletList
          items={[
            "Espresso drinks and cold brew",
            "Black tea, green tea, and matcha",
            "Energy drinks",
            "Cola and other caffeinated sodas",
            "Pre-workout powders",
            "Caffeinated gum or gels",
            "Chocolate and cocoa",
            "Some headache, cold, or alertness products",
          ]}
        />
        <Callout>
          The FDA advises being aware of caffeine levels in your diet and watching for signs that your intake may be too much, especially because body weight, medications, medical conditions, and sensitivity can change how caffeine affects you.
        </Callout>
      </Section>

      <Section title="Example caffeine cutoff times">
        <InfoTable
          headers={["Target bedtime", "6-hour cutoff", "8-hour cutoff", "10-hour cutoff"]}
          rows={[
            ["9:30 PM", "3:30 PM", "1:30 PM", "11:30 AM"],
            ["10:30 PM", "4:30 PM", "2:30 PM", "12:30 PM"],
            ["11:30 PM", "5:30 PM", "3:30 PM", "1:30 PM"],
            ["12:30 AM", "6:30 PM", "4:30 PM", "2:30 PM"],
          ]}
        />
        <P>
          If you are trying to improve sleep quickly, start with the 8-hour cutoff for one week. If you still have trouble falling asleep or staying asleep, test the 10-hour cutoff the next week.
        </P>
      </Section>

      <Section title="What to do instead of late caffeine">
        <P>
          If you are sleepy late in the day, caffeine may solve the next hour while hurting the next morning. Try:
        </P>
        <BulletList
          items={[
            "A 10–20 minute nap earlier in the afternoon",
            "A walk outside or bright light exposure",
            "Water and a small snack if you skipped meals",
            "Moving demanding work earlier in the day",
            "An earlier bedtime on recovery nights",
          ]}
        />
        <Callout>
          If you are drowsy while driving or doing safety-critical work, treat it seriously. CDC/NIOSH warns that you cannot reliably force yourself to stay awake when sleep pressure is high.
        </Callout>
      </Section>

      <FAQ
        items={[
          {
            q: "Does caffeine affect everyone the same way?",
            a: "No. The FDA notes wide variation in sensitivity and elimination speed. Your cutoff should be based on your own sleep patterns.",
          },
          {
            q: "Is 400 mg of caffeine safe?",
            a: "For most adults, the FDA cites 400 mg per day as an amount not generally associated with negative effects, but that does not mean 400 mg is ideal for sleep or right for every person.",
          },
          {
            q: "Is afternoon tea okay?",
            a: "Maybe. Tea often contains less caffeine than coffee, but it can still affect sensitive sleepers. Count it during a sleep experiment.",
          },
        ]}
      />

      <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 text-sm text-slate-400">
        <p className="font-semibold text-slate-300 mb-2">Sources</p>
        <ul className="space-y-1">
          <li>FDA — Caffeine daily limits and individual variation guidance</li>
          <li>Journal of Clinical Sleep Medicine (2013) — Caffeine timing and sleep disruption study</li>
          <li>CDC/NIOSH — Fatigue countermeasures and drowsy driving</li>
        </ul>
      </div>
    </ArticleLayout>
  );
}
