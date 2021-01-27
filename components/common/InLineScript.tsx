import React, { useState, useEffect, FunctionComponent, ReactNode } from 'react';

interface InLineScriptProps {
  script: string;
  child?: ReactNode;
};

const InLineScript: FunctionComponent<InLineScriptProps> = (props: InLineScriptProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `${props.script}`;  
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (<div id='inLineScript'>{props.child}</div>);
}

export default InLineScript;