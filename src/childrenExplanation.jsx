import React from 'react'

const childrenExplanation = () => {
  return (
    <div>
        <ChildComponent>
            <div>
                <h1>Hello!</h1>
            </div>
        </ChildComponent>
        <ChildComponent>
            <h3>Alok Gupta</h3>
        </ChildComponent>
        <ChildComponent>
            <div>
                <h5>hello</h5>
                <h3>hiii</h3>
            </div>
        </ChildComponent>
        
    </div>
  )
}

const ChildComponent = ({children}) => {
    return <div>
        {children}
    </div>
}

export default childrenExplanation