export function contentToString(content: unknown): string {
  if (!content) return "";
  if (typeof content === "string") return content;
  if (Array.isArray(content))
    return content
      .map((c) => {
        if (!c) return "";
        const obj = c as Record<string, unknown>;
        const val = (obj["text"] ?? obj["body"] ?? obj["heading"] ?? "") as unknown;
        return String(val ?? "");
      })
      .join("\n\n");
  return String(content);
}

export default contentToString;

export function isHTMLString(s: string) {
  return typeof s === 'string' && /<[^>]+>/.test(s);
}

export function extractH2HeadingsFromHTML(html: string): { id: string; text: string }[] {
  if (!isHTMLString(html)) return [];
  const re = /<h2[^>]*>(.*?)<\/h2>/gi;
  const results: { id: string; text: string }[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const text = m[1].replace(/<[^>]+>/g, '').trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    if (text) results.push({ id, text });
  }
  return results;
}

