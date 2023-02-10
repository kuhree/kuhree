import copyIcons from "@assets/copy";
import { useEffect, useState } from "react";
import { z } from "zod";

import "./Quoter.css";

type QueryState<Data> = {
  data: undefined | Data;
  error: undefined | unknown;
};

type QuoteSchema = z.infer<typeof QuoteSchema>;
const QuoteSchema = z.object({ quote: z.string().min(1) });

type QuoterProps = {
  queryFn?: () => Promise<QuoteSchema>;
};

export function useQuoter({ queryFn = fetchQuote }: QuoterProps) {
  const [query, setQuery] = useState<QueryState<QuoteSchema>>({
    data: undefined,
    error: undefined,
  });

  const refetch = async () => {
    return queryFn()
      .then((data) => setQuery({ data, error: undefined }))
      .catch((error) => setQuery({ error, data: undefined }));
  };

  return [query, { refetch }] as const;
}

export function useCopyToClipboard() {
  const copy = (message: string) => {
    navigator.clipboard.writeText(message);
  };

  const handleCopy = (message: string) => () => copy(message);

  return { copy, handleCopy } as const;
}

export function Quoter(props: QuoterProps) {
  const { handleCopy } = useCopyToClipboard();
  const [{ error, data }, { refetch }] = useQuoter(props);
  const [quoteHistory, setQuoteHistory] = useState<Set<string>>(new Set());

  const historyList = [...quoteHistory].reverse();

  useEffect(() => {
    const currentQuote = data?.quote;

    if (currentQuote) {
      if (quoteHistory.has(currentQuote)) {
        quoteHistory.delete(currentQuote); // Re-add it later
      }

      setQuoteHistory((prev) => prev.add(currentQuote));
    }
  }, [data]);

  if (error) {
    return (
      <section>
        <h1>Uh oh!</h1>

        <p>
          An unexpected error has occured. Please check the console for more
          details
        </p>

        <pre>{JSON.stringify(error, null, 2)}</pre>
        <button onClick={refetch}>Try Again</button>
      </section>
    );
  }

  return (
    <>
      <section className="quote-container">
        <div className="quote">
          <blockquote cite="https://kanye.rest">{data?.quote}</blockquote>

          <button onClick={refetch} className="quote-action">
            {data ? "New" : "Click Me"}
          </button>
        </div>
      </section>

      <p className="quote-attribution">
        Powered by <a href="https://kanye.rest">Kanye REST</a>
      </p>

      <section className="quote-container history">
        <h2>History ({quoteHistory.size})</h2>

        {historyList.map((quote) => (
          <div key={quote} className="quote">
            <blockquote>{quote}</blockquote>

            <button onClick={handleCopy(quote)} className="quote-action icon">
              <i dangerouslySetInnerHTML={{ __html: copyIcons.base }} />
            </button>
          </div>
        ))}
      </section>
    </>
  );
}

async function fetchQuote() {
  const baseUrl = "https://api.kanye.rest";
  const response = await fetch(baseUrl);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(
      "NetworkError: Please check the network tab for more details",
      { cause: response.body }
    );
  }

  return QuoteSchema.parse(json);
}
