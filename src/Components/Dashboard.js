import { AlignRightOutlined } from '@ant-design/icons';
import { Alert, Avatar, Badge, Breadcrumb, Card, Col, Input, Layout, Menu, Row, Select, Space, } from 'antd';
import { useState } from 'react';
import { GrMapLocation } from 'react-icons/gr';
import { BsBellFill } from 'react-icons/bs';
import { BsMenuButton,BsFillInfoSquareFill } from 'react-icons/bs';
import { HiUser } from 'react-icons/hi';
import { AiTwotoneSetting } from 'react-icons/ai';
import { AudioOutlined } from '@ant-design/icons';
import { Option } from 'antd/lib/mentions';
import Piechart from './Piechart';
import Linechart from './Linechart';
import TableData from './TableData';
import { IconBase } from 'react-icons';
import SaleDetails from './SaleDetails';


const { Header, Content, Sider } = Layout;

function getItem(label, key,  children, type) {
  return {
    key,
    label,
    children,
    type
  };
}
const items = [
   
  getItem('Item 1', 'g1', [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
 getItem('Item 2', 'g2',[getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
]
      const { Search } = Input;

const onSearch = (value) => console.log(value);
const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [show, setShow] = useState(true);
   return(
    
  <Layout>
    <Header style={{backgroundColor:"white",position:"fixed",zIndex:1,width:"100%",display:"flex",overflow:"hidden"}} >
     
      
      <p style={{color:'blue',fontSize:20,fontWeight:"bold"}}><small> <span style={{backgroundColor:'blue',padding:(5,8,5,8),color:"white", borderRadius:"50%",fontWeight:"bold",fontSize:10, marginRight:10 }}>L</span> Loogoo  </small></p>
      
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      
      style={{
        width: 500,
        marginTop:18,
        marginLeft:80,
        marginRight:550
      }}
    />
     <Badge dot={show}  style={{marginTop:22}}>
        <BsBellFill shape="square" size={20} dot={show}  style={{marginTop:22}} />
      </Badge>
    <Avatar style={{marginTop:18,marginLeft:20}} src="https://joeschmoe.io/api/v1/random" />
    <Select
      defaultValue="Admin"
      bordered={false}
      style={{
        width: 100,
        marginTop:20,
       
      }}
      
    >
      <Option value="Admin">Admin</Option>
      <Option value="User">User</Option>
    </Select>
   
    </Header>
    <Layout style={{marginTop:80,backgroundColor:"white"}}>
      
      <Sider trigger={null} collapsible collapsed={collapsed}
       style={{backgroundColor:"Lavender",marginTop:"100px"}}
      >
        {/* <div className="logo" /> */}
        <Menu
         style={{paddingTop:20,backgroundColor:"Lavender",position:"fixed",overflowX:"hidden",width:"200px",top:"50px",left:"0px",height:"100%",borderRight:0}}

          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
         
        />
        
       
      </Sider>
      <Layout
        // style={{
        //   padding: '0 24px 24px',backgroundColor:"white"
        // }}
      >
        {/* <Breadcrumb
          style={{
            margin: '16px 0',
            backgroundColor:"white"
          }}
        >
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb> */}
        <Content
          
          style={{
            marginTop:"-15px",
            backgroundColor:"white",
            
          }}
        >
          <p  style={{fontSize:20,fontWeight:"bold",marginLeft:10}}>Redgreen Sales</p>
           
          <img src="https://i.ibb.co/s91GfL5/Vector.png" style={{position: 'absolute', zIndex: 1, marginLeft: 20, marginTop:20}} alt="" />
          <img src="https://i.ibb.co/F0VMzbn/Vector.png" style={{position: 'absolute', zIndex: 3, marginLeft: 27, marginTop:53}} alt="" />
      <Alert
          message="Notification"
          description="You dont have enough stock for the next campaign."
          image="https://joeschmoe.io/api/v1/random"
          type="warning"
          closable
          style={{
              height: 90,
              color: '#9D8506',
              fonWeight: 400,
              fontSize: 16,
              paddingLeft:100,
              margin:10,
              position: 'relative',
              borderLeftColor: '#9D8506',
              borderLeftWidth:4
          }}
      />
          <Row>
      <Col flex={3}  >
      <Card style={{width:'900px',marginLeft:10,height:"80vh"}}>
      <p style={{fontSize:24,fontWeight:"bold"}}>Total sales</p>
        <div style={{display:"flex"}}>
        <div style={{marginTop:40}}>
        <p style={{color:'gray'}}>Tv</p>
        <p style={{fontSize:20,fontWeight:"semiBold"}}>600.00</p>
        <p style={{color:'gray'}}>Laptop</p>
        <p style={{fontSize:20,fontWeight:"semiBold"}}>12000.00</p>
        <p style={{color:'gray'}}>Others</p>
        <p style={{fontSize:20,fontWeight:"semiBold"}}>200.287</p></div>
          <div style={{width:"70%",marginLeft:'160px'}}>
          <Linechart />
          </div>
        </div>
  </Card>
      
      </Col>
      <Col style={{width:'350px'}} flex={2}>
      <Card style={{height:"80vh",marginRight:"10px",boxShadow:"10px"}}>
      <p style={{fontSize:24,fontWeight:"bold"}}>Sales chart</p>
        <p style={{color:'gray'}}>Laptop</p>
        <p style={{fontSize:28,fontWeight:"semiBold"}}>156</p>
      <Piechart/>
  </Card>
      </Col>
  
    </Row>
    <Row>
     
     <Col flex={2}>
     <Card style={{margin:10,}}>
      <TableData/>
      </Card>
      </Col>
     
     <Col flex={2}>
     <Card style={{margin:10,}}>
      <SaleDetails/>
      </Card>
      </Col>
     
    </Row>
         
         
        </Content>
      </Layout>
    </Layout>
  </Layout>

        )};

export default App;

