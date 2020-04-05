import React from 'react';
import ParallaxImageSlideshow from '../parallax/Parallax';
import Cards from '../cards/Cards';
import Caption from '../caption/Caption';

export class Home extends React.Component {
    public render() {
        return (
            <>
                <ParallaxImageSlideshow images={[
                    'media/img/slideshow/artwork-1.jpeg', 'media/img/slideshow/artwork-2.jpeg'
                ]} secondsInterval={6} />
                <Cards cards={[
                    { img: 'media/img/cards/artwork-3.jpeg', caption: <Caption title={'SOMETHING BLA'} text={'Lorem ipsum sum'} date={'10/09/2020'}/> },
                    { img: 'media/img/cards/artwork-4.jpeg', caption: <Caption title={'SOMETHING BLA'} text={'Lorem ipsum sum'} date={'10/09/2020'}/> },
                    { img: 'media/img/cards/artwork-5.jpeg', caption: <Caption title={'SOMETHING BLA'} text={'Lorem ipsum sum'} date={'10/09/2020'}/> },
                    { img: 'media/img/cards/artwork-6.jpeg', caption: <Caption title={'SOMETHING BLA'} text={'Lorem ipsum sum'} date={'10/09/2020'}/> },
                    { img: 'media/img/cards/artwork-7.jpeg', caption: <Caption title={'SOMETHING BLA'} text={'Lorem ipsum sum'} date={'10/09/2020'}/> },
                    { img: 'media/img/cards/artwork-8.jpeg', caption: <Caption title={'SOMETHING BLA'} text={'Lorem ipsum sum'} date={'10/09/2020'}/> },
                    { img: 'media/img/cards/artwork-9.jpeg', caption: <Caption title={'SOMETHING BLA'} text={'Lorem ipsum sum'} date={'10/09/2020'}/> },
                ]}
                />
            </>
        );
    }
}

export default Home;
