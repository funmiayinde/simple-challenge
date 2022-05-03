import AppError from "../utils/app-error"

// 404 Handler
const notFound = () => {
  throw new AppError('Route Not Found', 404);
}
export default notFound;

