import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TeamSection() {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 mx-auto max-w-7xl bg-muted"
      id="team"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
              Our Team
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Meet the Team
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <Card className="overflow-hidden">
            <div className="relative h-72 w-full">
              <Image
                src="https://media.licdn.com/dms/image/v2/D5603AQFzwzJE5gQHEA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720570375185?e=1747267200&v=beta&t=ECU8xNg5w847lh0YoRkgeZSlPzqDowQH3XXZd9xkoVo"
                alt="Team member portrait"
                className="object-cover"
                fill
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle>Brennan Benson</CardTitle>
              <CardDescription>Computer Science</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground">
                B.S. in Computer Science with a minor in Data Science and
                Engineering from Northwestern University.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-72 w-full">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4E03AQGlzK35Yp-WFA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693442169515?e=1747267200&v=beta&t=NC5tniRqylH88lsX2jliF-G6g84HyaopAgvACaeAl7s"
                alt="Team member portrait"
                className="object-cover"
                fill
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle>Isabel Gonzalez</CardTitle>
              <CardDescription>Computer Science</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground">
                B.A. in Computer Science with a certificate in Digital Product
                Development from Northwestern University.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-72 w-full">
              <Image
                src="https://media.licdn.com/dms/image/v2/D5603AQE38ETbcUax5A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719047048784?e=1747267200&v=beta&t=_EJv-I8TpVLGdksTNixiyCt8-7_GjBX8lWvBte4wakQ"
                alt="Team member portrait"
                className="object-cover"
                fill
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle>Jason Lu</CardTitle>
              <CardDescription>Computer Science</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground">
                B.S. and M.S. in Computer Science with a minor in Data Science
                and Engineering from Northwestern University.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
