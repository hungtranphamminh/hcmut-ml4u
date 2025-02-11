export function splitQuery(query: string) {
  const parts = query.match(/"[^"]*"|\S+/g) || [];
  const phrases: string[] = [];
  const terms: string[] = [];

  parts.forEach((part) => {
    if (part.startsWith('"')) {
      const phrase = part.replaceAll('"', "").trim();
      if (phrase) phrases.push(phrase.toLowerCase());
    } else {
      terms.push(part.toLowerCase());
    }
  });

  return { phrases, terms };
}

export function matchesQuery(text: string, phrases: string[], terms: string[]) {
  const normalizedText = text.toLowerCase();
  return (
    (terms.every((term) => normalizedText.includes(term)) || !terms.length) &&
    (phrases.some((phrase) => normalizedText.includes(phrase)) ||
      !phrases.length)
  );
}