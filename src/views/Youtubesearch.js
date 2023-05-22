import './Blog.scss';
import axios from 'axios';
import { usestae, useEffect, useState } from 'react';
import moment from 'moment/moment';

const YoutubeSearch = () => {
    const [video, setVideos] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {

    }, [])

    const handleSearchYoutube = async () => {
        // let res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        //     part: 'snippet',
        //     maxResults: 20,
        //     key: '',
        //     type: 'video',
        //     q: query
        // })

        let res = await axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params": {
                'part': 'snippet',
                'maxResults': '20',
                'key': 'AIzaSyAe18qQw254-a_BNtih2aRfJ1I9YgARn-s',
                type: 'video',
                'q': query
            }
        })
        console.log('>>check res: ', res)
        if (res && res.data && res.data.items) {
            let raw = res.data.items;
            let result = [];
            if (raw && raw.length > 0) {
                raw.map(item => {
                    let object = {};
                    object.id = item.id.videoId;
                    object.title = item.snippet.title;
                    object.createdAt = item.snippet.publishedAt;
                    object.author = item.snippet.channelTitle;
                    object.description = item.snippet.description;

                    result.push(object);
                })
            }
            console.log('>>> check result: ', result)
            setVideos(result)
        }

    }

    return (
        <div className="youtube-search-container">
            <div className="yt-search">
                <input type="text" placeholder='Search'
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <button type="button" onClick={handleSearchYoutube}>Search</button>
            </div>

            {video && video.length > 0 &&
                video.map(item => {
                    return (
                        <div className='yt-result' key={item.id}>
                            <div className='left'>
                                <iframe className='iframe-yt'
                                    src={`https://www.youtube.com/embed/${item.id}`}
                                    title="Vocabulary Test: Do you know these 10 words?"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                                </iframe>
                            </div>
                            <div className='right'>
                                <div className='title'>
                                    {item.title}
                                </div>
                                <div className='created-at'>
                                    Created at: {moment(item.createdAt).fromNow()}
                                </div>
                                <div className='author'>
                                    Author: {item.author}
                                </div>
                                <div className='description'>
                                    Description: {item.description}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default YoutubeSearch;


// {
//     "kind": "youtube#searchListResponse",
//     "etag": "1vrioLao4pi-ZAGyxtp3aRWddzA",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "VN",
//     "pageInfo": {
//       "totalResults": 26237,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "IRbMY90yA-skvewGrqLJF1TVo1A",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "SSo7Vhclm3s"
//         },
//         "snippet": {
//           "publishedAt": "2023-05-21T11:01:45Z",
//           "channelId": "UCA_23dkEYToAc37hjSsCnXA",
//           "title": "(Goose Goose Duck) Độ Cảnh Sát Trưởng cả tin và pha ra súng đi vào lòng đất.",
//           "description": "Chúc các bạn xem stream vui vẻ. ▻Lịch Live: * 22:15-23:59 hàng ngày trên Youtube. * 0:01-03:00 hàng ngày trên: ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/SSo7Vhclm3s/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/SSo7Vhclm3s/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/SSo7Vhclm3s/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "MixiGaming",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-05-21T11:01:45Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "Qda13ECxyHIM4hg1LN2MbaATi_Y",
//         "id": {
//           "kind": "youtube#channel",
//           "channelId": "UCA_23dkEYToAc37hjSsCnXA"
//         },
//         "snippet": {
//           "publishedAt": "2012-11-24T01:45:34Z",
//           "channelId": "UCA_23dkEYToAc37hjSsCnXA",
//           "title": "MixiGaming",
//           "description": "Mình là Độ - - Thỉnh thoảng rảnh chó ko có gì làm mình hay edit clip vui, tất cả đều do team mình chơi tự nhiên, trong clip có khá ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://yt3.ggpht.com/ytc/AGIKgqM04eO32GH9YXvcwVOeWs7QjH7rO5GYPHVU3LoUbA=s88-c-k-c0xffffffff-no-rj-mo"
//             },
//             "medium": {
//               "url": "https://yt3.ggpht.com/ytc/AGIKgqM04eO32GH9YXvcwVOeWs7QjH7rO5GYPHVU3LoUbA=s240-c-k-c0xffffffff-no-rj-mo"
//             },
//             "high": {
//               "url": "https://yt3.ggpht.com/ytc/AGIKgqM04eO32GH9YXvcwVOeWs7QjH7rO5GYPHVU3LoUbA=s800-c-k-c0xffffffff-no-rj-mo"
//             }
//           },
//           "channelTitle": "MixiGaming",
//           "liveBroadcastContent": "upcoming",
//           "publishTime": "2012-11-24T01:45:34Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "qniP7R4UXtbqzCGWfj72QXi9UqQ",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "jLHHpHGm8gY"
//         },
//         "snippet": {
//           "publishedAt": "2023-05-20T18:26:39Z",
//           "channelId": "UCA_23dkEYToAc37hjSsCnXA",
//           "title": "(Restream) Tham khảo lịch trình cùng team Refund đi Phan Thiết, mở hòm CSGO và cái kết buồn.",
//           "description": "Lịch Livestream cố định đến năm 2059. * 22:22 - 23h59 hàng ngày trên này. * 0:01-03:00 hàng ngày trên: https://svip.nimo.tv/mixi ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/jLHHpHGm8gY/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/jLHHpHGm8gY/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/jLHHpHGm8gY/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "MixiGaming",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-05-20T18:26:39Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "cTpNgERy81Z9Z6pb6kqdmbiPqk8",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "PNv-i6PXrCc"
//         },
//         "snippet": {
//           "publishedAt": "2023-05-17T12:00:19Z",
//           "channelId": "UCA_23dkEYToAc37hjSsCnXA",
//           "title": "(Goose Goose Duck) Độ Ám Sát và những phát súng oan nghiệt.",
//           "description": "Chúc các bạn xem stream vui vẻ. ▻Lịch Live: * 22:15-23:59 hàng ngày trên Youtube. * 0:01-03:00 hàng ngày trên: ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/PNv-i6PXrCc/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/PNv-i6PXrCc/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/PNv-i6PXrCc/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "MixiGaming",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-05-17T12:00:19Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "ow_E3mv9MIp86oFD3WLMs7oCBk8",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "4Nbe1prkXZ8"
//         },
//         "snippet": {
//           "publishedAt": "2023-05-20T10:00:04Z",
//           "channelId": "UCA_23dkEYToAc37hjSsCnXA",
//           "title": "(The Outlast Trials #1) Rủ huynh đệ sống sót khỏi đồn cảnh sát và cái kết gào đứt phanh môi.",
//           "description": "Chúc các bạn xem stream vui vẻ. ▻Lịch Live: * 22:15-23:59 hàng ngày trên Youtube. * 0:01-03:00 hàng ngày trên: ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/4Nbe1prkXZ8/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/4Nbe1prkXZ8/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/4Nbe1prkXZ8/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "MixiGaming",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-05-20T10:00:04Z"
//         }
//       }
//     ]
//   }
