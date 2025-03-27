import { cn } from "@/lib/utils";

interface Props{
    children: React.ReactNode;
    className?:string;
}

const Container = ({children, className}: Props) => {
  return (
    <div className={cn('max-w-screen-xl mx-auto bg-gradient-to-r from-teal-50 to-rose-50', className)}>{children}</div>
  )
}

export default Container