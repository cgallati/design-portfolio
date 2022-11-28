import { lightTheme } from "./theme";
import { Responsive } from "../../types/emotion";

enum BP_INDEX {
  s,
  m,
  l,
  xl,
}

// todo: use baseTheme, not a variant (once other variants exist)
export const mq = Object.values(lightTheme.breakpoints).map(
  (bp) => `@media (min-width: ${bp}px)`
);

export const responsiveValues = (property: string, values: Responsive<any>) => {
  const queries = [property + ": " + values[BP_INDEX[0]] + ";"];
  mq.forEach((query, index) =>
    queries.push(`
        ${query} {
            ${property + ": " + values[BP_INDEX[index + 1]]};
        }
    `)
  );
  return queries;
};
