import 'antd/dist/reset.css';
import { Menu,Spin } from 'antd';
import React, { useEffect, useState }  from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import axios from 'axios';
import CryptoCurCard from './components/CryptoCurCard.jsx';
import './index.css';


const App = () => {

  const [cur, setCur] = useState([]);
  const [curID, setCurID] = useState(1);
  const [curInfo, setCurInfo] = useState(null);

  const fetchCur = () => {
    axios.get('http://127.0.0.1:8000/cryptocurrencies')
      .then((r) => {
        const CurResponse = r.data
        const menuItems = [
        {key: 'g1', label: 'Список криптовалют', type: 'group', children:CurResponse.map(
          c => {return {label: c.name, key: c.id}})}
        ]
        setCur(menuItems)
      })
  };

    const fetchCurID = () => {
    axios.get(`http://127.0.0.1:8000/cryptocurrencies/${curID}`)
      .then((r) => {

        setCurInfo(r.data)
      })
  };

  useEffect(() => {
    fetchCur();
  }, []);

    useEffect(() => {
    setCurInfo(null)
    fetchCurID();
  }, [curID]);



  const onClick = (e) => {
    setCurID(e.key)
  };
  return (
    <div className="flex h-screen">
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={cur}
        className="overflow-scroll"
      />
      <div className='flex mx-auto my-auto'>
        {curInfo ? <CryptoCurCard currency={curInfo}/> : <Spin size="large"/>}
      </div>
    </div>
  );
};
export default App;

