import { Divider } from 'antd';
import { Link } from 'react-router-dom';
import { MoreOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';

const TableData = () => {
    const [AllSalesData, setSalesData] = useState([]);

    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setSalesData(data))
    },[])

    return (
        <div>
            <div 
                style={{
                    display: "flex",
                    marginBottom: "20px",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>
                <div>
                    <h1 
                        style={{
                            fontSize:"22px", 
                            fontWeight: "bold",
                        }}>
                            Most Popular Product
                    </h1>
                </div>
                <div>
                    <MoreOutlined style={{ fontSize: '22px'}} />
                </div>
            </div>
            <div>
            {
                AllSalesData.map(salesData=>
                    <div>
                        <div className='product-main'>
                        <div className='product-sub'>
                            <div>
                                <div 
                                    style={{
                                        width: "45px",
                                        marginRight: "8px",
                                        padding: "8px 10px",
                                        textAlign: "center",
                                        borderRadius: "8px",
                                        border: "1px solid #d5cfcf",
                                        fontFamily: 'Poppins',
                                        fontStyle: 'normal',
                                        fontWeight: 500,
                                        fontSize: '20px',
                                        lineHeight: '26px'
                                    }}>
                                    <h1>{salesData.name}</h1>
                                </div>
                            </div>
                            <div>
                                <h1 style={{
                                    fontFamily: 'poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                }}>{salesData.title}</h1>
                                {
                                    salesData.profit < 0
                                    ?
                                    <h5 style={{color: "red"}}>{salesData.profit}% Increase</h5>
                                    :
                                    <h5 style={{color: "#747474"}}>{salesData.profit}% Increase</h5>
                                }
                            </div>
                        </div>
                        <div>
                            <span
                                style={{
                                    color: "red"
                                }}
                            >
                                {salesData.sales}
                            </span>
                        </div>
                       
                        </div>
                        
                        <Divider />
                        
                    </div>
                )
            }<p style={{color:"#2D5BFF",fontWeight: 500,
            fontSize: '14px'}}>Show more</p>
           
            </div>
        </div>
    );
};

export default TableData;