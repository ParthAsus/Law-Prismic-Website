import clsx from "clsx";


type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode
}

const Bounded = ({
  as: Comp = "section",
  className,
  children,
  ...restProps
} : BoundedProps) => {
  return (
    <Comp className={clsx("px-4 py-8 md:py-14 md:px-6 lg:py-10", className)} {...restProps}>
      <div className="mx-auto w-full max-w-8xl">
        {children}
      </div>
    </Comp>
  )
}

export default Bounded
