import React from 'react';
import PropTypes from 'prop-types';
import AlbumLíst from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id:1,
            name: "Tình yêu hóa đá",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/8/7/5/78756e0e73ba99aafd67de76f4b742fb.jpg"
        },
        {
            id:2,
            name: "Yêu Sai Người",
            thumbnailUrl:'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/5/4/7/95473f42319ac6c5e4934ea446534a86.jpg'
        },
        {
            id:3,
            name: "Trong Trí Nhớ Của Anh",
            thumbnailUrl: '	https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/0/5/4/3054142743e7126f44a54ba61a72a68a.jpg'
        },
        {
            id:4,
            name: "Back In Time",
            thumbnailUrl: '	https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/1/7/2/7172e5eef050a364accf3109a0f7477a.jpg'
        }
    ]

    return (
        <div>
            <AlbumLíst albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;