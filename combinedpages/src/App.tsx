import { useState } from 'react'
import './App.css'
import Title  from './title.tsx'
import Intro from './intro.tsx'
import Hobby1 from './hobby 1/hobby1.tsx'
import List1 from './list1.tsx'
import Table1 from './hobby 1/table1.tsx'
import Form1 from './hobby 1/form1.tsx'
import Hobby2 from './hobby 2/hobby2.tsx'
import List2 from './list2.tsx'
import Table2 from './hobby 2/table2.tsx'
import Form2 from './hobby 2/form2.tsx'

function App() {

  return (
    <>
        <Title/>
        <Intro firstName="Nathaniel Powers" secondName="Dominic DiPofi"/>
        <div>
            <Hobby1 name="Nathaniel Powers"/>
            <List1/>
            <Table1/>
            <Form1/>
        </div>

        <div>
            <Hobby2 othername="Dominic DiPofi"/>
            <List2/>
            <Table2/>
            <Form2/>
        </div>
    </>
  )
}

export default App
