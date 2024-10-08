import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Image from "next/image"
import Chip from "@/app/assets/chip_rat.jpg"

export default function Home() {
    return (
      <div>
        aaaaaaaa
        <Card>
            <CardHeader>
                <CardTitle>Hello I'm Riley</CardTitle>
                <CardDescription>
                    rats
                </CardDescription>
            </CardHeader>
            <Image width={500} height={500} src={Chip} alt="chip rat chip rat chip rat chip rat"></Image>
            <CardContent>
                <div>
                    <p className="font-bold">Name:</p> Riley
                </div>
                <div>
                    <p className="font-bold">Major:</p> Information Systems
                </div>
                <div>
                    <p className="font-bold">Hobbies:</p> rat
                </div>
            </CardContent>
        </Card>
      </div>
    );
  }
  