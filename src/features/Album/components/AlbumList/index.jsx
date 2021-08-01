import React from 'react';
import PropTypes from 'prop-types';
import Album from '../ALbum';
import './style.scss';

AlbumLíst.propTypes = {
    albumList: PropTypes.array,
};

function AlbumLíst(props) {
    const {albumList} = props;

    return (
        <ul className="album-List">
            {albumList.map(album => (
                <li key={album.id}>
                    <Album album={album}/>
                </li>
            ))}
        </ul>
    );
}

export default AlbumLíst;