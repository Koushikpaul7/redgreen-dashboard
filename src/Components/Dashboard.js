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
import Weather from './Weather';
import cloud from './../images/Vector (2).png'
import rain from './../images/Vector (1).png'
import App from '../App.css'
const { Header, Content, Sider } = Layout;

function getItem(icon,label, key,  children, type) {
  return {
    key,
    icon,
    label,
    children,
    type
  };
}
const items = [
   
  getItem('icon1','Menu', 'g1', [getItem( <AlignRightOutlined style={{transform: "rotate(90deg)"}} />,'Dashboard','1'),
  getItem(  <GrMapLocation/>,'Maps','2'),
  getItem( <BsMenuButton/> ,'Menu','3')
] ,'group'),
 getItem('icon2','Others', 'g2',[
  getItem(  <AiTwotoneSetting/>,'Settings','4'),
  getItem(  <HiUser/>,'Accounts','5'),
  getItem(  <BsFillInfoSquareFill/>,'Help','6'),
 ], 'group'),
]
      const { Search } = Input;

const onSearch = (value) => console.log(value);
const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [show, setShow] = useState(true);
   return(
    
  <Layout className='App'>
    <Header sm={'hidden'} style={{backgroundColor:"white",position:"fixed",zIndex:1,width:"100%",display:"flex",overflow:"hidden"}} >
     
      
      <p style={{color:'blue',fontSize:20,fontWeight:"bold"}}><small> <span style={{backgroundColor:'blue',padding:(5,8,5,8),color:"white", borderRadius:"50%",fontWeight:"bold",fontSize:10,marginRight:10}}>L</span>Loogoo</small></p>
      
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      className='search-box'
      
     
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
      
      <Sider className='side' trigger={null} collapsible collapsed={collapsed}
       style={{backgroundColor:"#E1E1E1",marginTop:"100px"}}
      >
        {/* <div className="logo" /> */}
        <Menu
         style={{paddingTop:20,backgroundColor:"#E1E1E1",position:"fixed",overflowX:"hidden",width:"200px",top:"50px",left:"0px",height:"100%",borderRight:0}}

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
           
          <img src={cloud} style={{position: 'absolute', zIndex: 1, marginLeft: 20, marginTop:20}} alt="" />
          <img src={rain} style={{position: 'absolute', zIndex: 3, marginLeft: 27, marginTop:53,}} alt="" />
      <Alert
          message="Notification"
          description="You dont have enough stock for the next campaign."
          image="https://joeschmoe.io/api/v1/random"
          type="warning"
          closable
          className='alert'
         style={{paddingLeft:100}}
      />
          <Row >
      <Col  xs={24} xl={18} flex={3}  >
      <Card className='first-card' style={{marginLeft:10,height:"80vh"}}>
      <p style={{fontSize:24,fontWeight:"bold"}}>Total sales</p>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <div style={{marginTop:40}}>
        <p style={{color:'gray'}}>Tv</p>
        <p style={{fontSize:20,fontWeight:"semiBold"}}>600.00</p>
        <p style={{color:'gray'}}>Laptop</p>
        <p style={{fontSize:20,fontWeight:"semiBold"}}>12000.00</p>
        <p style={{color:'gray'}}>Others</p>
        <p style={{fontSize:20,fontWeight:"semiBold"}}>200.287</p></div>
          <div style={{width:'70%'}}>
          <Linechart />
          </div>
        </div>
  </Card>
      
      </Col>
      <Col xs={24} xl={8} style={{marginLeft:10}} flex={2}>
      <Card style={{height:"80vh",marginRight:"10px",boxShadow:"10px"}}>
      <p style={{fontSize:24,fontWeight:"bold"}}>Sales chart</p>
        
        <div  style={{
            display:"flex",
            justifyContent:"space-between"
          }}>
          <div>
            <p style={{color:'gray'}}>Todays Sale</p>
          </div>
              <div>
              <Select 
      defaultValue="Today"
      style={{
      width: 80,
      }}
      
    >
      <Option value="Last week">Last week</Option>
      <Option value="Last Month">Last Month</Option>
    </Select>
              </div>
        </div>
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
          <Weather></Weather>
         

      </Col>

          
    </Row>
    
         
        </Content>
      </Layout>
    </Layout>
  </Layout>

        )};

export default Dashboard;

