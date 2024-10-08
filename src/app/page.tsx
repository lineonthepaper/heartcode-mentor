"use client"

import { CardHeader, Card, CardTitle, CardDescription } from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import Drugs from "@/app/assets/drugs.jpeg";
import Rat_Meds from "@/app/assets/rat_meds.jpg"
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <div className="flex flex-col justify-center min-h-dvh text-center items-center gap-y-5">
        <div className="grid gap-y-1 w-1/3 min-w-52">
          <p className="font-bold text-3xl">Drug abuse</p>
          <p className="text-sm opacity-70 italic">is when you abuse drugs</p>
          <p className="text-xs opacity-40 italic">{"more specifically, it's when you use drugs for a non-medical reason, in amounts that are harmful to you, and you do it a lot"}</p>
        </div>
        <Separator className="w-1/2" />
        <div>
          <p className="font-bold text-xl">{"don't abuse drugs kids"}</p>
          <br></br>
          <div className="flex items-top space-x-2">
          <Checkbox id="dontabusedrugs"/>
          <div className="grid gap-1.5 leading-none">
          <label htmlFor="dontabusedrugs" className="text-sm font-medium leading-none place-items-end">ok?</label>
          </div>
          </div>
          <br></br>
        </div>
        <Card className="grid place-items-center">
          <CardHeader className="gap-y-3">
            <CardTitle>Drugs</CardTitle>
            <CardDescription className="grid place-items-center">
              <Image src={Drugs} height={200} alt="Drugs"/>
            </CardDescription>
            <Separator/>
            <CardTitle>Use drugs responsibly, like him</CardTitle>
            
            <CardDescription className="grid place-items-center">
              <Image src={Rat_Meds} height={300} alt="Rat using drugs responsibly"/>
            </CardDescription>
          </CardHeader>
        </Card>
          
      </div>
    </div>

  );
}
