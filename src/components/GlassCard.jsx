import React from "react";
export default function GlassCard({title,subtitle,children,className=""}){
  return (
    <div className={"glass "+className}>
      {title && <div className="flex justify-between items-baseline mb-2"><h3 className="text-sm font-semibold">{title}</h3>{subtitle && <div className="text-xs muted">{subtitle}</div>}</div>}
      <div>{children}</div>
    </div>
  )
}