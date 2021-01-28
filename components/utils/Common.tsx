import { FunctionComponent } from 'react';

const Coloring: any = (color: string ) => {
  return { color }
};

interface InputTextProps {
  id: string;
  type?: string;
  labelText: string;
  helpText?: string;
}
const InputText: FunctionComponent<InputTextProps> = (props: InputTextProps) => {
  
  return (
    <div className="mb-1 mt-3 px-3">
      <label htmlFor={props.id} className="form-label text-bold">{props.labelText}</label>
      <input type={props.type ? props.type : "text"} name={props.id} className="form-control" id={props.id} aria-describedby={`${props.id}_Help`} />
      { typeof props.helpText === 'string' &&
        <div id={`${props.id}_Help`} className="form-text">{props.helpText}</div>
      }
    </div>
  )
}

interface InputTextAreaProps {
  id: string;
  labelText: string;
  showRowNumber?: number;
  helpText?: string;
  defaultText?: string
}

const InputTextArea: FunctionComponent<InputTextAreaProps> = (props: InputTextAreaProps) => {
  
  return (
    <div className="mb-1 mt-3 px-3">
      <label htmlFor={props.id} className="form-label text-bold">{props.labelText}</label>
      <textarea className="form-control" id={props.id} rows={props.showRowNumber ? props.showRowNumber : 5} name={props.id}>{props.defaultText}</textarea>
      { typeof props.helpText === 'string' &&
        <div id={`${props.id}_Help`} className="form-text">{props.helpText}</div>
      }
    </div>
  )
}

interface InputCheckBoxProps {
  id: string;
  labelText: string;
  helpText?: string;
}

const InputCheckBox: FunctionComponent<InputCheckBoxProps> = (props: InputCheckBoxProps) => {

  return (
    <div className="mb-1 mt-3 px-3">
      <input className="form-check-input" type="checkbox" value="" id={props.id} />
      <label className="form-check-label" htmlFor={props.id}>
        &nbsp;&nbsp;{props.labelText}
      </label>
      { typeof props.helpText === 'string' &&
        <div id={`${props.id}_Help`} className="form-text">{props.helpText}</div>
      }
    </div>
  )
}


export { Coloring, InputText, InputTextArea, InputCheckBox };