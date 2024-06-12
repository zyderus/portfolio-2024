export const debounce = <F extends (...args: any[]) => void>(
  func: F,
  delay: number = 100
) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  const debouncedFunction = (...args: Parameters<F>) => {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };

  debouncedFunction.cancel = () => {
    clearTimeout(timeoutId);
  };

  return debouncedFunction;
};
