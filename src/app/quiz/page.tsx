"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { insertOneUser } from "@/app/server/user"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters",
  }).max(10, {
    message: "Username must be below 10 characters"
  }),
  q1:z.coerce.number({
    required_error: "Number is required"
  }).positive(),
  q2: z.string().min(0,{
    message: "Fill in a name"
  })
})

let username:string;
let q1:number;
let q2:string;
let q1Correct:boolean;
let q2Correct:boolean;

export default function Quiz() {
    const { toast } = useToast();

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
      },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values.username)
      username = values.username;
      q1 = values.q1;
      q2 = values.q2;
      q1Correct = q1 === 3122;
      q2Correct = q2 === "meth";

      await insertOneUser(values.username, values.username == "rats", q1Correct, q2Correct)

    }
    
    return (
      <><p className="text-2xl font-bold grid justify-center">Quiz</p>
      <div className="grid justify-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Answer here" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )} />
                <FormField
              control={form.control}
              name="q1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Question 1 <br/> How many drug abusers were arrested in Singapore in 2023?</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Answer here" {...field} />
                  </FormControl>
                  <FormDescription>
                    Input a number.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField
              control={form.control}
              name="q2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Question 2 <br/> What is the most abused drug in Singapore?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>

                    <FormControl>
                      {/* <Input placeholder="Answer here" {...field} /> */}
                      <SelectTrigger>
                        <SelectValue placeholder="placeholder"/>
                      </SelectTrigger>
                    </FormControl>
                    
                    <SelectContent>
                      <SelectItem value="meth">Methamphetamine</SelectItem>
                      <SelectItem value="marijuana">Marijuana</SelectItem>
                      <SelectItem value="heroin">Heroin</SelectItem>
                      <SelectItem value="cocaine">Cocaine</SelectItem>
                    </SelectContent>
                  
                  </Select>
                  {/* <FormDescription>
                    aaaa
                  </FormDescription> */}
                  <FormMessage />

                </FormItem>
              )} />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
      <br></br>
      <div>
      <div className="grid justify-center">
        {
          username == "rats"
          ? <p>Rats!</p>
          : <p></p>
        }
        {
          q1 == 3122
          ? <p>Question 1: Correct!</p>
          : q1 == undefined ? <p></p>
          : <p className="italic">Question 1: Wrong, it was 3122.</p>
        }
        {
          q2 == undefined || q2 == ""
          ? <p></p> : q2.toLowerCase() == "meth"
          ? <p>Question 2: Correct!</p>
          : <p className="italic">Question 2: Wrong, it is methamphetamine.</p>
        }
      </div>
      
      </div></>

    );
  }
  