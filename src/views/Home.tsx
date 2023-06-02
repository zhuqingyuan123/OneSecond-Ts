import React, { useEffect, useState } from 'react';
import { getSongListType, getTopPlaylist } from '@/service/http';
import type { ResponseData } from '@/service/http';
import { useRequest } from 'ahooks';

// 类型断层

function App() {
  const [songListType, setSongListType] = useState<ResponseData['sub']>([]);
  // const [songListType, setSongListType] =
  //   useState < Awaited < typeof setSongListType >> ['data']['sub'];
  // console.log(songListType);
  const aa = useState(1);
  console.log(aa);
  useEffect(() => {
    getSongListType()
      .then((res) => {
        // console.log(res);
        setSongListType(res.data.sub);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);
  const { data: topPlaylist } = useRequest(() => getTopPlaylist({ cat: '全部' }));
  return (
    <>
      <ul>
        {topPlaylist?.map((item) => (
          <li key={item.id}>{item.description}</li>
        ))}
      </ul>
      <ul>
        {songListType.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
