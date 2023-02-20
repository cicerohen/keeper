export const classNames = (...args: (string | boolean)[]) => {
  return args.filter((a) => a).join(" ");
};
