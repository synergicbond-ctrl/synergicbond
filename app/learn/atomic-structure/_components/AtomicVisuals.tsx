import type { ReactNode, SVGProps } from "react";

type VisualProps = SVGProps<SVGSVGElement> & { title: string; description: string; children: ReactNode };

export function ScientificVisual({ title, description, children, ...props }: VisualProps) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return <svg role="img" aria-labelledby={`${id}-title ${id}-desc`} {...props}>
    <title id={`${id}-title`}>{title}</title><desc id={`${id}-desc`}>{description}</desc>{children}
  </svg>;
}

export function GoldFoilVisual() {
  return <ScientificVisual title="Rutherford gold-foil scattering" description="Alpha particles from a source strike thin gold foil. Most continue forward, some deflect, and a very small number scatter backward." viewBox="0 0 760 260" className="h-auto w-full">
    <defs><marker id="alpha-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3z" fill="#67e8f9" /></marker></defs>
    <path d="M55 130H350" stroke="#67e8f9" strokeWidth="3" markerEnd="url(#alpha-arrow)" /><circle cx="65" cy="130" r="24" fill="#fb7185" /><text x="53" y="137" fill="white" fontSize="22">α</text>
    <path d="M390 45V215" stroke="#fbbf24" strokeWidth="11" /><text x="365" y="32" fill="#fde68a" fontSize="18">gold foil</text>
    <path d="M405 130H680M405 130Q560 76 680 65M405 130Q565 190 680 202M405 130Q515 240 580 238" fill="none" stroke="#a5f3fc" strokeWidth="3" markerEnd="url(#alpha-arrow)" />
    <circle cx="690" cy="130" r="46" fill="none" stroke="#cbd5e1" strokeWidth="4" /><text x="646" y="195" fill="#cbd5e1" fontSize="16">detector</text>
  </ScientificVisual>;
}
