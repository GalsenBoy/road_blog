export default function truncate(sentence: string) {
  const paragraph = sentence.substring(0, 62) + "...";
  return paragraph;
}
