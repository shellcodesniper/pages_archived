import { NextApiRequest, NextApiResponse } from 'next'

namespace COMMON_UTIL {
  export const isProduction = (process.env.NODE_ENV && process.env.NODE_ENV.toString().toLowerCase() ==='production')
  ? true
  : false;

  export const baseUrl = isProduction ? 'https://api.kuuwang.com' : 'http://localhost:3000';



  export function checkMethodSupport(req: NextApiRequest, res: NextApiResponse, supportOriginmethods: string[]): boolean {
    const supportMethods = supportOriginmethods.map((x: string)=> x.toUpperCase());
    if (req.method) {
      if (supportMethods.includes( req.method.toUpperCase() )) {
        return true;
      } else {
        ErrorResult(res, 405, `METHOD ${req.method.toUpperCase()} NOT SUPPORT`);
        return false;
      }
    } 
    ErrorResult(res, 500, 'METHOD NOT DEFINED');
    return false;
    
  }
  export function SuccessResult(res: NextApiResponse, data?: object, msg?: string, status?: number): void {
    const statusCode = status || 200;
    const retDict = {
      status: statusCode,
      msg: msg || '',
      data: data || {},
    }
    res.status(statusCode).json(JSON.stringify(retDict))
  }

  export function ErrorResult(res: NextApiResponse, status?: number, msg?: string): void {
    const statusCode = status || 500;
    const retdict = {
      status: statusCode,
      msg: msg || '',
    }
    res.status(statusCode).json(retdict);
  }

  export function thousandCommaNumber(x: number) : string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

export default COMMON_UTIL;