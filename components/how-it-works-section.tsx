import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
      id="how-it-works"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
              Technology
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              How It Works
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our innovative system uses wrist-mounted IMU sensors to detect and
              analyze bilateral movement patterns during strength training.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-medium">Sensor Attachment</h3>
                  <p className="text-muted-foreground">
                    Secure the lightweight IMU sensors to both wrists using
                    comfortable, adjustable straps. The sensors contain
                    accelerometers, gyroscopes, and magnetometers to capture
                    precise motion data.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-medium">Data Collection</h3>
                  <p className="text-muted-foreground">
                    As you perform strength training exercises, the sensors
                    collect high-frequency motion data from both wrists,
                    capturing the subtle differences in movement patterns
                    between your left and right sides.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-medium">Real-time Analysis</h3>
                  <p className="text-muted-foreground">
                    Our proprietary algorithms process the sensor data in
                    real-time, analyzing movement patterns, velocity,
                    acceleration, and range of motion to identify bilateral
                    imbalances.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  4
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-medium">Feedback & Guidance</h3>
                  <p className="text-muted-foreground">
                    Receive immediate feedback through the mobile app, with
                    visual and audio cues to help you correct imbalances during
                    your workout, promoting more symmetrical movement patterns.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="mx-auto flex items-center justify-center">
            <div className="relative h-[400px] w-[400px] lg:h-[500px] lg:w-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Diagram showing how the IMU sensors work"
                className="object-cover rounded-lg shadow-xl"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
