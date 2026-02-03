interface TocItem {
  id: string;
  label: string;
}

interface TocProps {
  items: TocItem[];
}

export const Toc = ({ items }: TocProps) => {
  return (
    <div className="hidden lg:block">
      <nav className="sticky top-20 space-y-2">
        <h3 className="text-sm font-semibold text-foreground mb-4">Contents</h3>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
