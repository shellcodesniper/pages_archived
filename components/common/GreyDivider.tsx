import { FunctionComponent } from 'react'

interface DividerPropsInterface {
  title: string;
  children?: JSX.Element | null;
  content?: string;
};

const GreyDivider:FunctionComponent<DividerPropsInterface> = (props: DividerPropsInterface) => {

  return (
    <div>
      <div className="row mt-5 mb-5 greyBackground">
        <div className="title text-center">
          <h2>
            <br />
            <span className="font_24 font_bold">{props.title}</span>
          </h2>
          { props.children
            ? props.children
            : <p className="font_12 font_bold">{props.content}<br/></p>
          }
        </div>
      </div>
    </div>
  )
}

export default GreyDivider;