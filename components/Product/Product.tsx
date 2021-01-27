import { FunctionComponent } from 'react';

import { Coloring } from '@components/utils/Common';
import PriceComponent from '@components/Product/Price';

interface mainProductPropsInterface {
  coverImage: string;
  name: string;
  colors: string[],
  originalPrice: number;
  salePrice?: number;
};

const MainProductComponent: FunctionComponent<mainProductPropsInterface> = (props): JSX.Element => {
  const colorItem =
  props.colors.map((color: string, index: number) =>{
    // Only do this if items have no stable IDs 
    if (props.colors.length > index ) {
      return (
        <i style={Coloring(color)} className="fa fa-square fa-xs" key={index} aria-hidden="true">&nbsp;</i>
      )
    } else {
      return (
        <i style={Coloring(color)} className="fa fa-square fa-xs" key={index} aria-hidden="true"></i>
      )
    }
  });

  return (
    <div className="col-12 col-md-3 mb-4 col-12">
      <div className="row">
        <div className="col-12">
          <a href="/product/1" className="no_text_decoration">
            <img className="img-fluid height_auto" src={ props.coverImage } />
          </a>
        </div>
        <div className="row">
          <div className="row">
            <div className="col-12" id="color">
              { colorItem }
            </div>
          </div>
          <a href="/product/1" className="no_text_decoration">
            <div className="row">
              <div className="col-12">
                <span className="main_product_subject">{props.name}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <PriceComponent originalprice={props.originalPrice} saleprice={props.salePrice} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export { MainProductComponent };
