import { mkdirSync, writeFileSync } from "node:fs";

// Museum of the Year 3000: the label a museum in the year 3000 puts beside
// an ordinary object from today. Deadpan, confident, one line, no preamble.
// The object is a QR code menu: diners pointed their phones at the table
// to read the menu on a smaller screen, at the same table, while their
// food went cold and the waiter waited. The future states, flatly, what
// the thing was for, and the absurdity is that every word of it is true.
const LABEL =
  "QR code menu, c. 2024. Diners pointed their phones at the table to read the menu on a smaller screen, at the same table, while their food went cold and the waiter waited.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");
