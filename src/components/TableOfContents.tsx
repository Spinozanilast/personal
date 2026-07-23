import { useState, useEffect, useCallback } from "react";

interface Heading {
  depth: number;
  slug: string;
  text: string;
}

interface Props {
  headings: Heading[];
  headingsDepthBetween?: {
    first: number;
    last: number;
  }
}

export default function TableOfContents({ headings, headingsDepthBetween = {
  first: 2,
  last: 6
} }: Props) {
  const [activeId, setActiveId] = useState<string>("");

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveId(slug);
    }
  }, []);

  useEffect(() => {
    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            visible.delete(entry.target.id);
          }
        }

        if (visible.size > 0) {
          const top = [...visible.entries()].reduce((a, b) =>
            a[1] <= b[1] ? a : b
          );
          setActiveId(top[0]);
        }
      },
      { rootMargin: "-80px 0px -50% 0px", threshold: 0 }
    );

    for (const h of headings) {
      const el = document.getElementById(h.slug);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents">
      <ul className="list-none space-y-1 p-0 m-0 text-sm font-departuremono text-dm-xs">
        {headings.map((h) => {
          if (h.depth >= headingsDepthBetween.first && h.depth <= headingsDepthBetween.last) {
            return (
              <li key={h.slug}>
                <a
                  href={`#${h.slug}`}
                  onClick={(e) => handleClick(e, h.slug)}
                  className="block text-balance"
                  style={{
                    color:
                      activeId === h.slug
                        ? "var(--accent-color)"
                        : "var(--text-color)",
                    opacity: activeId === h.slug ? 1 : 0.5,
                    textDecoration: "none",
                    transition: "color 0.2s, opacity 0.2s",
                    borderLeft: `2px solid ${activeId === h.slug ? "var(--accent-color)" : "transparent"
                      }`,
                    paddingLeft: `${(h.depth - headingsDepthBetween.first) * 16 + 8}px`,
                  }}
                  onMouseEnter={(e) => {
                    if (activeId !== h.slug) {
                      e.currentTarget.style.opacity = "0.8";
                      e.currentTarget.style.color = "var(--accent-color)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeId !== h.slug) {
                      e.currentTarget.style.opacity = "0.5";
                      e.currentTarget.style.color = "var(--text-color)";
                    }
                  }}
                >
                  {h.text}
                </a>
              </li>
            )
          }
        }
        )}
      </ul>
    </nav>
  );
}
