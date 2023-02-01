import React from 'react'
import {GridComponent, ColumnsDirective,ColumnDirective,Page,Selection,Toolbar,Sort,Filter,Edit,Inject} from '@syncfusion/ej2-react-grids'
import {customersGrid,customersData} from '../data/dummy'
import Header from '../components/Header/Header'

const Customer = () => {
  return (
    <div className='m-2 mt-16 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category="Page" title="Customers"/>
    <GridComponent
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      editSettings={{allowEditing:true,allowDeleting:true}}
      width="auto"
    >
      <ColumnsDirective>
        {customersGrid.map((item,index)=><ColumnDirective key={index} {...item}/>)}
      </ColumnsDirective>
      <Inject services={[Page,Toolbar,Selection,Edit,Sort,Filter]}/>
    </GridComponent>
  </div>  
  )
}

export default Customer