import LayoutDashboard from "../Components/LayoutDashboard"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from "react"

export default function Home() {
  const [date, setDate] = useState<Date>()

  return (
    <>
      <LayoutDashboard />
      <body className="max-w-screen-2xl mx-auto ">
        <h1 className="text-4xl text-center font-semibold">Partidos del día</h1>
        <div className="flex items-center justify-center mt-6">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon />
                {date ? format(date, "PPP") : <span>Seleccionar fecha distinta</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <main className="mt-6 flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 justify-center items-center">
          
          <section className="grid grid-cols-1 lg:grid-cols-2 m-4">
          <Card className="w-[350px] m-1">
              <CardContent>
                <div className="flex">
                  <section className="flex basis-1/3 flex-col">
                    <img src="../../../public/lakers.png" alt="Team Logo" className="bg-white bg-opacity-90 rounded-md mt-2 p-2"/>
                    <p className="text-center mt-2 text-gray-500 text-lg">8 - 6</p>
                  </section>
                  <section className="flex basis-2/3 justify-center items-center">
                    <p className="text-center font-extrabold text-2xl mt-16">6:00 PM</p>
                  </section>
                  <section className="flex basis-1/3 flex-col">
                    <img src="../../../public/lakers.png" alt="Team Logo" className="bg-white bg-opacity-90 rounded-md mt-2 p-2"/>
                    <p className="text-center mt-2 text-gray-500 text-lg">3 - 12</p>
                  </section>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" className="text-xl">Lakers</Button>
                <Button variant="ghost" className="text-xl">Warriors</Button>
              </CardFooter>
            </Card>
            
            <Card className="w-[350px] m-1">
              <CardTitle className="text-center my-2">
                Líderes de Equipo
              </CardTitle>
              <CardContent>
                <div className="flex flex-col">
                  <section className="flex justify-end">
                    <p className="mx-1">PPP</p>
                    <p className="mx-1">TPP</p>
                    <p className="mx-1">TL%</p>
                  </section>
                  <hr />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div>
                        <img src="https://github.com/shadcn.png" alt="Player Image" className="h-8 rounded-full"/>
                      </div>
                      <div className="mx-2">
                        <p>Isaac Salazar</p>
                        <p>Lakers |#5| Alero</p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="mx-1">12.7</p>
                      <p className="mx-1">2.4</p>
                      <p className="mx-1">56%</p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div>
                        <img src="https://github.com/shadcn.png" alt="Player Image" className="h-8 rounded-full"/>
                      </div>
                      <div className="mx-2">
                        <p>Mauricio Gardea</p>
                        <p>Warriors |#7| Base</p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="mx-1">14.4</p>
                      <p className="mx-1">3.1</p>
                      <p className="mx-1">41%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 m-4">
          <Card className="w-[350px] m-1">
              <CardContent>
                <div className="flex">
                  <section className="flex basis-1/3 flex-col">
                    <img src="../../../public/lakers.png" alt="Team Logo" className="bg-white bg-opacity-90 rounded-md mt-2 p-2"/>
                    <p className="text-center mt-2 text-gray-500 text-lg">8 - 6</p>
                  </section>
                  <section className="flex basis-2/3 justify-center items-center">
                    <p className="text-center font-extrabold text-2xl mt-16">6:00 PM</p>
                  </section>
                  <section className="flex basis-1/3 flex-col">
                    <img src="../../../public/lakers.png" alt="Team Logo" className="bg-white bg-opacity-90 rounded-md mt-2 p-2"/>
                    <p className="text-center mt-2 text-gray-500 text-lg">3 - 12</p>
                  </section>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" className="text-xl">Lakers</Button>
                <Button variant="ghost" className="text-xl">Warriors</Button>
              </CardFooter>
            </Card>
            
            <Card className="w-[350px] m-1">
              <CardTitle className="text-center my-2">
                Líderes de Equipo
              </CardTitle>
              <CardContent>
                <div className="flex flex-col">
                  <section className="flex justify-end">
                    <p className="mx-1">PPP</p>
                    <p className="mx-1">TPP</p>
                    <p className="mx-1">TL%</p>
                  </section>
                  <hr />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div>
                        <img src="https://github.com/shadcn.png" alt="Player Image" className="h-8 rounded-full"/>
                      </div>
                      <div className="mx-2">
                        <p>Isaac Salazar</p>
                        <p>Lakers |#5| Alero</p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="mx-1">12.7</p>
                      <p className="mx-1">2.4</p>
                      <p className="mx-1">56%</p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div>
                        <img src="https://github.com/shadcn.png" alt="Player Image" className="h-8 rounded-full"/>
                      </div>
                      <div className="mx-2">
                        <p>Mauricio Gardea</p>
                        <p>Warriors |#7| Base</p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="mx-1">14.4</p>
                      <p className="mx-1">3.1</p>
                      <p className="mx-1">41%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 m-4">
          <Card className="w-[350px] m-1">
              <CardContent>
                <div className="flex">
                  <section className="flex basis-1/3 flex-col">
                    <img src="../../../public/lakers.png" alt="Team Logo" className="bg-white bg-opacity-90 rounded-md mt-2 p-2"/>
                    <p className="text-center mt-2 text-gray-500 text-lg">8 - 6</p>
                  </section>
                  <section className="flex basis-2/3 justify-center items-center">
                    <p className="text-center font-extrabold text-2xl mt-16">6:00 PM</p>
                  </section>
                  <section className="flex basis-1/3 flex-col">
                    <img src="../../../public/lakers.png" alt="Team Logo" className="bg-white bg-opacity-90 rounded-md mt-2 p-2"/>
                    <p className="text-center mt-2 text-gray-500 text-lg">3 - 12</p>
                  </section>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" className="text-xl">Lakers</Button>
                <Button variant="ghost" className="text-xl">Warriors</Button>
              </CardFooter>
            </Card>
            
            <Card className="w-[350px] m-1">
              <CardTitle className="text-center my-2">
                Líderes de Equipo
              </CardTitle>
              <CardContent>
                <div className="flex flex-col">
                  <section className="flex justify-end">
                    <p className="mx-1">PPP</p>
                    <p className="mx-1">TPP</p>
                    <p className="mx-1">TL%</p>
                  </section>
                  <hr />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div>
                        <img src="https://github.com/shadcn.png" alt="Player Image" className="h-8 rounded-full"/>
                      </div>
                      <div className="mx-2">
                        <p>Isaac Salazar</p>
                        <p>Lakers |#5| Alero</p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="mx-1">12.7</p>
                      <p className="mx-1">2.4</p>
                      <p className="mx-1">56%</p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div>
                        <img src="https://github.com/shadcn.png" alt="Player Image" className="h-8 rounded-full"/>
                      </div>
                      <div className="mx-2">
                        <p>Mauricio Gardea</p>
                        <p>Warriors |#7| Base</p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="mx-1">14.4</p>
                      <p className="mx-1">3.1</p>
                      <p className="mx-1">41%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 m-4">
          <Card className="w-[350px] m-1">
              <CardContent>
                <div className="flex">
                  <section className="flex basis-1/3 flex-col">
                    <img src="../../../public/lakers.png" alt="Team Logo" className="bg-white bg-opacity-90 rounded-md mt-2 p-2"/>
                    <p className="text-center mt-2 text-gray-500 text-lg">8 - 6</p>
                  </section>
                  <section className="flex basis-2/3 justify-center items-center">
                    <p className="text-center font-extrabold text-2xl mt-16">6:00 PM</p>
                  </section>
                  <section className="flex basis-1/3 flex-col">
                    <img src="../../../public/lakers.png" alt="Team Logo" className="bg-white bg-opacity-90 rounded-md mt-2 p-2"/>
                    <p className="text-center mt-2 text-gray-500 text-lg">3 - 12</p>
                  </section>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" className="text-xl">Lakers</Button>
                <Button variant="ghost" className="text-xl">Warriors</Button>
              </CardFooter>
            </Card>
            
            <Card className="w-[350px] m-1">
              <CardTitle className="text-center my-2">
                Líderes de Equipo
              </CardTitle>
              <CardContent>
                <div className="flex flex-col">
                  <section className="flex justify-end">
                    <p className="mx-1">PPP</p>
                    <p className="mx-1">TPP</p>
                    <p className="mx-1">TL%</p>
                  </section>
                  <hr />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div>
                        <img src="https://github.com/shadcn.png" alt="Player Image" className="h-8 rounded-full"/>
                      </div>
                      <div className="mx-2">
                        <p>Isaac Salazar</p>
                        <p>Lakers |#5| Alero</p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="mx-1">12.7</p>
                      <p className="mx-1">2.4</p>
                      <p className="mx-1">56%</p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div>
                        <img src="https://github.com/shadcn.png" alt="Player Image" className="h-8 rounded-full"/>
                      </div>
                      <div className="mx-2">
                        <p>Mauricio Gardea</p>
                        <p>Warriors |#7| Base</p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="mx-1">14.4</p>
                      <p className="mx-1">3.1</p>
                      <p className="mx-1">41%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 m-4">
          <Card className="w-[350px] m-1">
              <CardContent>
                <div className="flex">
                  <section className="flex basis-1/3 flex-col">
                    <img src="../../../public/lakers.png" alt="Team Logo" className="bg-white bg-opacity-90 rounded-md mt-2 p-2"/>
                    <p className="text-center mt-2 text-gray-500 text-lg">8 - 6</p>
                  </section>
                  <section className="flex basis-2/3 justify-center items-center">
                    <p className="text-center font-extrabold text-2xl mt-16">6:00 PM</p>
                  </section>
                  <section className="flex basis-1/3 flex-col">
                    <img src="../../../public/lakers.png" alt="Team Logo" className="bg-white bg-opacity-90 rounded-md mt-2 p-2"/>
                    <p className="text-center mt-2 text-gray-500 text-lg">3 - 12</p>
                  </section>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" className="text-xl">Lakers</Button>
                <Button variant="ghost" className="text-xl">Warriors</Button>
              </CardFooter>
            </Card>
            
            <Card className="w-[350px] m-1">
              <CardTitle className="text-center my-2">
                Líderes de Equipo
              </CardTitle>
              <CardContent>
                <div className="flex flex-col">
                  <section className="flex justify-end">
                    <p className="mx-1">PPP</p>
                    <p className="mx-1">TPP</p>
                    <p className="mx-1">TL%</p>
                  </section>
                  <hr />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div>
                        <img src="https://github.com/shadcn.png" alt="Player Image" className="h-8 rounded-full"/>
                      </div>
                      <div className="mx-2">
                        <p>Isaac Salazar</p>
                        <p>Lakers |#5| Alero</p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="mx-1">12.7</p>
                      <p className="mx-1">2.4</p>
                      <p className="mx-1">56%</p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div>
                        <img src="https://github.com/shadcn.png" alt="Player Image" className="h-8 rounded-full"/>
                      </div>
                      <div className="mx-2">
                        <p>Mauricio Gardea</p>
                        <p>Warriors |#7| Base</p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="mx-1">14.4</p>
                      <p className="mx-1">3.1</p>
                      <p className="mx-1">41%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
                    <section className="grid grid-cols-1 lg:grid-cols-2 m-4">
          <Card className="w-[350px] m-1">
              <CardContent>
                <div className="flex">
                  <section className="flex basis-1/3 flex-col">
                    <img src="../../../public/lakers.png" alt="Team Logo" className="bg-white bg-opacity-90 rounded-md mt-2 p-2"/>
                    <p className="text-center mt-2 text-gray-500 text-lg">8 - 6</p>
                  </section>
                  <section className="flex basis-2/3 justify-center items-center">
                    <p className="text-center font-extrabold text-2xl mt-16">6:00 PM</p>
                  </section>
                  <section className="flex basis-1/3 flex-col">
                    <img src="../../../public/lakers.png" alt="Team Logo" className="bg-white bg-opacity-90 rounded-md mt-2 p-2"/>
                    <p className="text-center mt-2 text-gray-500 text-lg">3 - 12</p>
                  </section>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" className="text-xl">Lakers</Button>
                <Button variant="ghost" className="text-xl">Warriors</Button>
              </CardFooter>
            </Card>
            
            <Card className="w-[350px] m-1">
              <CardTitle className="text-center my-2">
                Líderes de Equipo
              </CardTitle>
              <CardContent>
                <div className="flex flex-col">
                  <section className="flex justify-end">
                    <p className="mx-1">PPP</p>
                    <p className="mx-1">TPP</p>
                    <p className="mx-1">TL%</p>
                  </section>
                  <hr />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div>
                        <img src="https://github.com/shadcn.png" alt="Player Image" className="h-8 rounded-full"/>
                      </div>
                      <div className="mx-2">
                        <p>Isaac Salazar</p>
                        <p>Lakers |#5| Alero</p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="mx-1">12.7</p>
                      <p className="mx-1">2.4</p>
                      <p className="mx-1">56%</p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div>
                        <img src="https://github.com/shadcn.png" alt="Player Image" className="h-8 rounded-full"/>
                      </div>
                      <div className="mx-2">
                        <p>Mauricio Gardea</p>
                        <p>Warriors |#7| Base</p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="mx-1">14.4</p>
                      <p className="mx-1">3.1</p>
                      <p className="mx-1">41%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 m-4">
          <Card className="w-[350px] m-1">
              <CardContent>
                <div className="flex">
                  <section className="flex basis-1/3 flex-col">
                    <img src="../../../public/lakers.png" alt="Team Logo" className="bg-white bg-opacity-90 rounded-md mt-2 p-2"/>
                    <p className="text-center mt-2 text-gray-500 text-lg">8 - 6</p>
                  </section>
                  <section className="flex basis-2/3 justify-center items-center">
                    <p className="text-center font-extrabold text-2xl mt-16">6:00 PM</p>
                  </section>
                  <section className="flex basis-1/3 flex-col">
                    <img src="../../../public/lakers.png" alt="Team Logo" className="bg-white bg-opacity-90 rounded-md mt-2 p-2"/>
                    <p className="text-center mt-2 text-gray-500 text-lg">3 - 12</p>
                  </section>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" className="text-xl">Lakers</Button>
                <Button variant="ghost" className="text-xl">Warriors</Button>
              </CardFooter>
            </Card>
            
            <Card className="w-[350px] m-1">
              <CardTitle className="text-center my-2">
                Líderes de Equipo
              </CardTitle>
              <CardContent>
                <div className="flex flex-col">
                  <section className="flex justify-end">
                    <p className="mx-1">PPP</p>
                    <p className="mx-1">TPP</p>
                    <p className="mx-1">TL%</p>
                  </section>
                  <hr />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div>
                        <img src="https://github.com/shadcn.png" alt="Player Image" className="h-8 rounded-full"/>
                      </div>
                      <div className="mx-2">
                        <p>Isaac Salazar</p>
                        <p>Lakers |#5| Alero</p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="mx-1">12.7</p>
                      <p className="mx-1">2.4</p>
                      <p className="mx-1">56%</p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div>
                        <img src="https://github.com/shadcn.png" alt="Player Image" className="h-8 rounded-full"/>
                      </div>
                      <div className="mx-2">
                        <p>Mauricio Gardea</p>
                        <p>Warriors |#7| Base</p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="mx-1">14.4</p>
                      <p className="mx-1">3.1</p>
                      <p className="mx-1">41%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 m-4">
          <Card className="w-[350px] m-1">
              <CardContent>
                <div className="flex">
                  <section className="flex basis-1/3 flex-col">
                    <img src="../../../public/lakers.png" alt="Team Logo" className="bg-white bg-opacity-90 rounded-md mt-2 p-2"/>
                    <p className="text-center mt-2 text-gray-500 text-lg">8 - 6</p>
                  </section>
                  <section className="flex basis-2/3 justify-center items-center">
                    <p className="text-center font-extrabold text-2xl mt-16">6:00 PM</p>
                  </section>
                  <section className="flex basis-1/3 flex-col">
                    <img src="../../../public/lakers.png" alt="Team Logo" className="bg-white bg-opacity-90 rounded-md mt-2 p-2"/>
                    <p className="text-center mt-2 text-gray-500 text-lg">3 - 12</p>
                  </section>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" className="text-xl">Lakers</Button>
                <Button variant="ghost" className="text-xl">Warriors</Button>
              </CardFooter>
            </Card>
            
            <Card className="w-[350px] m-1">
              <CardTitle className="text-center my-2">
                Líderes de Equipo
              </CardTitle>
              <CardContent>
                <div className="flex flex-col">
                  <section className="flex justify-end">
                    <p className="mx-1">PPP</p>
                    <p className="mx-1">TPP</p>
                    <p className="mx-1">TL%</p>
                  </section>
                  <hr />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div>
                        <img src="https://github.com/shadcn.png" alt="Player Image" className="h-8 rounded-full"/>
                      </div>
                      <div className="mx-2">
                        <p>Isaac Salazar</p>
                        <p>Lakers |#5| Alero</p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="mx-1">12.7</p>
                      <p className="mx-1">2.4</p>
                      <p className="mx-1">56%</p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div>
                        <img src="https://github.com/shadcn.png" alt="Player Image" className="h-8 rounded-full"/>
                      </div>
                      <div className="mx-2">
                        <p>Mauricio Gardea</p>
                        <p>Warriors |#7| Base</p>
                      </div>
                    </div>
                    <div className="flex ">
                      <p className="mx-1">14.4</p>
                      <p className="mx-1">3.1</p>
                      <p className="mx-1">41%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>



          </div>
        </main>
      </body>
    </>
  )
}

