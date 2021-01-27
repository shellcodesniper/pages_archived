import { FunctionComponent } from 'react';
import COMMON_UTIL from '@utils/common';

interface PricePropsInterface {
  originalprice: number;
  saleprice?: number;
};

const PriceComponent: FunctionComponent<PricePropsInterface> = (props): JSX.Element => {
  
  if (props.saleprice) {
    const salePercentage = Number(
      ((props.originalprice > props.saleprice)
      ? (((props.originalprice - props.saleprice) / props.originalprice) * 100)
      : -1 * (((props.saleprice - props.originalprice) / props.saleprice) * 100)
    ).toFixed(1));

    return (
      <span>
        <span className="main_product_originalPrice"><i className="fas fa-won-sign mr_2px"></i>{COMMON_UTIL.thousandCommaNumber(props.originalprice)}</span>&nbsp;
        <span className="main_product_totalPrice"><i className="fas fa-won-sign mr_2px"></i>{COMMON_UTIL.thousandCommaNumber(props.saleprice)}</span>&nbsp;
        <span className="main_product_salePercentage">{salePercentage}%</span>
      </span>
    )
  } else {
    return (
      <span>
        <span className="main_product_totalPrice"><i className="fas fa-won-sign mr_2px"></i>{COMMON_UTIL.thousandCommaNumber(props.originalprice)}</span>
      </span>
    )
  }


}

export default PriceComponent;