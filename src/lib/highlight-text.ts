export function getHighlightedTerms(searchText: string): string[] {
  const terms: string[] = [];
  let currentPosition = 0;

  while (currentPosition < searchText.length) {
    if (searchText[currentPosition] === '"') {
      const endQuote = searchText.indexOf('"', currentPosition + 1);
      if (endQuote === -1) break;

      const quotedContent = searchText.slice(currentPosition + 1, endQuote).trim();
      if (quotedContent) terms.push(quotedContent);
      currentPosition = endQuote + 1;
    } else {
      const nextQuote = searchText.indexOf('"', currentPosition);
      const segment = searchText.slice(
        currentPosition,
        nextQuote === -1 ? undefined : nextQuote
      );
      const words = segment.trim().split(/\s+/).filter(Boolean);
      terms.push(...words);

      if (nextQuote === -1) break;
      currentPosition = nextQuote;
    }
  }

  return terms;
}
