import COMMON_UTIL from '@utils/common';
import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const supportMethods = ['post'];
  if (COMMON_UTIL.checkMethodSupport(req, res, supportMethods)) {
    console.log(`production : ${COMMON_UTIL.isProduction}`);
  
    if (req.body && req.body.email && req.body.password) {
      COMMON_UTIL.SuccessResult(res);
    } else {
      COMMON_UTIL.ErrorResult(res);
    }
  } else {
    return;
  }
}

export default handler
