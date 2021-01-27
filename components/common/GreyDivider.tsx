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
            <span className="font_18">{props.title}</span>
          </h2>
          { props.children
            ? props.children
            : <p className="font_12">{props.content}</p>
          }
        </div>
      </div>
    </div>
  )
}

export default GreyDivider;