import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import Typing from "@/app/assets/rat_typing.png"

export default function Home() {
    return (
      <div className="grid justify-center">
        aaaaaaaa
        <Card className="w-[800px] grid justify-center">
            <CardHeader>
                <CardTitle>{"Hello I'm Riley"}</CardTitle>
                <CardDescription>
                    rats
                </CardDescription>
            </CardHeader>
            <Separator className="my-4"/>
            <Image width={200} height={200} src={Typing} alt="rat typing"></Image>
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
  