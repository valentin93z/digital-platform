export const existPathname = (path) => {
  const pathArr = path.split('/');
  if (pathArr.length === 1) {
    return path;
  } else {
    return `/${pathArr.slice(1, 3).join('/')}`;
  }
}