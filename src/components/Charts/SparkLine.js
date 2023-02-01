import React from 'react'
import {SparklineComponent,Inject,SparklineTooltip} from '@syncfusion/ej2-react-charts'


const SparkLine = ({id,height,width,color,data,type}) => {

  return (
    <SparklineComponent 
      id={id}
      height={height}
      width={width}
      lineWidth="Numeric"
      fill={color}
      border={{color:color,width:2}}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
      tooltipSettings={{
        visible:true,
        format: '${x}: data ${yval}',
        trackLineSettings:{
          visible:true
        }
      }}
    >
        <Inject services={[SparklineTooltip]}/>
    </SparklineComponent>
  )
}

export default SparkLine