import { cn } from "@/lib/utils";

interface Props{
    children: React.ReactNode;
    className?:string;
}

const Title = ({children, className}: Props) => {
  return (
    <h2 className={cn('text-5xl md:text-5xl font-bold', className)}>{children}</h2>
  )
}

export default Title