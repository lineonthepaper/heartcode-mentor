"use client"

import { CardHeader, Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";



export default function Home() {
  return (
    <div className="grid justify-center">
      <Card className="w-[1000px] grid justify-center">
        <CardHeader>
          <CardTitle>Drug abuse</CardTitle>
          <CardDescription>is when you abuse drugs</CardDescription>
        </CardHeader>
        <Separator className="my-4"/>
        <CardContent>
          <p>{"don't abuse drugs kids"}</p>
          <div className="flex space-x-2">



          <Checkbox id="dontabusedrugs"/>
          <label htmlFor="dontabusedrugs" className="text-sm font-medium leading-none">ok?</label>
          </div>
        </CardContent>
      </Card>
    </div>

  );
}
