export type ClassValue =
  | Record<string, undefined | boolean | null>
  | ClassValue[]
  | undefined
  | boolean
  | string
  | null;

export function clsx(...classValues: ClassValue[]) {
  const classNames: string[] = [];

  classValues.forEach((value) => {
    if (!value) {
      return;
    }

    if (typeof value === 'string' && value.trim()) {
      classNames.push(value);
    } else if (Array.isArray(value)) {
      classNames.push(clsx(value));
    } else if (typeof value === 'object') {
      Object.entries(value).forEach(([value, condition]) => {
        condition && classNames.push(value);
      });
    }
  });

  return classNames.join(' ');
}
