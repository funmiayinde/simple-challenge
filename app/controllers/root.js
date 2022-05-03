import _ from "lodash";
import AppResponse from "../utils/app-response";
import { OK } from "../utils/codes";

// Hello World on '/'
const root = (req, res) => {
  const meta = AppResponse.getSuccessMeta();
  _.extend(meta, { message: 'Hello world' });
  return res.status(OK).json(AppResponse.format(meta));
};

export default root;
