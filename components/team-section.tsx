import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TeamSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="team">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Our Team</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Meet the Experts</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our interdisciplinary team combines expertise in biomechanics, sensor technology, and exercise science.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <Card className="overflow-hidden">
            <div className="relative h-60 w-full">
              <Image
                src="/placeholder.svg?height=240&width=320"
                alt="Team member portrait"
                className="object-cover"
                fill
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle>Dr. Sarah Chen</CardTitle>
              <CardDescription>Biomechanics Researcher</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground">
                PhD in Biomechanics with 10+ years of research experience in movement analysis and motor control.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-60 w-full">
              <Image
                src="/placeholder.svg?height=240&width=320"
                alt="Team member portrait"
                className="object-cover"
                fill
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle>Michael Rodriguez</CardTitle>
              <CardDescription>Sensor Technology Engineer</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground">
                Specializes in IMU sensor design and signal processing with previous experience at leading wearable tech
                companies.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-60 w-full">
              <Image
                src="/placeholder.svg?height=240&width=320"
                alt="Team member portrait"
                className="object-cover"
                fill
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle>Dr. James Wilson</CardTitle>
              <CardDescription>Exercise Physiologist</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground">
                Expert in strength training methodology and exercise prescription with extensive experience working with
                athletes.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-60 w-full">
              <Image
                src="/placeholder.svg?height=240&width=320"
                alt="Team member portrait"
                className="object-cover"
                fill
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle>Aisha Patel</CardTitle>
              <CardDescription>Software Developer</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground">
                Full-stack developer specializing in real-time data processing and mobile application development.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-60 w-full">
              <Image
                src="/placeholder.svg?height=240&width=320"
                alt="Team member portrait"
                className="object-cover"
                fill
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle>Dr. Robert Kim</CardTitle>
              <CardDescription>Physical Therapist</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground">
                Brings clinical expertise in rehabilitation and movement correction to inform our feedback algorithms.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-60 w-full">
              <Image
                src="/placeholder.svg?height=240&width=320"
                alt="Team member portrait"
                className="object-cover"
                fill
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle>Emma Johnson</CardTitle>
              <CardDescription>UX/UI Designer</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground">
                Creates intuitive user experiences that make complex movement data accessible and actionable.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

