

export const formatUrl = (url: string, params?: string[] | string): string => {
  if (!params) return url;
  const matchParams = /{(\d+)}/g;
  const replacer = (match: string, index: number): string => params[index] ?? match;

  return url.replace(matchParams, replacer);
};