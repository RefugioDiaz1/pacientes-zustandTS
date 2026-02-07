import type { ReactNode } from "react";

export default function Error({children}:{children: ReactNode}) {
  return (
    <p className="text-start text-red-500 font-bold p-3 uppercase text-md">{children}</p>
  )
}
