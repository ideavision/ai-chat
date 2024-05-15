import { Source } from "./SourceBubble";

export function InlineCitation(props: {
  source: Source;
  sourceNumber: number;
  highlighted: boolean;
  onMouseEnter: () => any;
  onMouseLeave: () => any;
}) {
  const { source, sourceNumber, highlighted, onMouseEnter, onMouseLeave } =
    props;
  return (
    <a
      href={source.url}
      target="_blank"
      className={`relative bottom-1.5 text-xs border rounded px-1 ${
        highlighted ? "bg-[rgb(228,228,201)]" : "bg-[rgb(228,228,221)]"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {sourceNumber}
    </a>
  );
}
