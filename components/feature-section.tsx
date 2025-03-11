import { BarChart2, Brain, Dumbbell, Smartphone, Wand2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FeatureSection() {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-background"
      id="features"
    >
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Advanced Technology for Better Training
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our system combines cutting-edge hardware with intelligent
              software to transform your strength training experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Dumbbell className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">Precision Sensing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-muted-foreground">
                High-precision IMU sensors capture detailed motion data from
                both wrists during exercise, detecting even subtle imbalances in
                movement patterns.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Brain className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">AI Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-muted-foreground">
                Advanced machine learning algorithms analyze movement patterns
                in real-time, identifying imbalances and providing actionable
                feedback.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Smartphone className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">Mobile Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-muted-foreground">
                Seamlessly connect with our mobile app to receive real-time
                feedback, track progress, and access personalized training
                recommendations.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <BarChart2 className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">Comprehensive Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-muted-foreground">
                Detailed performance metrics and trend analysis help you
                understand your progress and identify areas for improvement over
                time.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Wand2 className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">Personalized Guidance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-muted-foreground">
                Receive customized exercise recommendations and form corrections
                based on your unique movement patterns and training goals.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-primary"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <CardTitle className="text-xl">Coach Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-muted-foreground">
                Share your data with personal trainers or physical therapists to
                enhance remote coaching and rehabilitation programs.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
