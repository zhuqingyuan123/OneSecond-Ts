import React from 'react';

function DataScreening() {
  return (
    <div>
      <div>
        <div className="text-[24px] font-medium">数据总览</div>
        <div className="mt-[60px]">
          <div className="ml-[-10px]  mr-[-10px] relative h-auto block box-border">
            <div className="ml-[10px] mr-[10px] block box-border w-[25%]">
              <div className="w-[100%] h-[100px] rounded-[4px] flex justify-start items-center relative">
                <div className="w-[60px] ml-[20px] text-center">
                  <div className="" />
                  <div className="text-[12px] text-[#999999] mt-[30px]">昨日新增</div>
                  <div className="">0人</div>
                </div>
                <div className="ml-[40px]">
                  <div className="text-[14px] text-[#333]">总用户数</div>
                  <div className="text-[24px] text-[#333]">
                    0<span className="text-[12px]">人</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataScreening;
