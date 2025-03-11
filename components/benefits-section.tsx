import Image from "next/image";

export default function BenefitsSection() {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-background"
      id="benefits"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Benefits
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Why Balance Matters
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Addressing bilateral movement imbalances can significantly improve
              your training outcomes and reduce injury risk.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="mx-auto flex items-center justify-center order-2 lg:order-1">
            <div className="relative h-[400px] w-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Comparison of balanced vs. imbalanced movement patterns"
                className="object-cover rounded-lg shadow-xl"
                fill
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Enhanced Performance</h3>
                <p className="text-muted-foreground">
                  Balanced bilateral movement patterns lead to more efficient
                  force production, better coordination, and ultimately improved
                  strength gains and athletic performance.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Injury Prevention</h3>
                <p className="text-muted-foreground">
                  Addressing movement imbalances helps distribute load more
                  evenly across your body, reducing overcompensation and
                  lowering the risk of overuse injuries and joint stress.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Faster Recovery</h3>
                <p className="text-muted-foreground">
                  Balanced training promotes more symmetrical muscle development
                  and joint loading, which can accelerate recovery and reduce
                  post-exercise soreness.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Long-term Health</h3>
                <p className="text-muted-foreground">
                  Maintaining bilateral movement balance contributes to better
                  posture, joint health, and functional movement patterns that
                  support daily activities and long-term mobility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
