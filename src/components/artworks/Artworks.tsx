import React from 'react';

export interface ArtworksProps {

}

export default class Artworks extends React.Component<ArtworksProps, {}> {
    public render() {
        return (
            <div className='artworks'>
                <h1>Artworks</h1>
            </div>
        );
    }
}