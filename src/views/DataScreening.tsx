import React from 'react';

function DataScreening() {
  const overview = [
    {
      claName: 'icon-touxiang_avatar',
      newAdded: 0,
      name: '总用户数',
      nameprice: 0,
      from: '#f3af19',
      to: '#ea6439',
      unit: '人'
    },
    {
      claName: 'icon-yangshi_icon_tongyong_money_bag',
      newAdded: 0,
      name: '总盈利',
      nameprice: 0,
      from: '#46aaf4',
      to: '#385cf4',
      unit: '元'
    },
    {
      claName: 'icon-icons8-task_completed1',
      newAdded: 0,
      name: '总交易额',
      nameprice: 0,
      from: '#5ad4e0',
      to: '#2299d2',
      unit: '元'
    },
    {
      claName: 'icon-purse-fill',
      newAdded: 0,
      name: '订单完成量',
      nameprice: 0,
      from: '#4ed855',
      to: '#3ec296',
      unit: '个'
    }
  ];

  return (
    <div>
      <div>
        <div className="text-[24px] font-medium">数据总览</div>
        <div className="mt-[60px]">
          <div className="ml-[-10px]  mr-[-10px] relative h-auto  box-border flex">
            {overview.map((item) => (
              <div
                className="ml-[10px] mr-[10px] block box-border w-[25%] shadow-2xl"
                key={item.name}
              >
                <div className="w-[100%] h-[100px] rounded-[4px] flex justify-start items-center relative">
                  <div className="w-[60px] ml-[20px] text-center">
                    <div
                      className="w-[60px] h-[60px] rounded-[4px] bg-white leading-[60px] text-center absolute top-[-20px]"
                      style={{
                        backgroundImage: `linear-gradient(to bottom right, ${item.from}, ${item.to}`
                      }}
                    >
                      <i className={`iconfont ${item.claName}`} />
                    </div>
                    <div className="text-[12px] text-[#999999] mt-[30px]">昨日新增</div>
                    <div className="">
                      {item.newAdded}
                      {item.unit}
                    </div>
                  </div>
                  <div className="ml-[40px]">
                    <div className="text-[14px] text-[#333]">{item.name}</div>
                    <div className="text-[24px] text-[#333]">
                      {item.nameprice}
                      <span className="text-[12px] ml-1">{item.unit}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="block w-[100%] clear-both min-w-full my-[24px] h-[1px] relative top-[-0.06em] align-middle" />
          <div className="" />
        </div>
      </div>
    </div>
  );
}

export default DataScreening;
